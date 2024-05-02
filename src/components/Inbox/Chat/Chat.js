import style from "./Chat.module.css";
import Button from "react-bootstrap/Button";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
function Chat() {
  const [openEmj, setOpenEmj] = useState(false);
  const [msgInput, setMsgInput] = useState("");
  const handleEmoji = (e) => {
    setMsgInput((pre) => pre + e.emoji);
  };
  return (
    <div className={`${style.chat}`}>
      <div className={`${style.top} d-flex p-3 gap-3`}>
        <div className={`${style.user} gap-2 d-flex align-items-center`}>
          <img src="./avatar.png"></img>
          <div className={`${style.texts} `}>
            <span className="fs-5 fw-bolder">Nguyen</span>
            <p className="m-0 fs-6 fw-normal">Activing</p>
          </div>
        </div>
        <div className={`${style.icons} d-flex gap-3`}>
          <img src="./phone.png"></img>
          <img src="./video.png"></img>
          <img src="./info.png"></img>
        </div>
      </div>
      <div className={`${style.center} p-3 gap-3`}>
        <div className={`${style.message}  gap-3`}>
          <img src="./avatar.png"></img>
          <div className={`${style.texts} p-3 gap-1`}>
            <img src="https://scontent.fvii2-4.fna.fbcdn.net/v/t39.30808-6/438795823_967155468743936_8683952315895548134_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF2358vggGKEGMJbNQ3ZU2tkfLWGHyjjROR8tYYfKONE1u2DggQHdV2IlgOQAIUuBXp3KBHS-uuZJVlpPniHr0-&_nc_ohc=AZHFzSTd-WMQ7kNvgHhOL6u&_nc_ht=scontent.fvii2-4.fna&cb_e2o_trans=t&oh=00_AfC6nWtCIm4DXnskomIVOyPJkCJjE4WbkTVSnWdiwIn2_g&oe=66399414"></img>
            <p className="p-3">
              img elements must have an alt prop, either with meaningful text,
              or an empty string for decorative images jsx-a11y/alt-text
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className={`${style.message}  ${style.own} gap-3`}>
          <div className={`${style.texts} p-3 gap-1`}>
            <img src="https://scontent.fvii2-4.fna.fbcdn.net/v/t39.30808-6/438795823_967155468743936_8683952315895548134_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF2358vggGKEGMJbNQ3ZU2tkfLWGHyjjROR8tYYfKONE1u2DggQHdV2IlgOQAIUuBXp3KBHS-uuZJVlpPniHr0-&_nc_ohc=AZHFzSTd-WMQ7kNvgHhOL6u&_nc_ht=scontent.fvii2-4.fna&cb_e2o_trans=t&oh=00_AfC6nWtCIm4DXnskomIVOyPJkCJjE4WbkTVSnWdiwIn2_g&oe=66399414"></img>

            <p className="p-3">
              img elements must have an alt prop, either with meaningful text,
              or an empty string for decorative images jsx-a11y/alt-text
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={`${style.message}  gap-3`}>
          <img src="./avatar.png"></img>
          <div className={`${style.texts} p-3 gap-1`}>
            <img src="https://scontent.fvii2-4.fna.fbcdn.net/v/t39.30808-6/438795823_967155468743936_8683952315895548134_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF2358vggGKEGMJbNQ3ZU2tkfLWGHyjjROR8tYYfKONE1u2DggQHdV2IlgOQAIUuBXp3KBHS-uuZJVlpPniHr0-&_nc_ohc=AZHFzSTd-WMQ7kNvgHhOL6u&_nc_ht=scontent.fvii2-4.fna&cb_e2o_trans=t&oh=00_AfC6nWtCIm4DXnskomIVOyPJkCJjE4WbkTVSnWdiwIn2_g&oe=66399414"></img>
            <p className="p-3">
              img elements must have an alt prop, either with meaningful text,
              or an empty string for decorative images jsx-a11y/alt-text
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className={`${style.message}  ${style.own} gap-3`}>
          <div className="texts">
            <p className="p-3">
              img elements must have an alt prop, either with meaningful text,
              or an empty string for decorative images jsx-a11y/alt-text
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>

      <div className={`${style.bottom} p-3 gap-3 d-flex`}>
        <div className={`${style.icons} d-flex gap-3`}>
          <img src="./mic.png"></img>
          <img src="./img.png"></img>
        </div>
        <input
          className="p-1"
          type="text"
          placeholder="Type a message ..."
          value={msgInput}
          onChange={(e) => {
            setMsgInput(e.target.value);
          }}
        ></input>
        <div className={`${style.emoji}`}>
          <img
            src="./emoji.png"
            onClick={() => {
              setOpenEmj((pre) => !pre);
            }}
          ></img>
          <div className={`${style.emojiPicker}`}>
            <EmojiPicker
              open={openEmj}
              onEmojiClick={handleEmoji}
            ></EmojiPicker>
          </div>
        </div>
        <Button variant="outline-primary">Send</Button>
      </div>
    </div>
  );
}

export default Chat;
