import React, { useEffect } from "react";
import "./map.css";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import Instructions from "./Instrctions";
import PopupEditMarker from "./PopupEditMarker";
import API from "../Api";
// import "@reach/combobox/styles.css"; ///???
// import mapStyles from "./mapStyles"; //if i want another style, should add an array (9.20 video) https://snazzymaps.com/
//http://localhost:3000 --> add it to cloud platform if I want the map be active on local host
const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 32.475868,
  lng: 34.976299,
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
function MapGoogle() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAbcbcM5EQLwwFs0dky4evlrYA45sqzDLE",
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [loc, setloc] = React.useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = React.useState(false);
  const [initMarker, setInitMarker] = React.useState(false);
  const [isInstrctions, setIsInstrctions] = React.useState(true);
  useEffect(() => {
    try {
      const getAllMarkers = async () => {
        const { data } = await API.get("/map");
        setMarkers(data);
      };
      getAllMarkers();
    } catch (err) {
      console.log(err);
    }
    // setTimeout(() => {
    //   setMarkers([{ lat: 32.47954626708334, lng: 34.98713571001481, description: "liat" }]);
    // }, 1000);
  }, []);

  // useEffect(() => {}, [selected]);
  const onMapClick = React.useCallback((event) => {
    setIsPopUpOpen(true);
    setloc({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
    setInitMarker(true);
  }, []);
  // const inputRef = React.useRef();
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  // console.log(markers);
  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  console.log("it's selected", selected);
  console.log("it's markers", markers);
  return (
    <div>
      {isInstrctions && <Instructions setIsInstrctions={setIsInstrctions} />}
      {isPopUpOpen && (
        <PopupEditMarker
          setInitMarker={setInitMarker}
          setIsPopUpOpen={setIsPopUpOpen}
          loc={loc}
          onSubmit={(marker) => {
            // console.log(marker);
            setMarkers((prev) => [...prev, marker]);
          }}
        />
      )}
      {isInstrctions === false && (
        <div>
          <h2 className="h2map">
            Spot
            <span role="img" aria-label="spot">
              🎯
            </span>
            & Share<span>🍊</span>
          </h2>
          <GoogleMap mapContainerStyle={mapContainerStyle} zoom={14} center={center} options={options} onClick={onMapClick} onLoad={onMapLoad}>
            {markers.map((marker, index) => (
              <Marker
                key={index}
                position={{ lat: marker.lat, lng: marker.lng }}
                icon={{ url: "/icon.png", scaledSize: new window.google.maps.Size(30, 30), origin: new window.google.maps.Point(0, 0), anchor: new window.google.maps.Point(15, 15) }}
                onClick={() => {
                  setSelected(marker);
                }}
              />
            ))}

            {initMarker && (
              <Marker
                position={{ lat: loc.lat, lng: loc.lng }}
                icon={{ url: "/icon.png", scaledSize: new window.google.maps.Size(30, 30), origin: new window.google.maps.Point(0, 0), anchor: new window.google.maps.Point(15, 15) }}
                // onClick={() => {
                //   setSelected(marker);
                // }}
              />
            )}

            {selected ? (
              <InfoWindow
                position={{ lat: selected.lat, lng: selected.lng }}
                options={{ maxWidth: 200, direction: "rtl" }}
                onCloseClick={() => {
                  setSelected(null);
                }}>
                <div style={{ textAlign: "right" }}>
                  <h3>{selected.subject}</h3>
                  <p>{selected.description}</p>
                </div>
              </InfoWindow>
            ) : null}
          </GoogleMap>{" "}
        </div>
      )}
    </div>
  );
}

// function Map() {
//   return (
//     <div className="map-wrapper">
//       <iframe className="googlemap" title="parkur" src="https://www.google.com/maps/d/embed?mid=1tcb0hU-FYF9GaHjx7r97w0xt6hHKGtw&ehbc=2E312F" width="600" height="700" frameborder="0"></iframe>
//     </div>
//   );
// }

export default MapGoogle;
