import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from 'styled-components';

const TitleBox = styled(motion.div)`
    display: flex;
    font-size: 2.75rem;
    font-weight: bold;
    justify-content: center;
    overflow: hidden;
`;

const text = "포트폴리오";

export default function ScrollText() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "start 30%"], 
    }); 
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
    const x = useTransform(scrollYProgress, [0, 0.5, 1], [-150, 0, 0]);
    const y = useTransform(scrollYProgress, [1, 0.5, 0], ["0%", "-50%", "-100%"]);

return (
    <div>
    <TitleBox ref={ref}>
        <motion.span
            style={{ opacity, y }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }} 
        >
            포트폴리오
        </motion.span>
    </TitleBox>
    
    </div>
  );
}
