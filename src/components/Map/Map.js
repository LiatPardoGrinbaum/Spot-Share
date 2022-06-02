import react from "react";
import "./mapStyle.css";

function Map() {
  return (
    <div className="map-wrapper">
      <iframe className="googlemap" title="parkur" src="https://www.google.com/maps/d/embed?mid=1tcb0hU-FYF9GaHjx7r97w0xt6hHKGtw&ehbc=2E312F" width="600" height="700" frameborder="0"></iframe>
    </div>
  );
}

export default Map;
