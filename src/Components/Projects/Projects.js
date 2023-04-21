import React from "react";
import southPark from "../../Assets/project-previews/SouthParkWeb.png";
import wheresWaldo from "../../Assets/project-previews/WheresWaldo.png";
import "./Projects.css";
const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <hr />
      <div className="project-container">
        <div className="project">
          <div className="project-content">
            <h2>Memory Game</h2>
            <h3>Tech Stack: React JS, and Jest</h3>
            <p>
              As the name suggests, it is a memory game. The south park
              characters shuffle after every selection. The goal is to get 8
              points for your score by not selecting the same south park again.
              The game keeps track of your score and finishes once you reach the
              end. There is also a an option to restart the game. It is Unit
              Tested with Jest and React Testing Library.
            </p>
            <div className="project-links">
              <a
                href="https://alexestrada1.github.io/memory-game/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Website
              </a>
              <a
                href="https://github.com/alexestrada1/memory-game"
                target="_blank"
                rel="noopener noreferrer"
              >
                View code
              </a>
            </div>
          </div>
          <div className="project-img">
            <img alt="Memory game Website preview" src={southPark}></img>
          </div>
        </div>

        <div className="project">
          <div className="project-content">
            <h2>Wheres Waldo Game</h2>
            <h3>Tech Stack: React JS, Jest, and Firebase</h3>
            <p>
              It is a Wheres Waldo game with various cartoon characters (both
              adult and child) and memes. The game starts by shuffling an array
              of images gotten from a firestore database and choosing three of
              those images. Then the website creates invisible boxes with values
              also from the firestore database. There is also a leaderboard that
              stores scores and displays them.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/alexestrada1/wheres-waldo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Website
              </a>
              <a
                href="https://github.com/alexestrada1/wheres-waldo"
                target="_blank"
                rel="noopener noreferrer"
              >
                View code
              </a>
            </div>
          </div>
          <div className="project-img">
            <img
              alt="Wheres Waldo Game Website preview"
              src={wheresWaldo}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
