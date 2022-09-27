import Simple from "../Simple/Simple";
import './app.scss';
import { SimpleData } from '../Simple/SimpleData';


const App = () =>  {


  return (
    <>
    <div className="container">
      <div className="title">Welcome</div>
      <Simple slides={SimpleData}/>

    </div>

    </>

  )

}

export default App;
