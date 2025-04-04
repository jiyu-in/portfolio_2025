import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import AnimationFlower3 from "../assets/lottie/AnimationFlower3.json";
import { Dashed, Cuadrado, RelativeBox } from "../style/Styled";

const Root = styled.div`
  position: relative;
`;

const Container = styled(motion.div)`
  height: 100vh;
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;
  overflow: hidden;
`;

const Wrap = styled(motion.div)`
  position: relative;
  padding:0 32px;
  @media (max-width: 640px) {
        padding:0 32px;
    }
`;

const Slogan = styled(motion.div)`
  font-family: "IBM Plex Sans KR", serif;
  font-size: 5rem;
  font-weight: bold;
  margin: 0 0.5rem;
  color: #fff;
  line-height: 1.2;
  transition: text-shadow 0.5s ease;
  & span{
    display: inline-block;
    color:#7e8c94;
    /* border-bottom: 2px solid #ec7f49; */
  }
  @media (max-width: 768px) {
    font-size: 4rem;
    margin:0;
  }
  @media (max-width: 640px) {
    font-size: 3rem;
  }
  @media (max-width: 480px) {
    font-size: 2.25rem;
  }
`;

const SubText = styled(motion.p)`
  width: 64%;
  font-size: 1.25rem;
  color:#9aaab2;
  margin:3rem 0 0 1rem;
  word-break: keep-all;
  white-space: pre-line;
  @media (max-width: 640px) {
    font-size: 1rem;
    margin:1rem 0 0 0;
  }
  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;


const LottieStyledGlobal = styled(Lottie)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 65vw;
  height: 95vh;
  opacity: 0.2;
  transform: translate(-50%, -50%);
  & path {
    stroke: #ffffff8c;
    stroke-width: 2px;
  }
`;

const Chip = styled.span`
  padding: 0 1.5rem;
  font-size: 4.5rem;
  border: 1px solid #ffffff59;
  border-radius: 4rem;
  box-shadow: 1px 2px 16px #ffffff63;
`;

const BackgroundBox = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  & > div{
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  & .lottie{
    position: relative;
    width: 65%;
    height: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DashBox = styled(motion.div)`
  position:absolute;
  top: 45%;
  left: 60%;
  width: 210px;
  height: 210px;
  @media (max-width: 763px) {
    width: 100px;
  height: 100px;
  }
`;

const LottieBox = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  opacity: 0.4;
  display: flex;
  align-items: flex-end;
`;



function Visual() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start 0%", "end 50%"], 
      }); 
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [1, 25, 50]);
  const z = useTransform(scrollYProgress, [0, 0.5, 1], [1, 25, 50]);

  return (
    <Root>
      <Container ref={ref}>
        <BackgroundBox>
          <RelativeBox>
            <Lottie animationData={AnimationFlower3} loop={true} className="lottie" />
            <motion.div ref={ref}>
              <DashBox
                style={{ scale, z }}
                initial={{transform: 'scale(0.5)', opacity: '0.1' }}
                animate={{ transform: 'scale(1)', opacity: '1' }}
                transition={{ ease: "easeIn", duration: 1.5}}
              >
                <Dashed/>
                {Array.from({ length: 4 }).map((_, index) => (
                  <Cuadrado key={index} className={`cuad${index+1}`} />
                ))}
              </DashBox>
            </motion.div>
          </RelativeBox>
        </BackgroundBox>
        <Wrap
          initial={{filter:'blur(12px)' }}
          animate={{ filter:'blur(0px)'}}
          transition={{ ease: "easeIn", duration: 1.5,}}
        >
          <motion.div ref={ref}>
          <Slogan
            style={{ x, opacity }}
          >경험을<br/> 코드로 엮어 <br/><span>새로운 컨텐츠</span>를<br/> 만듭니다.</Slogan>
          <SubText style={{ opacity }}>
          사용자 경험을 기획하고 디자인하며 퍼블리싱으로 웹 상에서 동적으로 보여지는 화면을 구현하며 새로운 컨텐츠를 만들어내는 일을 좋아합니다.<br/>
          이제는 기술과 디자인을 결합한 창의적인 웹 애플리케이션을 만드는 데 더욱 집중하고 있습니다.
          </SubText>
          </motion.div>
        </Wrap>
      </Container>
    </Root>
  );
}

export default Visual;
