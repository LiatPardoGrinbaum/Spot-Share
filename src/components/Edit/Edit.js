import { useContext, useState, useEffect } from "react";
import { myContext } from "../context/myContext";
import { NavLink, Link } from "react-router-dom";
import API from "../Api";
import "./edit.css";

const Edit = (props) => {
  const { setIsSpinning, forumArr, setForumArr, setIsCreated, getCurrentTime } = useContext(myContext);

  const [editSubject, setEditSubject] = useState(props.location.state.subject);
  const [editContent, setEditContent] = useState(props.location.state.content);
  const handelUpdate = async () => {
    setIsSpinning(true);
    const userObj = JSON.parse(localStorage.getItem("user"));

    const id = props.location.state.id;
    const postObjToBeUpdate = forumArr.find((postObj) => {
      return id === postObj.id;
    });
    if (userObj.email !== postObjToBeUpdate.email) {
      console.log("not same user");
    } else {
      try {
        const updatedPostObj = { ...postObjToBeUpdate, subject: editSubject, content: editContent };
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
        // this.setState((prev) => {
        //   return {
        //     shoesArr: prev.shoesArr.map((shoes) => {
        //       if (shoes.id === data.id) {
        //         return data;
        //       } else {
        //         return shoes;
        //       }
        //     }),
        //     isSpinner: false,
        //   };
        // });
        console.log("its new forumarr");
        console.log(forumArr);
      } catch (err) {
        console.log(err);
      }
    }
  };

  /* onHandleUpdate = async (newBrand, newSize, newPrice, newImageUrl, id) => {
    this.setState({ isSpinner: true });

    try {
      const shoesObjToBeUpdate = this.state.shoesArr.find((shoesObj) => {
        return id === shoesObj.id;
      });
      const updatedShoesObj = { ...shoesObjToBeUpdate, Brand: newBrand, Size: newSize, Price: newPrice, imageUrl: newImageUrl };
      const { data } = await API.put(`/shoes/${id}`, updatedShoesObj);
      this.setState((prev) => {
        return {
          shoesArr: prev.shoesArr.map((shoes) => {
            if (shoes.id === data.id) {
              return data;
            } else {
              return shoes;
            }
          }),
          isSpinner: false,
        };
      });
    } catch (err) {
      console.log(err);
    }
  }; */
  console.log(props);
  return (
    <div className="create-container">
      <div className="subject-input">
        <input type="text" id="subjectInput" placeholder="נושא" value={editSubject} onChange={(e) => setEditSubject(e.target.value)} />
      </div>
      <div className="content-container">
        <textarea rows="5" cols="33" id="contentInput" placeholder="תוכן" value={editContent} onChange={(e) => setEditContent(e.target.value)} />
      </div>

      <button className="create btn" onClick={handelUpdate}>
        אישור
      </button>

      <button className="create btn" onClick={() => props.history.push("/forum")}>
        ביטול
      </button>
    </div>
  );
};

export default Edit;
