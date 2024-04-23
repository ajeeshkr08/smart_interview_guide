import Sidebar from "../Sidebar";
import { useState } from "react";
import ChatBox from "./Chatbox";
import Compiler from "./Compiler";
import "./Userdash.css";
import MockTest from "./Mocktest";
const UserDash = () => {
  const [constentVisible, setConstentVisible] = useState(1);
  return (
    <div className="user-dashboard">
      <Sidebar
        setConstentVisible={setConstentVisible}

        // setLoggedIn={setLoggedIn}
      />
      <div className="content">
        {constentVisible === 2 && <ChatBox />}
        {constentVisible === 3 && <Compiler />}
        {constentVisible === 4 && <MockTest />}
      </div>
    </div>
  );
};

export default UserDash;
