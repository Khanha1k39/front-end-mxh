import Stack from "react-bootstrap/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BiComment as BiComment } from "react-icons/bi";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
function ReactPost() {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="p-2">
        Like <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className="p-2">
        Comment <BiComment></BiComment>
      </div>
    </Stack>
  );
}

export default ReactPost;
