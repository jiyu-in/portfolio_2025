
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import data from '../data/data.json'; 

const Root = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    padding: 20px;
`;
const Contents = styled.div``; 
const BgImage = styled.img``; 
const Wrap = styled.div``; 
const Category = styled.div``; 
const Title = styled.div``; 
const DateText = styled.div``; 
const Skills = styled.div``; 
const Description = styled.div``; 

function ProjectDetail(){
    
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects(data); // JSON 데이터를 state에 저장
    }, []);
    
    return (
        <Root>
    {projects.map((item) => (
        <Contents key={item.id}> {/* item.id가 고유한 값이라면 key로 사용 */}
            <BgImage src={item.img} alt={item.title} />
            <Wrap>
                <Category>
                    {item.category.map((category, index) => (
                        <span key={`${category}-${index}`}> {/* category와 index를 결합하여 고유한 key 생성 */}
                            {category}
                        </span>
                    ))}  
                </Category>
                <Title>{item.title}</Title>
                <DateText>{item.date}</DateText>
                <Skills>
                    {item.skills.map((skill, index) => (
                        <span key={`${skill}-${index}`}> {/* skill과 index를 결합하여 고유한 key 생성 */}
                            #{skill}
                        </span>
                    ))}
                </Skills>
                <Description>{item.des}</Description>
            </Wrap>
        </Contents>
    ))}
</Root>


    );
}

export default ProjectDetail;