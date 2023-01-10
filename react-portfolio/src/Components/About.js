import React from 'react'
import Icon from './Icon'

const About = () => {
    const skill = [
        {
            id: 1,
            img: 'Images/skills/html.png',
            name: 'HTML'
        },
        {
            id: 2,
            img: 'Images/skills/css.png',
            name: 'CSS'
        },
        {
            id: 3,
            img: 'Images/skills/bootstrap.png',
            name: 'Bootstrap'
        },
        {
            id: 4,
            img: 'Images/skills/js.png',
            name: 'JS'
        },
        {
            id: 5,
            img: 'Images/skills/react.png',
            name: 'React'
        },
        {
            id: 6,
            img: 'Images/skills/figma.png',
            name: 'Figma'
        },
        {
            id: 7,
            img: 'Images/skills/xd.png',
            name: 'Adobe XD'
        },
        {
            id: 8,
            img: 'Images/skills/php.png',
            name: 'PHP'
        },
        {
            id: 9,
            img: 'Images/skills/mysql.png',
            name: 'MySQL'
        }
    ]

    return (
        <>
            <div className="container">
                <div className="about">
                    <p>Hi! I am Dilip Suthar, a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found my interest into web designer/ development.</p>
                    <div className="icon-box">
                        {
                            skill.map((val) => {
                                return (<Icon key={val.id} img={val.img} />)
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
