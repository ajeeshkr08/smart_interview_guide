import "./Cover.css";
import Chatbot from "./Chatbot";
import Navbar from "./Navbar";
const Cover = ({ setLoggedIn }) => {
  return (
    <div>
      <Navbar setLoggedIn={setLoggedIn} />
      <div className="Cover">
        <div className="wrapper">
          <h1 className="Title">Explora</h1>
          <Chatbot />
        </div>
      </div>
    </div>
  );
};
export default Cover;
