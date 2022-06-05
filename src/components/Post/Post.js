import React, { useContext, useState, useEffect } from "react";
import { myContext } from "../context/myContext";
import { NavLink } from "react-router-dom";
import PopUp from "../PopUp/PopUp";
import "./post.css";

const Post = ({ id, content, name, subject, date, userEmail }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const HandleDelete = () => {
    setIsPopUpOpen((prev) => !prev);
  };
  const isUserConnect = () => {
    const userObj = JSON.parse(localStorage.getItem("user"));

    if (userObj === null) {
      console.log("it is null!!!");
      return (
        <div className="edit-message">
          <p>על מנת לערוך או למחוק תגובות יש להתחבר עם gmail </p>
        </div>
      );
    } else if (userObj) {
      if (userObj.email === userEmail) {
        return (
          <React.Fragment>
            <div className="buttons">
              <button className="btn" onClick={HandleDelete}>
                מחק
              </button>
              <NavLink to={{ pathname: "/edit", state: { id, content, name, subject, date, userEmail } }} className="link">
                <button className="btn">עדכן</button>
              </NavLink>
            </div>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <div className="buttons">
              <button className="btnDisabled" onClick={HandleDelete} disabled>
                מחק
              </button>
              <NavLink to={{ pathname: "/edit", state: { id, content, name, subject, date, userEmail } }} className="link">
                <button className="btnDisabled" disabled>
                  עדכן
                </button>
              </NavLink>
            </div>
          </React.Fragment>
        );
      }
    }
  };

  //   const userObj = JSON.parse(localStorage.getItem("user"));
  //   console.log("userObj is:");
  //   console.log(userObj);
  //   console.log(userObj.id);
  //   console.log(id);
  //   if (userObj === null) {
  //     return (
  //       <React.Fragment>
  //         <p>עליך להירשם על מנת לערוך </p>
  //       </React.Fragment>
  //     );
  //   } else if (userObj) {
  //     if (userObj.email === userEmail) {
  //       return (
  //         <React.Fragment>
  //           <div className="buttons">
  //             <button className="btn" onClick={HandleDelete}>
  //               מחק
  //             </button>
  //             <NavLink to={{ pathname: "/edit", state: { id, content, name, subject, date, userEmail } }} className="link">
  //               <button className="btn">עדכן</button>
  //             </NavLink>
  //           </div>
  //         </React.Fragment>
  //       );
  //     }
  //   } else {
  //     return (
  //       <React.Fragment>
  //         <div className="buttons">
  //           <button className="btn disabled" onClick={HandleDelete} disabled>
  //             מחק
  //           </button>
  //           <NavLink to={{ pathname: "/edit", state: { id, content, name, subject, date, userEmail } }} className="link">
  //             <button className="btn disabled" disabled>
  //               עדכן
  //             </button>
  //           </NavLink>
  //         </div>
  //       </React.Fragment>
  //     );
  //   }
  // };
  return (
    <div className="post-wrapper">
      <div className="subject" onClick={() => setIsOpen((prev) => !prev)}>
        <p className="text-subject">{subject}</p>
        <p className="text-date">{date}</p>
      </div>
      {isOpen && (
        <div className="main-post">
          <span className="text-date">{name}</span>
          {/*      <p>{userEmail}</p> */}
          <p>{content}</p>
        </div>
      )}
      {isUserConnect()}
      {/*  <div className="buttons">
        <button className="btn" onClick={HandleDelete}>
          מחק
        </button>
        <NavLink to={{ pathname: "/edit", state: { id, content, name, subject, date, userEmail } }} className="link">
          <button className="btn" >
            עדכן
          </button>
        </NavLink>
      </div> */}
      {isPopUpOpen && <PopUp setIsPopUpOpen={setIsPopUpOpen} id={id} />}
    </div>
  );
};

export default Post;
