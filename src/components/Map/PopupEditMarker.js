import { useRef } from "react";

import API from "../Api";

const PopupEditMarker = ({ onSubmit, loc, setInitMarker, setIsPopUpOpen }) => {
  console.log("its loc", loc);
  const inputRef = useRef();
  const textareRef = useRef();
  const onHandleClick = async () => {
    try {
      const newMarker = { ...loc, subject: inputRef.current.value, description: textareRef.current.value };
      const createdMarker = await API.post("/map", newMarker);
      onSubmit(createdMarker.data);
    } catch (err) {
      console.log(err);
    }
    setInitMarker(false);
    setIsPopUpOpen(false);
  };
  return (
    <div className="popup-mark-container">
      <div className="popup">
        <div className="popup-edit">
          <h3>הוספת סימון חדש:</h3>
          <label htmlFor="popupsubject">כותרת:</label>
          <input ref={inputRef} type="text" id="popupsubject" />
          <label htmlFor="popupcontent">תיאור:</label>
          <textarea ref={textareRef} type="text" id="popupcontent" />
        </div>
        <div className="popup-buttons">
          <button className="btn" onClick={onHandleClick}>
            שמירה
          </button>
          <button
            className="btn"
            onClick={() => {
              setInitMarker(false);
              setIsPopUpOpen(false);
            }}>
            ביטול
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupEditMarker;
/* setCurrentLocation({...currentLocation, description: inputRef.current.value}) */
