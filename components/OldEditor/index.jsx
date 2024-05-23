"use client"

import React, { useState, useEffect} from 'react';
import Select from '@/components/Select'
import { importedAddNew, importedEdit } from "@/functions/postFunctions"

export default function Editor({ send, setSend, setComplete, setShowEditor, initialPost }) {
    // const { postId } = useParams()
    // const { userId,  } = useContext(DataContext)
    // const [selectedBook, setSelectedBook] = useState(initialPost && initialPost.topic ? initialPost.topic : "");
    // const [selectedPortion, setSelectedPortion] = useState(initialPost && initialPost.subtopic ? initialPost.subtopic : "");
    // const [title, setTitle] = useState(initialPost ? initialPost.title : '');
    // const [body, setBody] = useState(initialPost ? initialPost.body : '');
    // const [tags, setTags] = useState(initialPost && initialPost.tags ? initialPost.tags : [])
    // const [isAddingTag, setIsAddingTag] = useState(false);

    // יצירת פוסט בפועל
    useEffect(() => {
        if (send) {
            sendPost();
        }
    }, [send]);

    // // מטפל תוכן מאמר
    // const handleContentChange = (newBody) => {
    //     console.log(newBody);
    //     setBody(newBody);
    // };

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

    // בדיקת אורך פוסט מינימלי
    function checkBody() {
        // פיצול ה- HTML לתוך מערך של מחרוזות על פי התגיות
        const textParts = body.split(/<[^>]+>/).filter(Boolean);
        // סכימת אורך כל המחרוזות בין התגיות
        const sum = textParts.reduce((acc, text) => acc + text.trim().length, 0);
        console.log(sum);
        // בדיקה האם הסכום גבוה מ־60 והחזרת תוצאה
        return sum > 60;
    }

    // בדיקת תקינות שדות הכרחיים
    function checkFields() {
        if (selectedBook && selectedPortion && title && title.length >= 20 && body && checkBody()) {
            return true;
        }
        return false;
    }

    // בודק אם ניתן לשלוח פוסט - משחרר כפתור שליחה
    useEffect(() => {
        setComplete(prev => {
            if (!prev && checkFields()) {
                console.log(body);
                return true;
            }
            if (prev && !(checkFields())) {
                return false;
            }
            // אם התנאים לא מתקיימים, חוזרים על הערך הקודם
            return prev;
        });
    }, [selectedBook, selectedPortion, title, body]);



    function sendPost() {
        // if(postId){
        //     importedEdit(postId, selectedBook, selectedPortion, title, body, tags, setOriginalData,  setMessage, setSend, setShowEditor, logOut, navigate)
        // }
        // else{
            importedAddNew(userId, selectedBook, selectedPortion, title, body, tags, setOriginalData, setMessage, setSend, setShowEditor, logOut, navigate)
        // }
                        
    }


    return (
        < >
            {selectedBook && selectedPortion &&
                <div >
                    <input className=' relative w-full inline-flex  justify-center gap-x-5.5 mt-10 px-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-600 hover:bg-gray-50 py-2 pl-3 pr-10 text-right bg-white rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50' type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='בחר כותרת למאמר באורך של 20 תווים ומעלה' />
                    {title && title.length > 19 &&
                        <ReactQuill theme="snow" onChange={handleContentChange} modules={module} value={body} />}

                    <div>
                        {checkBody() && isAddingTag ? (
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
                                {checkBody() && <button type="button" onClick={() => setIsAddingTag(true)}>
                                    + הוסף תגית
                                </button>}
                            </div>
                        )}
                    </div>
                </div>}
                {message && <p style={{ color: 'red' }}>{message}</p>}
        </>
    )
}





