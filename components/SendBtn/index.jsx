import { IoIosSend } from "react-icons/io";
import styles from './style.module.css'

export default function SendBtn({sendMessage}) {
   return (
      <p className={styles.main}>
         <IoIosSend size={"20px"}/>
        <span onClick={sendMessage}>Send</span> 
       
      </p>
   )
}