"use client"

import Editor from '@/components/Editor'
import Select from '@/components/SelectPerasha';
import { axiosReq, axiosReqToRender } from '@/helpers';
import React, { useState } from 'react'

const NewVort = () => {
  const [message, setMessage] = useState("")
  const [isAddingTag, setIsAddingTag] = useState(false);
  const [initialPost, setInitialPost] = useState(null);
  const [title, setTitle] = useState(initialPost ? initialPost.title : '');
  // const [body, setBody] = useState(initialPost ? initialPost.body : '');
  const [tags, setTags] = useState(initialPost && initialPost.tags ? initialPost.tags : [])
  const [selectedBook, setSelectedBook] = useState(initialPost && initialPost.topic ? initialPost.topic : "");
  const [selectedPortion, setSelectedPortion] = useState(initialPost && initialPost.subtopic ? initialPost.subtopic : "");
  // מאפס קומפוננט editor
  const [resetKey, setResetKey] = useState(0);

  // בודק אם ניתן לשלוח פוסט - משחרר כפתור שליחה
  // useEffect(() => {
  //   setIsComplete(prev => {
  //     if (!prev && checkFields()) {
  //       console.log(body);
  //       return true;
  //     }
  //     if (prev && !(checkFields())) {
  //       return false;
  //     }
  //     // אם התנאים לא מתקיימים, חוזר על הערך הקודם
  //     return prev;
  //   });
  // }, [selectedBook, selectedPortion, title, body]);





  const createNewPost = async (obg) => {
    // if (title.trim() == "") {
    //   alert("הכנס כותרת")
    //   return;
    // }
    // if(!checkFields()){
    //   alert("הכנס תוכן")
    //   return;
    // }
    const body = obg.content;
    console.log("🚀 ~ createNewPost ~ body:", body)
    if (!body || !checkFields(body)) {
      alert("הכנס כותרת ותוכן")
      return;
    }
    try {
      const result = await axiosReqToRender({
        method: 'POST',
        url: 'posts/',
        body: { userId: 37, selectedBook, selectedPortion, title, body, ...(tags.length > 0 && { tags }), }
      })
      if (result) {
        console.log(result);
        resetEditor()
        // navTo(`/chats/sent emails/${result}`)
      }
      else {
        alert('הטקסט לא נשלח')
      }

    } catch (e) {
      alert("Failed to send message")
      console.error(e)
    }
  }


  //  הוספת תגית
  const handleSaveTag = (value) => {
    if (value) {
      setTags([...tags, value]);
      setIsAddingTag(false);
    }
  };

  // מחיקת תגית
  const handleRemoveTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };


  // בדיקת תקינות שדות הכרחיים
  function checkFields(body) {
    if (selectedBook && selectedPortion && title && title.trim().length >= 20 && checkBody(body)) {
      return true;
    }
    return false;
  }

  // בדיקת אורך פוסט מינימלי
  function checkBody(body) {
    // פיצול ה- HTML לתוך מערך של מחרוזות על פי התגיות
    const textParts = body.split(/<[^>]+>/).filter(Boolean);
    // סכימת אורך כל המחרוזות בין התגיות
    const sum = textParts.reduce((acc, text) => acc + text.trim().length, 0);
    console.log(sum);
    // בדיקה האם הסכום גבוה מ־30 והחזרת תוצאה
    return sum > 30;
  }

  // Increment the key to force component remount
  const resetEditor = () => {
    setResetKey(prevKey => prevKey + 1);
  };












  return (
    <div>
      <Select selectedBook={selectedBook} setSelectedBook={setSelectedBook} selectedPortion={selectedPortion} setSelectedPortion={setSelectedPortion} />
      {selectedBook && selectedPortion &&
        <input className=' relative w-full inline-flex  justify-center gap-x-5.5 mt-10 px-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-600 hover:bg-gray-50 py-2 pl-3 pr-10 text-right bg-white rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50' type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='בחר כותרת למאמר באורך של 20 תווים ומעלה' />}
      <Editor key={resetKey} setResetKey={setResetKey} onSend={createNewPost} />
      {isAddingTag ? (
        <div>
          <input
            type="text"
            name="newTag"
            placeholder="הזן תגית חדשה"
            autoFocus
            onBlur={(event) => handleSaveTag(event.target.value)}
          />
        </div>
      ) : (
        <div>
          {tags.map((tag, index) => (
            <div style={{ display: "flex" }} key={index}>
              {tag}
              <button type="button" onClick={() => handleRemoveTag(index)}>
                הסר תגית -
              </button>
            </div>
          ))}
          <button type="button" onClick={() => setIsAddingTag(true)}>
            + הוסף תגית
          </button>
        </div>
      )}
      {message && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  )
}

export default NewVort
