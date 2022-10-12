import React, { useState, useEffect} from 'react'
// import { CaruselData } from './CaruselData';
import arrow from '../imgs/arrow.png'

import './Carusel.scss';
// import '../Simple/simple.scss';



const Carusel = (data) => {

    console.log(data)
    
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState()   

    // console.log(children)
    
    useEffect(() => {
        setLength(data.slides.length)
    }, [data])


    const offsetRight = () => {
        // setCurrent(current === data.length - 1 ? 0 : current + 1) 
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
        console.log('asafa')
    }

    const offsetLeft = () => {
        // setCurrent(current === 0 ? data.length - 1 : current - 1) 
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
        console.log('asafa')
    
    }

  return (
    
    <section>
        
        <div className="wrapper2">
            <div className="window">
                <img src={arrow} alt="foto" className="btn__prev2"  onClick={offsetLeft}/>
                <div className="wrapper2__sliders" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>


                    {data.slides.map((item, i) => {

                        return(
                            <img  src={item.Image}  key={i} alt="picture" className='images'/>
                        )
                    })}


                
                </div>
                    <img src={arrow} alt="foto" className="btn__next2"  onClick={offsetRight}/>
            </div>
            
        
            
        </div>
    </section>
  )
}


export default Carusel;