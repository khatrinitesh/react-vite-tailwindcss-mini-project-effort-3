import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function SplashPage({ duration, redirectTo }) {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return redirect ? (
    <Navigate to={redirectTo} replace />
  ) : (
    <div className="bg-[#000] flex flex-col gap-[20px] h-screen w-screen justify-center items-center">
      <span class="custom-loader "></span>
      <p className="text-white font-bold">This is a splash page. Redirecting in {duration / 1000} seconds...</p>
    </div>
  );
}
