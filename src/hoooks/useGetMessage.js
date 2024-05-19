import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
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
    if (selectedConversation?.id) {
      getMessages();
    }
  }, [setMessages, selectedConversation?.id]);
  return { messages, loading };
};
export default useGetMessages;
