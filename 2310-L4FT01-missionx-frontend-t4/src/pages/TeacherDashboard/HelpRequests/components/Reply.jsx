import style from "./Reply.module.css"
import { MdReply } from "react-icons/md";

// This is the "Reply" button component on the Help Requests page.

export default function Reply() {
  return (
    <div className = {style.container}>
        <div className = {style.icon}>
            <MdReply/>
        </div>
        <span className = {style.reply}>REPLY</span>
    </div>
  )
}
