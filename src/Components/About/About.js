import React from "react";
import "./About.css";
import { skills } from "../../Assets/skills";
const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <hr />
      <p>
        Hello my name is Alex Estrada. I am a 20 year old from Little Rock,
        Arkansas. I have started learning how to code since highscool. I really
        enjoyed the problem solving and how many solutions there were to many
        problems. The most I enjoyed learning about programming is how there was
        always a better solution to many problems. Learning how to optimize was
        fun. I started with C++ in highscool and was taught more about it in
        College. Afterwards, I taught myself HTML, CSS, Javascript, and other
        web developing technologies.
      </p>
      <p>
        I am hoping to get a career in web developing, but am also interested in
        software engineering. It is up to me to learn about each more and
        experience each to see which is a better fit for me.
      </p>
      <p>
        In my free time, I enjoy gaming with friends and reading. Been playing
        for many years since I was a kid. I also enjoy reading on news of new
        software being developed and what it can do.
      </p>
      <p>
        You can reach out to me here{" "}
        <a href="mailto:estradaalex46@gmail.com" target="_blank" rel="noopener noreferrer">estradaalex46@gmail.com</a>
      </p>
      <hr />
      <h1>Skills and Tools</h1>
      <div className="skills">
        {skills.map((skill) => {
        return (
            <div className="skill-card">
                <img alt={skill.alt} src={skill.img}/>
                <p>{skill.skill}</p>
            </div>      
        );
      })}
      </div>
    </div>
  );
};
export default About;
