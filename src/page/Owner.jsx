import React from "react";

function Owner() {
  return (
    <div className="w-screen h-screen bg-gray-300">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-4xl mt-10">Noopuk-Group G-09</h2>
        <img
          src="src\assets\noopuk.jpg"
          alt="Noopuk"
          className="w-[300px] h-[300px] m-4"
        />
        <h3 className="font-bold text-2xl">Short Biography</h3>
        <p className="mt-3 w-[800px]">
          Passionate about transitioning to a software developer role, I excel
          in JavaScript and SQL. Junior developer bootcamp experience
          strengthened my full-stack web development skills. Eager learner,
          adept problem-solver, ready to contribute impactful tech solutions.
        </p>
      </div>
    </div>
  );
}

export default Owner;
