import React from 'react';
import './JobCard.css';
interface CardProps {
    title: string;
    description: string;
    activities: string;
    duration: string;
}

const Card: React.FC<CardProps> = ({ title, description, activities, duration }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{activities}</p>
            <p className='duration'>{duration}</p>
        </div>
    );
};

export default Card;