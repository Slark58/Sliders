import React, { useState } from 'react'
import { CaruselData } from './CaruselData';
import arrow from '../imgs/arrow.png'

import './Carusel.scss';
// import '../Simple/simple.scss';

const Carusel = ({data}) => {


    const [ widthwindow, setwidthwindow ] = useState(800);
    const [ current, setCurrent ] = useState(0);
 

    const offsetRight = () => {
        setCurrent(current === data.length - 1 ? 0 : current + 1) 

        setwidthwindow()
    }

    const offsetLeft = () => {
        setCurrent(current === 0 ? data.length - 1 : current - 1) 

    }

  return (
    
    <section>
        
        <div className="wrapper2">
            <div className="window">
            <div className="wrapper2__sliders">

            <img src={arrow} alt="foto" className="btn__prev2"  onClick={offsetRight}/>

            {CaruselData.map((slide, i) => {

            return(
                <img src={slide.Image} key={i} alt="picture" className='images'/>
            )
            })}

            <img src={arrow} alt="foto" className="btn__next2"  onClick={offsetLeft}/>

                
        </div>
            </div>
            
        
            
        </div>
    </section>
  )
}


export default Carusel;