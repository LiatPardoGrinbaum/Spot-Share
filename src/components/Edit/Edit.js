import { useContext, useState } from "react";
import { myContext } from "../context/myContext";

import API from "../Api";
import "./edit.css";

const Edit = (props) => {
  const { setIsSpinning, forumArr, setForumArr, getCurrentTime } = useContext(myContext);

  const [editSubject, setEditSubject] = useState(props.location.state.subject);
  const [editContent, setEditContent] = useState(props.location.state.content);

  const handelUpdate = async () => {
    setIsSpinning(true);
    // const userObj = JSON.parse(localStorage.getItem("user"));
    const id = props.location.state.id;
    const postObjToBeUpdate = forumArr.find((postObj) => {
      return id === postObj.id;
    });

    try {
      const updatedPostObj = { ...postObjToBeUpdate, subject: editSubject, content: editContent, date: getCurrentTime() };
      const { data } = await API.put(`/parkur/${id}`, updatedPostObj);
      //not sure if here below (and in Create too) is necessary because any time Forum is rendering it gets the new data from the API.
      setForumArr((prev) => {
        return prev.map((post) => {
          if (id === data.id) {
            return data;
          } else {
            return post;
          }
        });
      });
      setIsSpinning(false);
      props.history.push("/forum");

      console.log("its new forumarr");
      console.log(forumArr);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(props);
  return (
    <div className="create-container">
      <div className="subject-input">
        <input type="text" id="subjectInput" placeholder="נושא" value={editSubject} onChange={(e) => setEditSubject(e.target.value)} />
      </div>
      <div className="content-container">
        <textarea rows="5" cols="33" id="contentInput" placeholder="תוכן" value={editContent} onChange={(e) => setEditContent(e.target.value)} />
      </div>
      <div className="buttons-container">
        <button className="create btn" onClick={handelUpdate}>
          אישור
        </button>

        <button className="create btn" onClick={() => props.history.push("/forum")}>
          ביטול
        </button>
      </div>
    </div>
  );
};

export default Edit;
