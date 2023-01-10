import React from 'react'

const ProCard = ({img, name, url}) => {
    return (
        <div className="col-md-3 col-sm-6">
            <a href={url} className="card mb-3 border-0 project-card">
                <img src={img} />
                <span>{name}</span>
            </a>
        </div>
    )
}

export default ProCard
