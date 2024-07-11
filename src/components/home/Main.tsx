import React from "react";

const Main: React.FC = () => {
  return (
    <main className="flex">
      <div>
        <span>Welcome to Leading@Autodesk</span>
        <h2>
          the place for Autodesk directors and above to discover leadership
          learning
        </h2>
        <p>
          Here, you'll find learning resources organized around the leadership
          competencies introduced at the Senior Leaders at Autodesk Meeting
          (SLAM) in February 2023.We identified these competencies through
          conversations with executives across the company to inform the next
          step in our culture transformation. While the Autodesk Culture Code is
          our beacon - establishing the Values and Ways We Work as a company -
          these competencies advance the evolution of our culture through
          clearly defined behaviors to model with your extended teams and the
          organizations you lead. Wherever you are in your career journey, visit
          this site regularly for learning resources, tools, and opportunities
          including coaching and leadership development programs, to help you
          lead with intention and success.
        </p>
      </div>
      <img src="../assets/home-main.png" alt="" />
    </main>
  );
};

export default Main;
