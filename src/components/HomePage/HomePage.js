import "./homepage.css";
// import signInWithGoogle from "../Firebase";

const HomePage = () => {
  // const whatTimeIsIt = () => {
  //   const hour = new Date().getHours();
  //   return hour;
  // };
  // const greet = () => {
  //   const hour = whatTimeIsIt();

  //   if (hour > 6 && hour < 12) {
  //     return "בוקר טוב";
  //   } else if (hour >= 12 && hour < 16) {
  //     return "צהריים טובים";
  //   } else if ((hour >= 16) & (hour < 20)) {
  //     return "אחר צהריים טובים";
  //   } else if (hour > 20) {
  //     return "ערב טוב";
  //   }
  // };

  return (
    <div className="homePage">
      <div className="boxes-container">
        <div className="box-left">
          <h2>ברוכים וברוכות הבאים\ות</h2>
          <p>
            האתר הוקם למען תושבי פרדס חנה כרכור, כמקום לשיתוף מידע לגבי מיקומים של עצי פרי, צמחי תבלין ושאר גידולים הגדלים המרחב בציבורי של פרדס חנה כרכור, חופשיים ונגישים לכלל הציבור.<br></br>
            כמו כן, בעלי חצרות אשר רוצים לחלוק את תוצרות הגידולים שלהם, מוזמנים לפרסם גם כן.<br></br>
            ניתן לשתף ב-2 דרכים:<br></br>- כתבו הודעה (מומלץ להתחבר עם ג'ימייל על מנת שתתאפשר עריכה ומחיקה בעתיד) בעמוד "שתפו אותנו".<br></br>- שיתוף המיקום במפה, בעמוד "מפה".
          </p>
          <p style={{ textAlign: "center" }}>
            תהנו,<br></br>ליאת :)
          </p>
        </div>
        <div className="box-right"></div>
      </div>

      <p style={{ fontSize: "14px", color: "  rgba(121, 201, 121, 0.419)" }}> &copy;Liat Pardo Grinbaum&copy;</p>
    </div>
  );
};
export default HomePage;
