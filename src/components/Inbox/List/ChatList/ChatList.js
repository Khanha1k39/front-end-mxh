import style from "./ChatList.module.css";
function ChatList() {
  return (
    <div className={`${style.chatList}  `}>
      <div className="search pt-0 p-3">
        <div className={`${style.searchBar} p-2 d-flex`}>
          <img src="./search.png"></img>
          <input type="text" placeholder="Search"></input>
        </div>
      </div>
      <div className={`${style.listUsersInbox}  `}>
        <div className={`${style.userInbox} gap-3 p-3 d-flex`}>
          <img src="./avatar.png"></img>
          <div className={`${style.texts}  gap-1`}>
            <span className="fs-5 fw-bolder">Nguyen</span>
            <p className="m-0 fs-6 fw-normal">you 're free rn?</p>
          </div>
        </div>

        <div className={`${style.userInbox} gap-3 p-3 d-flex`}>
          <img src="./avatar.png"></img>
          <div className={`${style.texts}  gap-1`}>
            <span className="fs-5 fw-bolder">Nguyen</span>
            <p className="m-0 fs-6 fw-normal">you 're free rn?</p>
          </div>
        </div>

        <div className={`${style.userInbox} gap-3 p-3 d-flex`}>
          <img src="./avatar.png"></img>
          <div className={`${style.texts}  gap-1`}>
            <span className="fs-5 fw-bolder">Nguyen</span>
            <p className="m-0 fs-6 fw-normal">you 're free rn?</p>
          </div>
        </div>

        <div className={`${style.userInbox} gap-3 p-3 d-flex`}>
          <img src="./avatar.png"></img>
          <div className={`${style.texts}  gap-1`}>
            <span className="fs-5 fw-bolder">Nguyen</span>
            <p className="m-0 fs-6 fw-normal">you 're free rn?</p>
          </div>
        </div>

        <div className={`${style.userInbox} gap-3 p-3 d-flex`}>
          <img src="./avatar.png"></img>
          <div className={`${style.texts}  gap-1`}>
            <span className="fs-5 fw-bolder">Nguyen</span>
            <p className="m-0 fs-6 fw-normal">you 're free rn?</p>
          </div>
        </div>

        <div className={`${style.userInbox} gap-3 p-3 d-flex`}>
          <img src="./avatar.png"></img>
          <div className={`${style.texts}  gap-1`}>
            <span className="fs-5 fw-bolder">Nguyen</span>
            <p className="m-0 fs-6 fw-normal">you 're free rn?</p>
          </div>
        </div>

        <div className={`${style.userInbox} gap-3 p-3 d-flex`}>
          <img src="./avatar.png"></img>
          <div className={`${style.texts}  gap-1`}>
            <span className="fs-5 fw-bolder">Nguyen</span>
            <p className="m-0 fs-6 fw-normal">you 're free rn?</p>
          </div>
        </div>

        <div className={`${style.userInbox} gap-3 p-3 d-flex`}>
          <img src="./avatar.png"></img>
          <div className={`${style.texts}  gap-1`}>
            <span className="fs-5 fw-bolder">Nguyen</span>
            <p className="m-0 fs-6 fw-normal">you 're free rn?</p>
          </div>
        </div>

        <div className={`${style.userInbox} gap-3 p-3 d-flex`}>
          <img src="./avatar.png"></img>
          <div className={`${style.texts}  gap-1`}>
            <span className="fs-5 fw-bolder">Nguyen</span>
            <p className="m-0 fs-6 fw-normal">you 're free rn?</p>
          </div>
        </div>

        <div className={`${style.userInbox} gap-3 p-3 d-flex`}>
          <img src="./avatar.png"></img>
          <div className={`${style.texts}  gap-1`}>
            <span className="fs-5 fw-bolder">Nguyen</span>
            <p className="m-0 fs-6 fw-normal">you 're free rn?</p>
          </div>
        </div>

        <div className={`${style.userInbox} gap-3 p-3 d-flex`}>
          <img src="./avatar.png"></img>
          <div className={`${style.texts}  gap-1`}>
            <span className="fs-5 fw-bolder">Nguyen</span>
            <p className="m-0 fs-6 fw-normal">you 're free rn?</p>
          </div>
        </div>

        <div className={`${style.userInbox} gap-3 p-3 d-flex`}>
          <img src="./avatar.png"></img>
          <div className={`${style.texts}  gap-1`}>
            <span className="fs-5 fw-bolder">Nguyen</span>
            <p className="m-0 fs-6 fw-normal">you 're free rn?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
