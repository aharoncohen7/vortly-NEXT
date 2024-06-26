
  const torah = {
      "בראשית": ["בראשית", "נח", "לך לך", "וירא", "חיי שרה", "תולדות", "ויצא", "וישלח", "וישב", "מקץ", "ויגש", "ויחי"],
      "שמות": ["שמות", "וארא", "בא", "בשלח", "יתרו", "משפטים", "תרומה", "תצווה", "כי תשא", "ויקהל", "פקודי"],
      "ויקרא": ["ויקרא", "צו", "שמיני", "תזריע", "מצורע", "אחרי מות", "קדושים", "אמור", "בהר", "בחקותי"],
      "במדבר": ["במדבר", "נשא", "בהעלותך", "שלח", "קרח", "חוקת", "בלק", "פנחס", "מטות", "מסעי"],
      "דברים": ["דברים", "ואתחנן", "עקב", "ראה", "שופטים", "כי תצא", "כי תבא", "נצבים", "וילך", "האזינו", "וזאת הברכה"],
      "חגים": ["פסח", "סוכות",  "שבועות", "חנוכה",  "פורים", "בין המצרים",  "ל''ג בעומר",]
    
    }


export default function Select({ selectedBook, setSelectedBook, selectedPortion, setSelectedPortion }) {

  // פונקציה לבניית רשימת אפשרויות לסלקט
  function buildOptions(data) {
    return Object.keys(data).map((book) => (
      <option key={book} value={book}>
        {book}
      </option>
    ));
  }

  // אירוע בחירת חומש
  const handleBookChange = (event) => {
    setSelectedBook(event.target.value);
    setSelectedPortion(""); // לאחר בחירת חומש, איפוס בחירת הפרשיה
  };


  return (
    <div className=" flex flex-row-reverse">

      {/* סלקט החומשים */}
      <select className='relative py-2 pl-3 pr-10 text-right bg-white rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50' value={selectedBook} onChange={handleBookChange}>
        <option className='block w-full px-4 text-right text-gray-900 bg-gray-100 py-21' value="" >בחר חומש</option>
        {buildOptions(torah)}
      </select>



      {/* סלקט הפרשיות  */}
      <select className='relative py-2 pl-3 pr-10 mr-2 text-right bg-white rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50' disabled={!selectedBook} value={selectedPortion} onChange={(event) => { setSelectedPortion(event.target.value) }}>
        <option className='' value="">בחר פרשה</option>
        {selectedBook &&
          torah[selectedBook].map((portion) => (
            <option className='block w-full px-4 py-2 text-right text-gray-900 bg-gray-100'
              key={portion} value={portion}>
              {portion}
            </option>
          ))}
      </select>
    </div>



  );
}



