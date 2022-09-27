import React from 'react';
import { SimpleData } from './SimpleData';
import arrow from '../imgs/arrow.png'

import { useState } from 'react';

import './simple.scss'

const Simple = ({slides}) => {


    const [current, setCurrent] = useState(0);
    const length = slides.length
    
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1) 
        console.log('next')
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1) 
        console.log('prev')
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }


    return (
        // <div className="wrapper">
        //     <button className="btn__prev" data-action='prev'>prev</button>
        //     <img src={process.env.PUBLIC_URL + `/imgs/imgs${index + 1}.jpg`}/>

        //     <button className="btn__next" data-action='next'>next</button>

        // </div>
        <section className="wrapper">
                {/* <button className="btn__prev" data-action='prev' onClick={prevSlide}>prev</button> */}
                <img src={arrow} alt="foto" className="btn__prev" data-action='prev' onClick={prevSlide}/>
                {SimpleData.map((slide, index) => {
                    return (
                        <div 
                        className={index === current ? 'active' : 'slide'} 
                        key={index}>
                            {index === current && (<img src={slide.Image} alt="foto" className='image'/>)}
                            
                        </div>
                        )
                    })}
                
                {/* <button className="btn__next" data-action='next' onClick={nextSlide}>next</button> */}
                <img src={arrow} alt="foto" className="btn__next" data-action='prev' onClick={nextSlide}/>


        </section>
    );
}

export default Simple;
