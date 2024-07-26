import React from "react";
import { ClipLoader } from "react-spinners";

const LoadingIndicator = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ClipLoader size={150} color={"#123abc"} loading={true} />
    </div>
  );
};

export default LoadingIndicator;
