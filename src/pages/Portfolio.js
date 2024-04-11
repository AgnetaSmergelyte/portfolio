import React, { useEffect } from "react";
import Technologies from "../components/Technologies";
import socialScreen from "../images/sceenshots/social.jpg";
import arenaScreen from "../images/sceenshots/arena.jpg";
import clockScreen from "../images/sceenshots/clock.PNG";
import calculatorScreen from "../images/sceenshots/calculator.jpg";
import quotesScreen from "../images/sceenshots/quote.PNG";
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
          <h2>Social Media App</h2>
          <div className="project-about">
            <div onClick={() => nav("/portfolio/social-media-app")}>
              <img
                className="project-img"
                src={socialScreen}
                alt="social media app screen"
              />
            </div>
            <p>
              Social Media App is a secure platform developed using bcrypt for
              password encryption and jsonwebtoken for authentication.
              Leveraging MongoDB for data storage, users can register, create
              profiles, and interact by posting, liking, and commenting. The app
              features live chat for instant communication. Developed as my
              final project for a CodeAcademy course, it showcases proficiency
              in full-stack web development, offering a user-friendly experience
              for effective networking and content sharing.
            </p>
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
            <p>
              Fight Arena project offers an immersive multiplayer combat
              experience. Users can register securely and select their fighters
              before engaging in real-time battles against others. The system
              manages inventory and rewards users with gold, which can be used
              to obtain equipment with randomized stats. Through live battles,
              users can challenge friends, compete for prizes, and test their
              strategic skills. This project aims to deliver an engaging and
              interactive platform for multiplayer combat enthusiasts.
            </p>
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
              The Online To-Do List presents a refined task management solution
              crafted with Angular. Users can effortlessly add, edit, and delete
              items, while marking tasks as done for easy tracking. This Single
              Page Application optimizes organization, offering a user-friendly
              experience for enhanced productivity.
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
              The RegFood website's landing page clone showcases my ability to
              replicate designs effectively. Initially conceived as my first
              HTML/CSS assignment, JavaScript was later integrated to enhance
              functionality. The clone is meticulously crafted, replete with
              intricate details and captivating animations. To view the original
              website,{" "}
              <a
                href="https://preview.themeforest.net/item/ragfood-restaurent-html-template/full_screen_preview/45638604?_ga=2.86321304.168419542.1700460621-1389662263.1700460621"
                alt="RegFood design website"
              >
                click here
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
          <h2>The Oracle</h2>
          <div className="project-about">
            <a href="https://knowthetruth.vercel.app/" alt="View Live">
              <img
                className="project-img"
                src={oracleScreen}
                alt="Oracle Screen"
              />
            </a>
            <p>
              Engage with Truth through sound with The Oracle, a captivating
              Single Page Application powered by React. Immerse yourself in an
              auditory experience that delivers profound insight. Let the truth
              resonate as you explore this innovative platform.
            </p>
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
              Elevate your productivity with the 25 + 5 Clock, a purpose-built
              tool inspired by the Pomodoro Technique. This Single Page
              Application, meticulously crafted with React and Redux, allows
              users to customize work and break time intervals, aligning with
              the principles of efficient time management. Receive timely alarms
              for work sessions and breaks, ensuring optimal productivity and
              rejuvenation.
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
          <h2>Random Quote Machine</h2>
          <div className="project-about">
            <a
              href="https://agnetasmergelyte.github.io/random-quote-machine/"
              alt="View Live"
            >
              <img
                className="project-img"
                src={quotesScreen}
                alt="Random Quote Machine screen"
              />
            </a>
            <p>
              Explore insightful quotes effortlessly with Random Quote Machine.
              With just a click, access a variety of quotes sourced from the
              Quotes API, specifically filtered by the keyword "best". This
              React-based Single Page Application offers simple navigation and
              easy sharing of quotes on Twitter. Dive into inspiration and share
              thought-provoking quotes with ease.
            </p>
          </div>
          <Technologies techArray={["js", "react", "sass"]} />
          <div className="d-flex f-wrap j-center gap-1 mt-1 mb-05">
            <a
              className="btn-link"
              href="https://agnetasmergelyte.github.io/random-quote-machine/"
              alt="View Live"
            >
              <FontAwesomeIcon icon={faEye} />
              <span>View Live</span>
            </a>
            <a
              className="btn-link"
              href="https://github.com/AgnetaSmergelyte/random-quote-machine"
              alt="View Code"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>View Code</span>
            </a>
          </div>
        </div>
        <div className="project-entry p-1">
          <h2>Calculator</h2>
          <div className="project-about">
            <a
              href="https://agnetasmergelyte.github.io/calculator/"
              alt="View Live"
            >
              <img
                className="project-img"
                src={calculatorScreen}
                alt="Calculator screen"
              />
            </a>
            <p>
              Simplify your calculations with the straightforward JavaScript
              calculator. This Single Page Application, powered by React, offers
              a seamless experience for basic arithmetic operations. Get your
              math done quickly and efficiently with intuitive calculator
              interface.
            </p>
          </div>
          <Technologies techArray={["js", "react", "sass"]} />
          <div className="d-flex f-wrap j-center gap-1 mt-1 mb-05">
            <a
              className="btn-link"
              href="https://agnetasmergelyte.github.io/calculator/"
              alt="View Live"
            >
              <FontAwesomeIcon icon={faEye} />
              <span>View Live</span>
            </a>
            <a
              className="btn-link"
              href="https://github.com/AgnetaSmergelyte/calculator"
              alt="View Code"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>View Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
