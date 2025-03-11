import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import '../style/style.scss';
import FirstPage from "./FirstPage";


// Parallax effect hook
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Individual Section component
function Section({ id, children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const [extraClass, setExtraClass] = useState("");
  useEffect(() => {
    setExtraClass(`section-${id}`);
  }, [id]); // id가 변경될 때마다 추가 클래스 변경

  return (
    <section ref={ref} className={`container ${extraClass}`}>
      {/* <motion.h2
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >{#00${id}}</motion.h2> */}
      <div className="content">{children}</div>
    </section>
  );
}

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });



  return (
    <div>
      <Section id={1} className="section1">
        <FirstPage />
      </Section>
      <Section id={2}>
        <ComponentTwo />
      </Section>
      <Section id={3}>
        <ComponentThree />
      </Section>
      <Section id={4}>
        <ComponentFour />
      </Section>
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}



function ComponentTwo() {
  return <p>About me</p>;
}

function ComponentThree() {
  return <p>Portflio</p>;
}

function ComponentFour() {
  return <p>Contents Me</p>;
}