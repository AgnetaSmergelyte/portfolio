import React, { useEffect } from "react";
import Technologies from "../components/Technologies";
import socialScreen from "../images/sceenshots/social.jpg";
import arenaScreen from "../images/sceenshots/arena.jpg";
import clockScreen from "../images/sceenshots/clock.PNG";
import todoScreen from "../images/sceenshots/todo.PNG";
import oracleScreen from "../images/sceenshots/oracle.jpg";
import regFoodScreen from "../images/sceenshots/ragfood.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const nav = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <div className="d-flex j-center">
      <div className="p-1 d-flex f-col gap-1 portfolio">
        <div className="project-entry p-1">
          <h2>The Oracle</h2>
          <div className="project-about">
            <a href="https://knowthetruth.vercel.app/" alt="View Live">
              <img
                className="project-img"
                src={oracleScreen}
                alt="Oracle Screen"
              />
            </a>
            <div>
              <p>
                A React-powered journey of sound and insight.
              </p>
              <p>
                This Single Page Application offers a unique and captivating auditory experience.
                Dive in and discover profound insight as you explore this innovative platform.
              </p>              
            </div>
          </div>
          <Technologies techArray={["js", "react", "sass"]} />
          <div className="d-flex f-wrap j-center gap-1 mt-1 mb-05">
            <a
              className="btn-link"
              href="https://knowthetruth.vercel.app/"
              alt="View Live"
            >
              <FontAwesomeIcon icon={faEye} />
              <span>View Live</span>
            </a>
            <a
              className="btn-link"
              href="https://github.com/AgnetaSmergelyte/oracle"
              alt="View Code"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>View Code</span>
            </a>
          </div>
        </div>
        <div className="project-entry p-1">
          <h2>To-Do List</h2>
          <div className="project-about">
            <a
              href="https://todo-app-spegys-projects.vercel.app/"
              alt="View Live"
            >
              <img
                className="project-img"
                src={todoScreen}
                alt="Todo app screen"
              />
            </a>
            <p>
              Manage your tasks online! This Progressive Web App (PWA), built with Angular, is accessible in your browser and installable on your phone. Add, edit, delete, and complete tasks with ease using this user-friendly Single Page Application.
            </p>
          </div>
          <Technologies techArray={["ts", "angular", "css"]} />
          <div className="d-flex f-wrap j-center gap-1 mt-1 mb-05">
            <a
              className="btn-link"
              href="https://todo-app-spegys-projects.vercel.app/"
              alt="View Live"
            >
              <FontAwesomeIcon icon={faEye} />
              <span>View Live</span>
            </a>
            <a
              className="btn-link"
              href="https://github.com/AgnetaSmergelyte/todo-app"
              alt="View Code"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>View Code</span>
            </a>
          </div>
        </div>
        <div className="project-entry p-1">
          <h2>RegFood Website Clone</h2>
          <div className="project-about">
            <a href="https://ragfood-clone.vercel.app/" alt="View Live">
              <img
                className="project-img"
                src={regFoodScreen}
                alt="Regfood screen"
              />
            </a>
            <p className="link-light">
              This RegFood landing page clone demonstrates my skills in replicating designs accurately using HTML, CSS, and JavaScript. Created as my first HTML/CSS assignment in my CodeAcademy course, I later added JavaScript to enhance its functionality. The clone meticulously replicates the original design, including intricate details and engaging animations. View the original website {" "}
              <a
                href="https://preview.themeforest.net/item/ragfood-restaurent-html-template/full_screen_preview/45638604?_ga=2.86321304.168419542.1700460621-1389662263.1700460621"
                alt="RegFood design website"
              >
                here
              </a>
              .
            </p>
          </div>
          <Technologies techArray={["html", "js", "css", "sass"]} />
          <div className="d-flex f-wrap j-center gap-1 mt-1 mb-05">
            <a
              className="btn-link"
              href="https://ragfood-clone.vercel.app/"
              alt="View Live"
            >
              <FontAwesomeIcon icon={faEye} />
              <span>View Live</span>
            </a>
            <a
              className="btn-link"
              href="https://github.com/AgnetaSmergelyte/css-assignment"
              alt="View Code"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>View Code</span>
            </a>
          </div>
        </div>
        <div className="project-entry p-1">
          <h2>25 + 5 Clock</h2>
          <div className="project-about">
            <a
              href="https://agnetasmergelyte.github.io/25plus5clock/"
              alt="View Live"
            >
              <img
                className="project-img"
                src={clockScreen}
                alt="25+5 clock screen"
              />
            </a>
            <p>
              Boost your focus with the 25 + 5 Clock, a productivity tool inspired by the Pomodoro Technique. Built with React and Redux, this Single Page Application lets you customize work and break intervals to suit your workflow. I use this tool myself to manage my work breaks, and it helps me stay focused and productive. Receive timely alarms for work sessions and breaks to optimize your workflow and ensure you take regular rejuvenating breaks.
            </p>
          </div>
          <Technologies techArray={["js", "react", "redux", "sass"]} />
          <div className="d-flex f-wrap j-center gap-1 mt-1 mb-05">
            <a
              className="btn-link"
              href="https://agnetasmergelyte.github.io/25plus5clock/"
              alt="View Live"
            >
              <FontAwesomeIcon icon={faEye} />
              <span>View Live</span>
            </a>
            <a
              className="btn-link"
              href="https://github.com/AgnetaSmergelyte/25plus5clock"
              alt="View Code"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>View Code</span>
            </a>
          </div>
        </div>
        <div className="project-entry p-1">
          <h2>Social Media App</h2>
          <div className="project-about">
            <div onClick={() => nav("/portfolio/social-media-app")}>
              <img
                className="project-img"
                src={socialScreen}
                alt="social media app screen"
              />
            </div>
            <div>
              <p>
                This Social Media App is a secure platform where users can register, create profiles, and connect with others. I developed it as my final project for a CodeAcademy course, demonstrating my full-stack web development skills.
              </p>
              <ul>
                Key features include:
                <li><b>Secure authentication: </b>Using bcrypt for password encryption and JSON Web Tokens for user authentication.</li>
                <li><b>Robust data storage: </b>Leveraging MongoDB to store user data, posts, and interactions.</li>
                <li><b>Engaging features: </b>Users can post, like, comment, and chat in real-time.</li>
              </ul>
              <p>
                This project allowed me to build a user-friendly platform for effective networking and content sharing.
              </p>
            </div>
          </div>
          <Technologies
            techArray={[
              "js",
              "react",
              "reactRouter",
              "redux",
              "node",
              "express",
              "socket",
              "mongoDb",
              "sass",
            ]}
          />
          <div className="d-flex f-wrap j-center gap-1 mt-1 mb-05">
            <a
              className="btn-link"
              href="https://github.com/AgnetaSmergelyte/final-assignment-front"
              alt="Frontend Code"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>Frontend Code</span>
            </a>
            <a
              className="btn-link"
              href="https://github.com/AgnetaSmergelyte/final-assignment-back"
              alt="Backend Code"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>Backend Code</span>
            </a>
          </div>
        </div>
        <div className="project-entry p-1">
          <h2>Fight Arena Game</h2>
          <div className="project-about">
            <div onClick={() => nav("/portfolio/arena")}>
              <img
                className="project-img"
                src={arenaScreen}
                alt="fight arena app screen"
              />
            </div>
            <div>
              <p>
                Fight Arena is a multiplayer combat game where you can register, choose your fighter, and battle other players in real-time.
              </p>
              <ul>
                <li><b>Immersive Gameplay: </b>Experience dynamic combat with other players.</li>
                <li><b>Inventory & Rewards: </b>Manage your inventory, earn gold, and equip your fighter with powerful, randomly generated gear.</li>
                <li><b>Competitive Challenges: </b>Challenge friends, compete for prizes, and test your strategic skills in exciting battles.</li>
              </ul>
              <p>

              </p>              

            </div>
          </div>
          <Technologies
            techArray={[
              "js",
              "react",
              "reactRouter",
              "redux",
              "node",
              "express",
              "socket",
              "mongoDb",
              "sass",
            ]}
          />
          <div className="d-flex f-wrap j-center gap-1 mt-1 mb-05">
            <a
              className="btn-link"
              href="https://github.com/AgnetaSmergelyte/fight-arena-front"
              alt="Frontend Code"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>Frontend Code</span>
            </a>
            <a
              className="btn-link"
              href="https://github.com/AgnetaSmergelyte/fight-arena-back"
              alt="Backend Code"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>Backend Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
