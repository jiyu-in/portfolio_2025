
import {
  useViewportScroll,
  useMotionValue,
  motion,
  useTransform,
  useCycle
} from "framer-motion";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import round from "./round.svg";
export default function App() {
  return (
    <div className="App">
      <h2>To control video player with scroll event and Framer Motion</h2>
      <Bousole />
      <VideoCmp />
      <H />
    </div>
  );
}

const H1 = styled.div`
  height: 500px;
`;

const H = styled.div`
  height: 3000px;
`;

const VideoS = styled(motion.video)`
  width: 100%;
  position: fixed;
  left: 0;
`;

const VideoCmp = () => {
  const url =
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm";
  const { scrollYProgress, scrollY } = useViewportScroll();
  const r = useRef();

  const updateAtScroll = () => {
    let video = r.current;
    video.pause();
    const p = scrollYProgress.get();
    const currentFrame = Math.round(p * video.duration * 1000) / 1000;
    video.currentTime = currentFrame;
  };

  useEffect(() => scrollY.onChange(throttle(updateAtScroll, 80)), []);

  return (
    <VideoS ref={r}>
      <source src={url} type="video/webm" />
    </VideoS>
  );
};

const Round1 = () => {
  // get svg
  return <img src={round} />;
};

function throttle(callback, delay) {
  var last;
  var timer;
  return function () {
    var context = this;
    var now = +new Date();
    var args = arguments;
    if (last && now < last + delay) {
      // le délai n'est pas écoulé on reset le timer
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        callback.apply(context, args);
      }, delay);
    } else {
      last = now;
      callback.apply(context, args);
    }
  };
}

const Div1 = styled(motion.div)`
  height: 500px;
  width: 500px;
  background-color: grey;
  border-radius: 10%;
  position: absolute;
`;
const Div2 = styled(motion.div)`
  height: 450px;
  width: 450px;
  background-color: blue;
  border-radius: 20%;
  position: absolute;
`;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  opacity: 0.4;
`;

const Contain = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bousole = () => {
  return (
    <Container>
      <Contain>
        
      </Contain>
    </Container>
  );
};
