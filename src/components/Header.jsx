import "../styles/header.scss";
import { useEffect, useState } from "react";

export default function Header() {
  const [nav, setNav] = useState(false);
  const [headerClass, setHeaderClass] = useState(false);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const scrollTop = () => setHeaderClass(window.scrollY > 0);


    
    window.addEventListener("scroll", scrollTop);

    scrollTop();
    

    return () => {
      window.removeEventListener("scroll", scrollTop);
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 490px)");

    const handler = () => setSmall(media.matches);
    handler(); 

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  function handleHeaderClass() {
    if (!small && headerClass) {
      return "header fixed";
    } else if (small) {
      return "header fixed";
    } else {
      return "header";
    };
  }
  


  return (
    <header
      style={{ height: nav && small ? "370px" : "90px" }}
      className={handleHeaderClass()}
    >
      <div id="head">
        <h1>
          <a className="h1" href="#">
            MP
          </a>
        </h1>
        <button type="button" onClick={() => setNav((prev) => !prev)}>
          <span className={nav ? "burger1close" : "burger1"}></span>
          <span className={nav ? "burger2close" : "burger2"}></span>
          <span className={nav ? "burger3close" : "burger3"}></span>
        </button>
      </div>
      <div className={nav ? "navBorder" : "openBorder"}></div>
      {small ? (
        <nav className={nav ? "openNav" : "closeNav"}>
          <a
            className={nav ? "openA" : "closeA"}
            style={{ transitionDelay: "0.1s" }}
            href="#about"
          >
            About
          </a>
          <a
            className={nav ? "openA" : "closeA"}
            style={{ transitionDelay: "0.2s" }}
            href="#skills"
          >
            Skills
          </a>
          <a
            className={nav ? "openA" : "closeA"}
            style={{ transitionDelay: "0.3s" }}
            href="#projects"
          >
            Projects
          </a>
          <a
            className={nav ? "openA" : "closeA"}
            style={{ transitionDelay: "0.4s" }}
            href="#education"
          >
            Education
          </a>
          <a
            className={nav ? "openA" : "closeA"}
            style={{ transitionDelay: "0.5s" }}
            href=""
          >
            Clarifications
          </a>
          <a
            className={nav ? "openA" : "closeA"}
            style={{ transitionDelay: "0.6s" }}
            href=""
          >
            Contact
          </a>
        </nav>
      ) : (
        <nav className="openNav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="">Clarifications</a>
          <a href="">Contact</a>
        </nav>
      )}
    </header>
  );
}
