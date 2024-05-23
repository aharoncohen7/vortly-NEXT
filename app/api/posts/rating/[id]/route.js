import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { NextResponse } from "next/server";


// export const PATCH = async ({id,newRating, authorization}) => {
export const PATCH = async (req, { params }) => {
    const body = await req.json()
    const h = headers()
    console.log(h.get('authorization'), body);

    try {
        const response = await fetch(`https://vortly-db.onrender.com/api/posts/rating/${params.id}`, {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'authorization': h.get('authorization') || ''
            }
        })
        // .then(res=> { 
        //     console.log(res);
        //    return res
        // });
        // console.log(response);
        if (!response.ok) {
            // console.log("hhhhhh");
            if (response.status == 401) {
                console.log("פעולת הדירוג לא הצליחה");
            }
            if (response.status == 404) {
                console.log("דירוג כפול נחסם")
            }
            console.log("פעולת הדירוג לא הצליחה")
            // throw new Error(`Failed to update rating! Status: ${response.status}`);
            return NextResponse.json(response.status)
        }
        else {
            console.log("revalidatePath");
            const editedPost = await response.json();
            console.log(editedPost);
            revalidatePath(`/posts/${params.id}`)
            return NextResponse.json(editedPost)
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json(error)
    }
}

export const GET = async () => {
    try {

        return NextResponse.json({ id: 'rrrr', status: 600 })
    } catch (error) {
        console.log(error);
    }

}