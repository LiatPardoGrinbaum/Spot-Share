import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="inner-about">
        <h2>
          פרויקט שיתוף עצי פרי ותוצרת קטיף <br></br>במרחב הציבורי בפרדס חנה-כרכור
        </h2>
        <p>
          פרויקט זה הינו פרויקט אמצע שהוכן במסגרת בוטקמפ Full stack של עמותת תפוח, בו אני משתתפת. <br></br>לפרויקט שתי מטרות עיקריות:
        </p>
        <ul style={{ direction: "rtl", textAlign: "right" }}>
          <li>כתושבת פרדס חנה כרכור וכחובבת ליקוט :), חיפשתי נושא לפרויקט אשר יכול לתרום לחיינו כקהילה. הפרויקט הינו פרויקט קהילתי אשר מעודד שיתוף מידע בין התושבים למען רווחת הכלל. פרדס חנה כרכור ידועה במרחב הטבעי והפרדסים שבה, כמו כן קיימים בה עצים שונים, וצמחים שונים אשר שייכים למרחב הציבורי ומהם ניתן לקטוף ולהנות. אנשים אשר להם חצר פרטית יכולים גם לשתף את התוצרת האישית שלהם. </li>
          <br></br>{" "}
          <li>
            יישום הטכנולוגיות השונות אותן למדתי:<br></br>
            <p style={{ textAlign: "left", direction: "ltr" }}>HTML, CSS, JAVASCRIPT,ReactJS (CRUD,API calls, Routes and hooks), Google Map API, Google Login.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
