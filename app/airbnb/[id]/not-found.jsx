import Navlink from "@/components/Navlink";
import MyNotFound from "@/components/NotFound";


export default function NotFound() {

    return (
           <MyNotFound details={{message: "Hotel not found.", subMessage : "we are sorry!", to: "/airbnb", buttonMSG: "למלונות נוספים" }}/>
    )
}