import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectList from "./ProjectList";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Keyboard, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowRight from '../assets/images/ArrowRightIcon.svg';
import ArrowLeft from '../assets/images/ArrowLeftIcon.svg';
import FlowerPoint from '../assets/images/FlowArrow.svg';
import data from '../data/data.json'; 


const Root = styled.div`
    position: relative;
    width: 100%;
    margin-top: 40px;
    & .swiper{
        width: calc(100vw - 48px);
        height: 60vh;
        /* aspect-ratio: 16 / 9; */
        /* @media (max-width: 640px) {
            height: 480px;
        }
        @media (max-width: 480px) {
            height: 340px;
        } */
    }
    & .swiper-wrapper{
        align-items: center;
    }
    & .swiper-button-prev, .swiper-button-next{
        background-image: url(${FlowerPoint});
        background-repeat: no-repeat;
        background-position: center center;
        width: 64px;
        height: 64px;
        /* transform: rotate(90deg); */
        @media (max-width: 640px) {
            display: none;
        }
    }
    & .swiper-button-next{
        transform: rotate(180deg);
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
        border-width: 1px 0;
        @media (max-width: 640px) {
            width: 100%;
        }
    }
    & .swiper-scrollbar{
        background-color: #ffffff30;
    }
    & .swiper-scrollbar-drag{
        background-color: #91afc0;
    }
`;


function Project() {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects(data); 
    }, []);

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
                slidesPerView={1}
                // spaceBetween={30}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    // 320: { slidesPerView: 1 },
                    769: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    },
                    1024: { slidesPerView: 3 },
                }}
                scrollbar={true}
                navigation={true}
                modules={[Keyboard, Scrollbar, Navigation]}
                ref={ref}
            >
                {projects.map(( item , index) => (
                    <SwiperSlide key={index} 
                    >
                        <ProjectList 
                            title={item.title}
                            date={item.date}
                            skills={item.skills}
                            des={item.des}
                            category={item.category}
                            img={item.img}
                            url={item.url}
                            page={item.page}
                            opacity={opacity}
                            translateX={x}
                            />
                    </SwiperSlide>
                    ))}
            </Swiper>
        </Root>
    );
}

export default Project;
