import React, { createContext, useState } from "react";

export const myContext = createContext();

function ContextProvider({ children }) {
  const [forumArr, setForumArr] = useState([]);
  const [isLogged, setisLogged] = useState(false);
  const [term, setTerm] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [newSubject, setNewSubject] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newName, setNewName] = useState("");
  const [newemail, setNewemail] = useState("");
  const [isAccepted, setisAccepted] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  //if post created reset values:
  if (isCreated) {
    setNewSubject("");
    setNewContent("");
    // setNewDate("");
    // setNewName("");
    // setNewemail("");
    setIsCreated(false);
  }
  const getCurrentTime = () => {
    let currentTime = new Date().toLocaleString();

    return currentTime;
  };
  return <myContext.Provider value={{ isSpinning, setIsSpinning, newSubject, setNewSubject, newContent, setNewContent, newDate, setNewDate, newName, setNewName, newemail, setNewemail, isAccepted, setisAccepted, setIsCreated, forumArr, setForumArr, getCurrentTime, isLogged, setisLogged, term, setTerm }}>{children}</myContext.Provider>;
}
export default ContextProvider;
