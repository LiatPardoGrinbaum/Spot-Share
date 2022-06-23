import { useContext } from "react";
import { myContext } from "../context/myContext";

import API from "../Api";
import "./create.css";

const Create = (props) => {
  const { newSubject, setNewSubject, newContent, setNewContent, setIsSpinning, setForumArr, setIsCreated } = useContext(myContext);
  const userObj = JSON.parse(localStorage.getItem("user"));
  const handelCreate = () => {
    const handleCreatePost = async (newUserPost) => {
      try {
        const createdPost = await API.post("/parkur", newUserPost);
        console.log("this is created post:", createdPost);
        // console.log(createdPost);
        setIsCreated(true);
        setIsSpinning(false);
        setForumArr((prev) => {
          return [createdPost.data, ...prev];
          // return [createdPost.data, ...prev];
        });
        props.history.push("/forum");
      } catch (err) {
        console.log(err);
      }
    };

    setIsSpinning(true);
    const date = new Date();
    // console.log("date → ", date);
    if (userObj === null) {
      const newUserPost = {
        subject: newSubject,
        content: newContent,
        userEmail: "",
        name: "אנונימי / ת",
        date: date.toLocaleString(),
        dateToSort: date,
      };
      handleCreatePost(newUserPost);
    } else {
      const newUserPost = {
        subject: newSubject,
        content: newContent,
        userEmail: userObj.email,
        name: userObj.name,
        date: date.toLocaleString(),
        dateToSort: date,
      };
      handleCreatePost(newUserPost);
    }
  };

  return (
    <div className="create-container">
      {userObj === null && <p>הודעה אנונימית</p>}
      <div className="subject-input">
        <input type="text" id="subjectInput" placeholder="נושא" value={newSubject} onChange={(e) => setNewSubject(e.target.value)} />
      </div>
      <div className="content-container">
        <textarea rows="5" cols="33" id="contentInput" placeholder="תוכן" value={newContent} onChange={(e) => setNewContent(e.target.value)} />
      </div>
      <div className="buttons-container">
        <button className="create btn" onClick={handelCreate}>
          אישור
        </button>

        <button className="create btn" onClick={() => props.history.push("/forum")}>
          ביטול
        </button>
      </div>
    </div>
  );
};

export default Create;
