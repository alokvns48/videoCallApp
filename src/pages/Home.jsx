import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [roomId, setRoomId] = useState("");

  const nagivate = useNavigate();

  const handleClick = () => {
    if (roomId) {
      nagivate(`room/${roomId}`);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-800 flex items-center justify-center">
      <div className="w-[400px]">
        <h1 className="text-4xl mb-4 text-white font-bold text-center">
          Hey! Welcome
        </h1>
        <input
          onChange={(e) => setRoomId(e.target.value)}
          value={roomId}
          className="border-2 w-full border-white rounded-lg mb-4 focus:none px-4 py-3 text-xl"
          placeholder="Enter Room ID"
          type="text"
        />
        <button className="bg-blue-500 rounded-lg w-full block px-5 text-xl text-white py-3"
        onClick={handleClick}>
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Home;
