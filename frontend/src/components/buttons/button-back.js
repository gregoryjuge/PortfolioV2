import React, { useState, useEffect } from "react";
import ArrowUp from "./up-arrow.png";
import "./button-back.css";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <img
          className="icon-position icon-style"
          onClick={goToTop}
          src={ArrowUp}
        />
      )}
    </div>
  );
};
export default ScrollToTop;
