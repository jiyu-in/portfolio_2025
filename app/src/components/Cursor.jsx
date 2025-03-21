import AnimatedCursor from "react-animated-cursor"

function Cursor() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}   // 커서 내부의 크기 설정
        outerSize={35}  // 커서 외부의 크기 설정
        color='200, 254, 38'  // 커서 색상 (RGB 값) //79, 240, 183
        outerAlpha={0.4} // 외부 커서의 투명도
        innerScale={0.7} // 내부 커서의 크기 스케일
        outerScale={5}   // 외부 커서의 크기 스케일
        hasBlendMode={true} // 블렌드 모드 활성화
        blendMode="difference" // 커서 블렌드 모드 설정
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',]} // 클릭 가능한 요소 설정
      />
    </>
  );
}


export default Cursor;
