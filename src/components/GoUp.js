import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";

const GoUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > window.innerHeight);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`scroll-up-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <div>
        <FontAwesomeIcon icon={faHandPointUp} />
      </div>
    </div>
  );
};

export default GoUp;
