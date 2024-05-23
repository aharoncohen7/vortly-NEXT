"use server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const updateRatingAction = async (id, newRating, authorization) => {
    try {
        const response = await fetch(`https://vortly-db.onrender.com/api/posts/rating/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                newRating,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'authorization': authorization
            }
        })
        console.log(response);
        if (!response.ok) {
            if (response.status == 401) {
                console.log("פעולת הדירוג לא הצליחה");
            }
            if (response.status == 404) {
                console.log("דירוג כפול נחסם");
                return
    
            }
        
            console.log("פעולת הדירוג לא הצליחה");
        }
        const editedPost = await response.json();
        revalidatePath(`/post/${id}`)
        return editedPost;
    } catch (error) {
        console.log({ error });
    }
} 