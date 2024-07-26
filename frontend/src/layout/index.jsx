import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen">
      {loading ? (
        <LoadingIndicator />
      ) : (
        <div className="bg-gray-200">
          <Outlet />
        </div>
      )}
    </div>
  );
};
export default MainLayout;
