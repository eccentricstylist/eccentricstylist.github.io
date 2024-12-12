import React from "react";

function AWHGame() {
  return (
    <div
      className="max-w-4xl mx-auto py-12 px-6 bg-white bg-opacity-85 text-gray-900 rounded-lg shadow-lg"
      style={{ zIndex: 2, position: "relative" }}
    >
      {/* Title */}
      <h1 className="text-6xl font-bold text-center mb-6">A Winter Haunting</h1>

      {/* YouTube Video */}
      <section className="mb-10">
        <div className="relative max-w-4xl mx-auto aspect-w-16 aspect-h-9">
          {/* Decorative Frame */}
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              backgroundImage: "url('/images/AWH/awh-frame.png')", // Frame image
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Video */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="w-4/5 h-4/5">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/lomCpoNHyEY"
                title="A Winter Haunting - Official Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      {/* <section
        className="mb-10 p-16 text-black min-h-[500px] flex flex-col justify-center"
        style={{
          backgroundImage: "url('/images/AWH/awh-web-border.png')",
          backgroundSize: "110%", // Adjust the background size
          backgroundPosition: "center 40%", // Adjust the vertical positioning
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
        }}
      >
        <h2 className="text-2xl font-semibold mb-4">Game Features</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Explore the eerie Lunabelle Manor and uncover its dark secrets.</li>
          <li>Solve puzzles and navigate through a dynamic, haunted environment.</li>
          <li>Experience a heartwarming yet chilling narrative about love, loss, and redemption.</li>
          <li>Interact with unique characters, including spirits tied to the manor’s history.</li>
        </ul>
      </section> */}

      {/* Steam Buy Widget */}
      <section className="mb-10 text-center">
        <div
          className="relative"
          style={{
            width: "100%",
            maxWidth: "640px", // You can adjust the size here
            margin: "0 auto",
          }}
        >
          <iframe
            src="https://store.steampowered.com/widget/2790100/"
            width="100%"
            height="200px"
            frameBorder="0"
            style={{
              border: "none",
              overflow: "hidden",
              borderRadius: "10px", // Optional: adds rounded corners to iframe
            }}
            title="A Winter Haunting Buy Widget"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default AWHGame;
