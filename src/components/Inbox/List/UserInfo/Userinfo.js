import { useAuthContext } from "../../../../context/AuthContext";
import style from "./Userinfo.module.css";
function UserInfo() {
  const { authUser } = useAuthContext();
  console.log(authUser);
  return (
    <div className={`${style.userInfo} p-3 d-flex gap-5`}>
      <div className={`${style.user} d-flex gap-3`}>
        <img src="./avatar.png" alt="avatar"></img>
        <div></div>
        <h2>{authUser.name}</h2>
      </div>
      <div className={`${style.icons} gap-3`}>
        <img src="./more.png"></img>
        <img src="./video.png"></img>
        <img src="./edit.png"></img>
      </div>
    </div>
  );
}

export default UserInfo;
