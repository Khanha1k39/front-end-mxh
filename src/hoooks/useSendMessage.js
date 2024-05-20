import { useState } from "react";
import toast from "react-hot-toast";
const { default: useConversation } = require("../zustand/useConversation");
const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:8080/message/send/${selectedConversation.user.id}`,
        {
          credentials: "include",

          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            message,
          }),
        }
      );
      const data = await res.json();
      console.log("data", data);
      if (data.error) {
        throw new Error(data.error);
      }
      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
};
export default useSendMessage;
