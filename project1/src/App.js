import Contain from './components/Container';
import './App.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

//info over AnimationOnScroll
//https://www.npmjs.com/package/aos


function App() {
  return (
    <div> 
      <div>
<h1 className='text-center mt-3'>Scroll animation</h1>
<Home/>
      </div>
   
     {/* <div>
       <h2>Try some things you never tried before and make it work!</h2>
     </div>


  <Contain/> */}

    </div>
  );
}

export default App;
