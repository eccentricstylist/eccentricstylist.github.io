import React, { useState } from "react";
import { characters } from "./Variables"; // Import the `characters` array
import Spoiler from "../Spoiler";

function CharacterViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + characters.length) % characters.length
    );
  };

  const currentCharacter = characters[currentIndex];

  // Helper to check for spoilers
  const renderTextWithSpoilers = (text) => {
    if (text.startsWith("*") && text.endsWith("*")) {
      return <Spoiler text={text.slice(1, -1)} />; // Remove *s and render as spoiler
    }
    return text;
  };

  return (
    <section
      className="relative bg-cover bg-center text-gray-800 rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url('/images/AWH/awh-char-back.png')`, // Background image
        height: "100vh", // Adjust height as needed
      }}
    >
      {/* Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white rounded-full w-14 h-14 flex items-center justify-center z-10 hover:blue-300 active:blue-300 transition-all duration-200"
        aria-label="Previous Character"
      >
        <img
          src="/images/AWH/awh-arrow.png" // Image for the left arrow
          alt="Previous"
          className="w-14 h-10 hover:filter hover:brightness-150 hover:saturate-150" // Adjust size and apply hover effects
        />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-8 transform -translate-y-1/2 text-white rounded-full w-14 h-14 flex items-center justify-center z-10 hover:blue-300 active:blue-300 transition-all duration-200"
        aria-label="Next Character"
      >
        <img
          src="/images/AWH/awh-arrow.png" // Image for the right arrow
          alt="Next"
          className="w-14 h-10 transform rotate-180 hover:filter hover:brightness-150 hover:saturate-150" // Adjust size and apply hover effects
        />
      </button>

      {/* Character Display */}
      <div className="p-6 flex flex-col lg:flex-row items-center space-y-6 lg:space-x-6 h-full justify-center mx-auto max-w-5xl">
        {/* Character Image */}
        <img
          src={currentCharacter.image}
          alt={currentCharacter.name}
          className="w-1/3 sm:w-20 lg:w-48 h-auto min-w-[4rem] max-w-full rounded-lg flex-shrink-0 mb-4 lg:mb-0" // Shrinks to 20% on small devices and 1/3 on larger
        />

        {/* Character Details */}
        <div className="max-w-full sm:max-w-[60%] text-left overflow-y-auto h-[calc(100vh-50px)]">
          {/* Character Name */}
          <h1 className="text-4xl font-bold mb-4 text-center">
            {currentCharacter.name}
          </h1>

          {/* Relatives */}
          <h2 className="text-xl font-semibold mb-2">Relatives:</h2>
          <ul className="list-none space-y-1 text-lg">
            {currentCharacter.relatives.map((relative, index) => (
              <li key={index} className="flex items-center">
                <span className="text-black mr-2">❄</span>
                {renderTextWithSpoilers(relative)}
              </li>
            ))}
          </ul>

          {/* Friends */}
          <h2 className="text-xl font-semibold mt-4">Allies:</h2>
          <ul className="list-none space-y-1 text-lg">
            {currentCharacter.friends.map((friend, index) => (
              <li key={index} className="flex items-center">
                <span className="text-black mr-2">★</span>
                {renderTextWithSpoilers(friend)}
              </li>
            ))}
          </ul>

          {/* Enemies */}
          <h2 className="text-xl font-semibold mt-4">Enemies:</h2>
          <ul className="list-none space-y-1 text-lg">
            {currentCharacter.enemies.map((enemy, index) => (
              <li key={index} className="flex items-center">
                <span className="text-black mr-2">▲</span>
                {renderTextWithSpoilers(enemy)}
              </li>
            ))}
          </ul>

          {/* Alignment */}
          <h2 className="text-xl font-semibold mt-4">Alignment:</h2>
          <p className="text-lg">{currentCharacter.alignment}</p>

          {/* Strengths */}
          <h2 className="text-xl font-semibold mt-4">Strengths:</h2>
          <p className="text-lg">{currentCharacter.strengths}</p>

          {/* Weaknesses */}
          <h2 className="text-xl font-semibold mt-4">Weaknesses:</h2>
          <p className="text-lg">{currentCharacter.weaknesses}</p>

          {/* Description */}
          <h2 className="text-xl font-semibold mt-4">Information:</h2>
          <p className="text-md">{currentCharacter.description}</p>
        </div>
      </div>
    </section>
  );
}

export default CharacterViewer;
