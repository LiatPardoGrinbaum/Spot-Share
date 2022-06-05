import react from "react";
import API from "../Api";
import { useContext } from "react";
import { myContext } from "../context/myContext";
import "./popup.css";

const PopUp = ({ setIsPopUpOpen, id }) => {
  const { setIsSpinning, setForumArr } = useContext(myContext);
  const onCancelClick = () => {
    setIsPopUpOpen((prev) => !prev);
  };

  const onApproveDelete = async () => {
    setIsPopUpOpen((prev) => !prev);
    setIsSpinning(true);
    try {
      await API.delete(`/parkur/${id}`);
      setForumArr((prev) => {
        return prev.filter((post) => post.id !== id);
      });
      setIsSpinning(false);
    } catch (err) {
      console.log(err);
    }

    //////
    //   this.setState((prev) => {
    //     const newShoesArr = prev.shoesArr.filter((shoe) => shoe.id !== id);
    //     return { shoesArr: newShoesArr, isSpinner: false };
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className="popup-container">
      <div className="popup-window">
        <h2 style={{ margin: 0, fontSize: "18px" }}>את/ה בטוח/ה שברצונך למחוק את ההודעה?</h2>
        <div className="buttonsPop">
          <button className="btn" onClick={onApproveDelete}>
            אישור
          </button>
          <button className="btn" onClick={onCancelClick}>
            ביטול
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
