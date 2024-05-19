import toast from "react-hot-toast";

const { useState, useEffect } = require("react");
const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:8080/message/conversations", {
          credentials: "include",
        });
        const data = await res.json();
        if (data.error) {
          console.log(data);

          throw new Error(data.error);
        }
        console.log(data);
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);
  return { loading, conversations };
};
export default useGetConversation;
