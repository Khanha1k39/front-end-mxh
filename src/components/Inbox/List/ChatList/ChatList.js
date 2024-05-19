import { useSocketContext } from "../../../../context/SocketContext";
import useGetConversation from "../../../../hoooks/useGetConversations";
import useConversation from "../../../../zustand/useConversation";
import style from "./ChatList.module.css";
import React, { useState, useEffect } from "react";

function ChatList() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [searchTerm, setSearchTerm] = useState("");
  const { loading, conversations } = useGetConversation();
  const { onlineUsers } = useSocketContext();
  console.log("onlineUser", onlineUsers);
  console.log(conversations);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      console.log(searchTerm);
    }, 500);
    return () => clearTimeout(debounceTimeout);
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className={`${style.chatList}  `}>
      <div className="search pt-0 p-3">
        <div className={`${style.searchBar} p-2 d-flex`}>
          <img src="./search.png"></img>
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            value={searchTerm}
          ></input>
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
        {conversations.map((conversation) => {
          const isOnline = onlineUsers.includes(conversation.email);
          const isSelected = conversation.id === selectedConversation?.id;
          return (
            <div
              key={conversation.id}
              className={`${style.userInbox} ${
                isSelected ? "bg-primary" : ""
              } gap-3 p-3 d-flex`}
              onClick={() => {
                setSelectedConversation(conversation);
              }}
            >
              <img src="./avatar.png"></img>
              <div className={`${style.texts}  gap-1`}>
                <span className="fs-5 fw-bolder">
                  {isOnline
                    ? conversation.name + " Đang onlien"
                    : conversation.name}
                </span>
                <p className="m-0 fs-6 fw-normal">you 're free rn?</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChatList;
