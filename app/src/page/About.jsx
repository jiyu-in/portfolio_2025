import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const text = "Hello, Framer Motion!";

export default function ScrollText() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "start 30%"], 
    //offset: ["0.2 0.8", "0.4 1"], 
  }); 
  // 🎯 문장이 화면에 80% 보일 때부터 20% 지점까지 스크롤하는 동안 애니메이션 실행

  // 🎯 스크롤 진행도에 따라 투명도 변화 (천천히 나타남)
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  // 🎯 텍스트가 양옆에서 중앙으로 이동하는 효과 (더 천천히, 자연스럽게)
//   const x = useTransform(scrollYProgress, [0, 0.5, 1], [-150, 0, 0]);
const x = useTransform(scrollYProgress, [0, 0.5, 1], ["-100%", "0%", "100%"]);

  return (
    <motion.div
      ref={ref}
      style={{
        display: "flex",
        fontSize: "2rem",
        fontWeight: "bold",
        justifyContent: "center",
        margin: "200px 0",
        overflow: "hidden",
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          style={{ opacity, x }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }} 
          // 🎯 "spring" 애니메이션 추가 → 더 부드럽고 자연스럽게!
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
