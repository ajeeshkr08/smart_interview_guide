import React from "react";
import "./Mocktest.css";
import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/theme-github";

const MockTest = () => {
  return (
    <div>
      Mocktest
      <div className="testCover">
        <div className="questCover">
          <span>Ques no:2</span>
          <div className="Quest">
            Define the Iframe Component: Within your component, define the
            iframe element. You can use JSX to create the iframe element:
          </div>
          <textarea placeholder="Type here......" rows={5}></textarea>
        </div>
        <div className="questCover">
          <span>Ques no:2</span>
          <div className="Quest">
            Define the Iframe Component: Within your component, define the
            iframe element. You can use JSX to create the iframe element:
          </div>
          <textarea placeholder="Type here......" rows={5}></textarea>
        </div>
        <div className="questCover">
          <span>Ques no:2</span>
          <div className="Quest">
            Define the Iframe Component: Within your component, define the
            iframe element. You can use JSX to create the iframe element:
          </div>
          <AceEditor
            mode="javascript"
            theme="dark"
            name="code-display"
            width="100%"
            height="200px"
            value={"ervrjvj"}
            editorProps={{ $blockScrolling: Infinity }}
          />
        </div>
        <button className="subButton" variant="text">
          Submit
        </button>
      </div>
    </div>
  );
};
export default MockTest;
