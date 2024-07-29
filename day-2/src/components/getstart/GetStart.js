import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./getstart.css";
import { AiOutlineArrowRight } from "react-icons/ai";

function GetStart() {

  // return (
  //   <div class="wrapper">
  //     <a class="link" href="#" >
  //       <div class="color"></div>
  //       <span>GET START</span>
  //       <i><AiOutlineArrowRight /></i>
  //     </a>
  //       <script src="./Effect.js"></script>
  //   </div>
  // );
  const linkRef = useRef(null);
  const pinkRef = useRef(null);
  let hoverTL = useRef(null);

  useEffect(() => {
    const link = linkRef.current;
    const pink = pinkRef.current;

    hoverTL.current = gsap.timeline({ paused: true });

    hoverTL.current.to(pink, {
      width: "calc(100% + 1.3em)",
      ease: "Elastic.easeOut(0.25)",
      duration: 0.4
    });
    hoverTL.current.to(pink, {
      width: "2em",
      left: "calc(100% - 1.45em)",
      ease: "Elastic.easeOut(0.4)",
      duration: 0.6
    });

    link.addEventListener("mouseenter", handleMouseEnter);
    link.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      link.removeEventListener("mouseenter", handleMouseEnter);
      link.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleMouseEnter = () => {
    hoverTL.current.play();
  };

  const handleMouseLeave = () => {
    hoverTL.current.reverse();
  };

  return (
    <div className="wrapper" >
      <a className="link" href="/paybill" ref={linkRef} >
        <div className="color" ref={pinkRef}></div>
        <span>GET START</span>
        <i><AiOutlineArrowRight/></i>
      </a>
    </div>
  );


}

export default GetStart;
