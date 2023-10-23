import './index.scss';
import { Home } from './pages/Home';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  )
}

export default App;
