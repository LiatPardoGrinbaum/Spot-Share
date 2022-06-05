import react from "react";
import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { myContext } from "../context/myContext";
import Post from "../Post/Post";
import API from "../Api";
import "./forum.css";
import spinner from "../../assets/spinner.gif";

function Forum() {
  const { isSpinning, setIsSpinning, forumArr, setForumArr, isLogged, term, setTerm } = useContext(myContext);
  // const [forumArr, setForumArr] = useState([]);

  useEffect(() => {
    setIsSpinning(true);
    console.log("forum arr before getting data:");
    console.log(forumArr);
    try {
      const getData = async () => {
        const { data } = await API.get("/parkur");

        setForumArr(data);

        setIsSpinning(false);
      };
      getData();
    } catch (err) {
      console.log(err);
    }
  }, [isLogged]);
  // ^ term- if search input change. isLogged- if user sign in or out i want the forum component to re-render.
  const insertPosts = () => {
    const filteredPosts = forumArr.filter((post) => {
      if (post.content.toLowerCase().includes(term.toLowerCase()) || post.subject.toLowerCase().includes(term.toLowerCase()) || post.name.toLowerCase().includes(term.toLowerCase())) {
        return post;
      }
    });
    const sortedPosts = filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sortedPosts.map((post, index) => {
      return <Post key={index} {...post} /*  HandleDelete={onHandleDelete} */ />;
    });
  };
  /*   const onHandleDelete = async (id) => {
    setIsSpinning(true);
    try {
      await API.delete(`/parkur/${id}`);
      //////
      this.setState((prev) => {
        const newShoesArr = prev.shoesArr.filter((shoe) => shoe.id !== id);
        return { shoesArr: newShoesArr, isSpinner: false };
      });
    } catch (err) {
      console.log(err);
    }
  }; */
  console.log("forumArr in forum");
  console.log(forumArr);
  return (
    <div className="forum-wrapper">
      <div className="top-contianer">
        <p>כאן תוכלו לשתף אותנו במיקומים של עצי פרי , צמחי תבלין, או הצעות לתרומה\החלפה של פירות מהחצר שלכם.</p>
        <NavLink to="/create" className="link" exact={true}>
          <button className="create btn">צור הודעה חדשה</button>
        </NavLink>
      </div>
      {isSpinning && (
        <div className="spinner">
          <img src={spinner} />
        </div>
      )}
      <div>
        <label htmlFor="search">חיפוש לפי מילה: </label>
        <input id="search" type="text" placholder="חיפוש" value={term} onChange={(e) => setTerm(e.target.value)} />{" "}
      </div>
      <div className="posts-container">{insertPosts()}</div>
    </div>
  );
}

export default Forum;
