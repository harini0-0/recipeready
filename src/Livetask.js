import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Livetask = () => {
  const [isAcceptOrderToggled, setIsAcceptOrderToggled] = useState(false);
  const [isPackageReceivedToggled, setIsPackageReceivedToggled] = useState(
    false
  );
  const [isDeliveredToggled, setIsDeliveredToggled] = useState(false);
  const handleAcceptOrderToggle = () => {
    if (!isAcceptOrderToggled) {
      setIsAcceptOrderToggled(true);
      setIsPackageReceivedToggled(false);
      setIsDeliveredToggled(false);
    }
  };
  const handlePackageReceivedToggle = () => {
    if (isAcceptOrderToggled && !isPackageReceivedToggled) {
      setIsPackageReceivedToggled(true);
      setIsDeliveredToggled(false);
    }
  };
  const handleDeliveredToggle = () => {
    if (
      isAcceptOrderToggled &&
      isPackageReceivedToggled &&
      !isDeliveredToggled
    ) {
      setIsDeliveredToggled(true);
    }
  };
  const navigate = useNavigate();
  return (
    <div>
      <h1>PICK ORDER</h1>
      <button
        onClick={handleAcceptOrderToggle}
        style={{ backgroundColor: isAcceptOrderToggled ? "orange" : "white" }}
      >
        Accept Order
      </button>
      {isAcceptOrderToggled && (
        <button
          onClick={handlePackageReceivedToggle}
          style={{
            backgroundColor: isPackageReceivedToggled ? "orange" : "white"
          }}
        >
          Package Received
        </button>
      )}
      {isPackageReceivedToggled && (
        <button
          onClick={handleDeliveredToggle}
          style={{ backgroundColor: isDeliveredToggled ? "orange" : "white" }}
        >
          Delivered
        </button>
      )}

      <button onClick={() => navigate("/")}> Go Bck </button>
    </div>
  );
};
export default Livetask;