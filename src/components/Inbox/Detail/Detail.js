import style from "./Detail.module.css";
function Detail() {
  return (
    <div className={`${style.detail}`}>
      <div
        className={`${style.user} d-flex flex-column align-items-center gap-3 px-3 py-4`}
      >
        <img src="./avatar.png"></img>
        <h2>Khánh Dương</h2>
      </div>
      <div className="info d-flex flex-column p-3 gap-4">
        <div className={`${style.option}`}>
          <div className={`${style.title}`}>
            <span>Chat settings</span>
            <img src="./arrowUp.png"></img>
          </div>
        </div>

        <div className={`${style.option}`}>
          <div className={`${style.title}`}>
            <span>Shared Photos</span>
            <img src="./arrowDown.png"></img>
          </div>
        </div>

        <div className={`${style.option}`}>
          <div className={`${style.title}`}>
            <span>Shared Files</span>
            <img src="./arrowUp.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
