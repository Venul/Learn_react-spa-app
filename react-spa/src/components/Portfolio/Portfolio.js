import React from 'react';
import './Portfolio.css';

function Portfolio({ work }) {
    return (
        <a href={work.link} className='portfolio-item'>
            <img
                className='portfolio-item__screenshot'
                src={work.screenshot}
                alt={work.title}
            />
            <div className='portfolio-item__title'>{work.title}</div>
        </a>
    );
}

export default Portfolio;