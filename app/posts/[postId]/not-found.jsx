import Navlink from "@/components/Navlink";
import MyNotFound from "@/components/NotFound";


export default function NotFound() {

    return (
           <MyNotFound details={{message: "Post not found.", subMessage : "we are sorry!", to: "/posts", buttonMSG: "לפוסטים נוספים" }}/>
    )
}