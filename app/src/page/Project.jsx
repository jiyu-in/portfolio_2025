import React, { useRef } from 'react';
import styled from 'styled-components';
import ProjectDetail from "./ProjectDetail";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Parallax, Navigation, Pagination } from 'swiper/modules';
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowRight from '../assets/images/ArrowRightIcon.svg';
import ArrowLeft from '../assets/images/ArrowLeftIcon.svg';
import LMSVideo from '../assets/videos/video2.mp4';
import ExchagneVideo from '../assets/videos/video1.mp4';
import LMS from '../assets/images/BannerLMS.jpg';
import Du from '../assets/images/BannerDubi.jpg';
import Exchange from '../assets/images/BannerExchange.jpg';
import KBA from '../assets/images/BannerKBA.jpg';
import KU from '../assets/images/BannerKU.jpg';
import TBN from '../assets/images/BannerTBN.jpg';


const Root = styled.div`
    position: relative;
    width: 100%;
    /* height: 80%; */
    margin-top: 40px;
    & .swiper{
        width: calc(100vw - 48px);
        height: 640px;
    }
    & .swiper-wrapper{
        align-items: center;
    }
    & .swiper-button-prev, .swiper-button-next{
        background-repeat: no-repeat;
        background-position: center center;
        width: 48px;
        height: 48px;
        transform: rotate(90deg);
    }
    & .swiper-button-prev{
        background-image: url(${ArrowLeft});
    }
    & .swiper-button-next{
        background-image: url(${ArrowRight});
    } 
    & .swiper-button-prev:after, .swiper-button-next:after{
        font-size: 0;
        display: none;
    }
    & .swiper-slide{
        width: calc(100% - 184px);
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(21px);
        background-color: #ffffff14;
        border: 1px solid #000000;
        border-width: 1px 0;
    }
`;



const project = [
    { 
        category:["Design", "Publishing"],
        title: "비대면 LMS(학습관리시스템) 사이트",
        date: "2022.10 ~ 2024.10", 
        skills:["React", "Javascript", "Figma", "Git"],
        des:"개인 대시보드를 통한 비대면 학습관리 시스템 구축",
        img: LMS,
        video:LMSVideo,
     },
     { 
        category:["Design", "Publishing"],
        title: "글로벌 음성 저작권인 VOICE 비즈니스 모델",
        date: "2022.09 ~ 2022.12", 
        skills:["React", "Javascript", "Figma", "Git"],
        des:"VOICE 비즈니스 모델을 통해 개인에게는 새로운 장르의 보이스 콘텐츠 제공, 신개념 보이스 엔터테인먼트 플랫폼",
        img: Du,
        video:ExchagneVideo,
     },
     { 
        category:["Design", "Publishing"],
        title: "인공지능과 교통 빅데이터를 활용한 TBN 교통혼잡예보 서비스",
        date: "2022.02 ~ 2022.09", 
        skills:["React", "Javascript", "Figma", "Git"],
        des:"사용자의 예상 혼잡도를 시간대과 장소별로 시각화하여 제공을 위한 UI&UX 작업",
        img: TBN,
        video:LMSVideo,
     },
     { 
        category:["Design"],
        title: "가상화폐거래소 UI&UX",
        date: "2017 ~ 2019", 
        skills:["React", "Javascript", "Figma", "Git"],
        des:"사용자가 즉시 거래를 시작할 수 있도록 직관적인 버튼과 UI 요소 설계",
        img: Exchange,
        video:ExchagneVideo,
     },
     { 
        category:["Design", "Publishing"],
        title: "한국방송예술교육진흥원 리뉴얼 및 행사포스터 ",
        date: "2016. 01 ~ 2016. 05", 
        skills:["React", "Javascript", "Figma", "Git"],
        des:"플래시로 작업했던 기존 홈페이지를 반응형 웹으로 리디자인 및 행사 홍보 포스터 디자인 작업",
        img: KBA,
        video:LMSVideo,
     },
     { 
        category:["Design", "Publishing"],
        title: "서울대학교 학과 페이지 리뉴얼",
        date: "2014.04 ~ 2015.04", 
        skills:["React", "Javascript", "Figma", "Git"],
        des:"서울대학교 학과의 브랜드 이미지와 정보 제공을 최적화",
        img: KU,
        video:ExchagneVideo,
     },
  ];

function Project() {

        const ref = useRef(null);
        const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start 70%", "start 30%"], 
            }); 
        const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
        const x = useTransform(scrollYProgress, [0, 0.5, 1], [30, 15, 1]);

    return (
        <Root>
            <Swiper
                direction={'vertical'}
                slidesPerView={4}
                spaceBetween={0}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Navigation]}
                className="mySwiper"
                parallax={true}
                ref={ref}
            >
                {project.map(( item , index) => (
                    <SwiperSlide key={index} 
                    >
                        <ProjectDetail 
                            title={item.title}
                            date={item.date}
                            skills={item.skills}
                            des={item.des}
                            category={item.category}
                            img={item.img}
                            video={item.video}
                            opacity={opacity}
                            translateX={x}
                            // data-swiper-parallax="-3000"
                            />
                    </SwiperSlide>
                    ))}
            </Swiper>
        </Root>
    );
}

export default Project;
