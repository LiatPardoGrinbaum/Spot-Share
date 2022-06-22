import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { myContext } from "../context/myContext";
import Post from "../Post/Post";
import API from "../Api";
import "./forum.css";
import spinner from "../../assets/spinner.gif";

function Forum() {
  const { isSpinning, setIsSpinning, forumArr, setForumArr, isLogged, term, setTerm } = useContext(myContext);

  useEffect(() => {
    setIsSpinning(true);

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
  }, [isLogged, setForumArr, setIsSpinning]);
  // ^ term- if search input change. isLogged- if user sign in or out i want the forum component to re-render.
  const insertPosts = () => {
    const sortedPosts = forumArr.sort((a, b) => new Date(b.date) - new Date(a.date));
    console.log("forumArr is", forumArr);
    console.log("sortedPosts is", sortedPosts);

    const filteredPosts = sortedPosts.filter((post) => {
      // console.log("this is inside filter");
      // console.log(sortedPosts);
      // console.log("this is post");
      // console.log(post);
      return post.content.toLowerCase().includes(term.toLowerCase()) || post.subject.toLowerCase().includes(term.toLowerCase()) || post.name.toLowerCase().includes(term.toLowerCase());
    });
    return filteredPosts.map((post, index) => {
      return <Post key={index} {...post} />;
    });
  };

  return (
    <div className="forum-wrapper">
      <div className="top-contianer">
        <p>
          מכירים עצי פרי במרחב הציבורי שניתן לקטוף מהם? <br></br>
          יש לכם עץ מניב בחצר ואין לכם מה לעשות עם כל כך הרבה פירות?<br></br>
          נשמח שתשתפו אותנו :)
        </p>
        <NavLink to="/create" className="link" exact={true}>
          <button className="create btn">יצירת הודעה חדשה</button>
        </NavLink>
      </div>
      {isSpinning && (
        <div className="spinner">
          <img src={spinner} alt="spinner" />
        </div>
      )}
      <div>
        <label htmlFor="search">חיפוש לפי מילה: </label>
        <input id="searchInput" type="text" placholder="חיפוש" value={term} onChange={(e) => setTerm(e.target.value)} />{" "}
      </div>
      <div className="posts-container">{insertPosts()}</div>
    </div>
  );
}

export default Forum;
