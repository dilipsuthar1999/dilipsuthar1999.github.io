import React from 'react'

// Assets
import './style.scss'
import Logo from './Images/logo.png'
import Bg from './Images/illustration/bg-illustration.png'

// Components
import Navbar from './Navbar'
import TopSection from './TopSection'
import About from './About'
import Title from './Title'
import ExpCard from './ExpCard'
import ProCard from './ProCard'
import Form from './Form'

function Portfolio() {
    const Experience = [
        {
            id: 1,
            img: 'Images/experience/company1.png',
            date: 'Nov 2020 - Jan 2021',
            role: 'Web Developer',
            name: 'WriteSoft'
        },
        {
            id: 2,
            img: 'Images/experience/company2.png',
            date: 'March 2021 - Oct 2022',
            role: 'Software Developer',
            name: 'Edunify'
        },
        {
            id: 3,
            img: 'Images/experience/company3.png',
            date: 'Oct 2022 - Present',
            role: 'Project Engineer',
            name: 'Wipro'
        }
    ]

    const Project = [
        {
            id: 1,
            img: 'Images/project/photographer.png',
            name: 'Photographer',
            url: ''
        },
        {
            id: 2,
            img: 'Images/project/news.png',
            name: 'Read News (Front-end)',
            url: ''
        },
        {
            id: 3,
            img: 'Images/project/book.png',
            name: 'Book Store (Front-end)',
            url: ''
        },
        {
            id: 4,
            img: 'Images/project/turf.png',
            name: 'Turf Booking (Front-end)',
            url: ''
        }
    ]

    const links = [
        {
            id: 1,
            img: 'Images/social/github.png',
            url: ''
        },
        {
            id: 2,
            img: 'Images/social/hackerrank.png',
            url: ''
        },
        {
            id: 3,
            img: 'Images/social/linkedin.png',
            url: ''
        },
        {
            id: 4,
            img: 'Images/social/instagram.png',
            url: ''
        }
    ]

    return (
        <>
            <Navbar logo={Logo} />
            <TopSection links={links} id="home" />
            <About id="about" />
            <div className="bg-illustration">
                <Title titleName={'Experience'} id="experience" />
                <div className="container">
                    <div className="row justify-content-center mt-4">
                        {
                            Experience.map((company) => {
                                return (
                                    <ExpCard key={company.id} img={company.img} date={company.date} role={company.role} name={company.name} />
                                )
                            })
                        }
                    </div>
                </div>
                <Title titleName={'Projects'} id="project" />
                <div className="container">
                    <div className="row justify-content-center mt-4 pb-5">
                        {
                            Project.map((project) => {
                                return (
                                    <ProCard key={project.id} img={project.img} name={project.name} url={project.url} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Form links={links} id="contact-us" />
        </>
    )
}

export default Portfolio
