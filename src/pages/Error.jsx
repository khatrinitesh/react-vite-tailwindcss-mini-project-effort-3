import React from "react";
import Banner from "./../components/Banner";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const btnBack = () => {
    navigate('/');
  }
  return (
    <div className="content h-screen w-screen bg-[#999] flex justify-center items-center flex-col text-center">
      <Banner styleBanner=''
        title="404 page not found"
        desc="Elit irure laborum commodo qui labore tempor deserunt. Qui amet laboris magna aute elit amet elit eu reprehenderit velit. Aliquip labore cupidatat sit cupidatat culpa eiusmod consectetur in.

Velit eu Lorem consequat non laboris sunt minim mollit dolore aliqua do. Id excepteur laborum ad adipisicing nostrud et velit Lorem labore deserunt non ut. Do est nisi ut nisi nulla duis excepteur. Nisi amet sit adipisicing reprehenderit nulla nisi ad eiusmod dolore tempor cupidatat aliquip quis."
      />
      <button onClick={btnBack} className="bg-blue-700 text-white px-[10px] rounded py-[5px]">Go Back</button>
    </div>
  );
};

export default Error;
