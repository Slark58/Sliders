import Simple from "../Simple/Simple";
import Carusel from "../Carusel/Carusel";
import { SimpleData } from '../Simple/SimpleData';
import { CaruselData } from "../Carusel/CaruselData";

import './app.scss';

const App = () =>  {


  return (
    <>
    <div className="container">
      <div className="title">Welcome</div>
      <Simple slides={SimpleData}/>
      <Carusel slides={CaruselData}  /> 
        

    </div>

    </>

  )

}

export default App;
