import "./instructions.css";
import { Link } from "react-router-dom";

const Instructions = ({ setIsInstrctions }) => {
  return (
    <div className="Instructions-container">
      <div className="Ins-popup-window">
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>שימוש במפה:</p>
        <p>המקומות הרלוונטים במפה מסומנים בעלה ירוק. בעת לחיצה על הסימון תיפתח חלונית מידע.</p>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>כיצד להוסיף סימונים במפה:</p>
        <p>על מנת להוסיף סימון חדש במפה, ראשית יש להקליק על נקודה רצויה על המפה. חלון להזנת פרטים ייפתח מצד ימין למעלה ולאחר הזנת הפרטים יש ללחוץ "שמירה".</p>
        <div className="buttonsPop">
          <Link to="/">
            <button className="btn" style={{ marginTop: "10px", padding: "10px", fontSize: "16px" }} onClick={() => setIsInstrctions(false)}>
              ⇒ חזרה לעמוד הבית
            </button>
          </Link>
          <button className="btn" style={{ marginTop: "10px", padding: "10px", fontSize: "16px" }} onClick={() => setIsInstrctions(false)}>
            למפה ⇐
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
