"use client"
import { axiosReq } from '@/helpers';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useState } from 'react';


export default function MyRating({ item }) {
    const [rating, setRating] = useState(item.rating)
   
    // דירוג פוסט
    async function updateRating(event) {
        const newRating = event.target.value;
        console.log(newRating);
        // קבלת פוסטים
        const editedPost = await axiosReq({ method: 'PATCH', body: {newRating}, url: `posts/rating/${item.id}` })
        console.log(editedPost)
        if (editedPost.id) {
            console.log("הצלחה בדירוג צד לקוח", editedPost.rating);
            setRating(editedPost.id)
        }
        else {
            console.log("לא ניתן לדרג פעמיים");
        }

}





return (
    <Stack spacing={1}>
        <Rating name="half-rating"
            value={parseFloat(rating)}
            // value={parseFloat(item.rating)}
            defaultValue={0.0} precision={0.5} onChange={updateRating} />
    </Stack>
)
}




 // דירוג פוסט
//  async function updateRating(event) {
//     const newRating = event.target.value;
//     console.log(newRating);
//     try {
//         // const response = await fetch(`https://vortly-db.onrender.com/api/posts/rating/${item.id}`, {
//         //     method: 'PATCH',
//         //     body: JSON.stringify({
//         //         newRating,
//         //     }),
//         //     headers: {
//         //         'Content-type': 'application/json; charset=UTF-8',
//         //         'authorization': localStorage.getItem('Authorization') || ''
//         //     }
//         // })
//         // const response = await updateRatingAction(item.id, newRating, localStorage.getItem('Authorization') || '')
//         const response = await fetch(`http://localhost:3000/api/posts/rating/${item.id}`, {
//             method: 'PATCH',
//             body: JSON.stringify({
//                 newRating,
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//                 'authorization': localStorage.getItem('Authorization') || ''
//             }
//         })
//         const editedPost = await response.json();
//         console.log(editedPost);
//         if (editedPost.id) {
//             console.log("הצלחה בדירוג צד לקוח", editedPost.rating);
//             setRating(response.rating)
//         }
//         else {

//             console.log("לא ניתן לדרג פעמיים");
//         }
//     }
//     catch (error) {
//         // setMessage(["שגיאה" + error.message, false]);
//         console.error(error.message);
//     }

// }
