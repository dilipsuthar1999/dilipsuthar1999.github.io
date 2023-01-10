import React from 'react'
import Icon from './Icon'
import LineIllustration from './Images/illustration/line-illustration.png'

const Form = ({ links }) => {
    return (
        <div className="form-page">
            <img src={LineIllustration} className="illustration1" />
            <img src={LineIllustration} className="illustration2" />
            <div className="container">
                <form>
                    <input type="text" placeholder="Full Name" className="ds-design" />
                    <input type="email" placeholder="Email Address" className="ds-design" />
                    <textarea type="text" placeholder="Type Message Here" className="ds-design"></textarea>
                    <button className="ds-design">Let's Connect</button>
                </form>
                <div className="icon-box text-center">
                    {
                        links.map((val) => {
                            return (
                                <a href={val.url} key={val.id}>
                                    <Icon img={val.img} />
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Form
