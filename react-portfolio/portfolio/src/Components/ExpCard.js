import React from 'react'

const ExpCard = ({img, date, role, name}) => {
    return (
        <div className="col-md-4 col-sm-6 col-10">
            <div className="card mb-3 border-0 experience-card">
                <div className="row g-0">
                    <div className="col-4 align-self-center">
                        <img src={img} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-8 align-self-center">
                        <div className="card-body">
                            <p className="card-text1">{date}</p>
                            <p className="card-text2">{role}</p>
                            <p className="card-text3">{name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpCard
