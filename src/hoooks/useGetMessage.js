import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import useGetConversation from "./useGetConversations";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const {
    messages,
    setMessages,
    setSelectedConversation,
    selectedConversation,
  } = useConversation();
  const { conversations } = useGetConversation();
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      console.log("selectedIdConver", selectedConversation.id);
      const res = await fetch(
        `http://localhost:8080/message/${selectedConversation.id}`,
        { credentials: "include" }
      );
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setMessages(data);

      try {
      } catch (error) {
        toast.error(error.messages);
      } finally {
        setLoading(false);
      }
    };
    console.log("selectedConversation", selectedConversation);
    if (selectedConversation?.id) {
      getMessages();
    } else {
      if (conversations.length > 0) {
        setSelectedConversation(conversations[0]);
        getMessages();
      }
    }
  }, [setMessages, selectedConversation?.id]);
  return { messages, loading };
};
export default useGetMessages;
