import * as motion from "motion/react-client"
import {useEffect, useState} from "react";
import "./modules/App.module.scss";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);


  return (<motion.div
    initial={{y: 0}}
    animate={{y: isVisible ? 0 : "-100%"}}
    transition={{duration: 0.3}}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      background: "rgba(0, 0, 0, 0.8)",
      color: "white",
      padding: "1rem",
      zIndex: 1000,
    }}
  >
    <h1>Framer Motion Header</h1>
  </motion.div>)
}

export default App
