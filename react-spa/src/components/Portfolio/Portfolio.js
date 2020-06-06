import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio({ work }) {
    return (
        <Link to={`/project/${work.id}`} className='portfolio-item'>
            <img
                className='portfolio-item__screenshot'
                src={work.screenshot}
                alt={work.title}
            />
            <div className='portfolio-item__title'>{work.title}</div>
        </Link>
    );
}

export default Portfolio;