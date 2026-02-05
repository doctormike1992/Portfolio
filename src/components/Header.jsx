import "../styles/header.scss";
import { useEffect, useState } from "react";

export default function Header() {
  const [nav, setNav] = useState(false);
  const [headerClass, setHeaderClass] = useState(false);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const scrollTop = () => setHeaderClass(window.scrollY > 0);
    const smallScreen = () => setSmall(window.innerWidth < 426);

    window.addEventListener("scroll", scrollTop);
    window.addEventListener("resize", smallScreen);

    scrollTop();
    smallScreen();
    return () => {
      window.removeEventListener("scroll", scrollTop);
      window.removeEventListener("resize", smallScreen);
    };
  }, []);

  return (
    <header
      style={{ height: nav && small ? "370px" : "90px" }}
      className={headerClass ? "header fixed" : "header"}
    >
      <div id="head">
        <h1>
          <a className="h1" href="#intro">
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
            href=""
          >
            Skills
          </a>
          <a
            className={nav ? "openA" : "closeA"}
            style={{ transitionDelay: "0.3s" }}
            href=""
          >
            Projects
          </a>
          <a
            className={nav ? "openA" : "closeA"}
            style={{ transitionDelay: "0.4s" }}
            href=""
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
          <a href="">Skills</a>
          <a href="">Projects</a>
          <a href="">Education</a>
          <a href="">Clarifications</a>
          <a href="">Contact</a>
        </nav>
      )}
    </header>
  );
}
