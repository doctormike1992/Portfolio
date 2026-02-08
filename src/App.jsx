import Header from './components/Header'
import './App.scss'
import Intro from './components/Inrto';
import Stars from './components/Stars';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {


  return (
    <>
      <Header />
      {/* <Stars /> */}
      <Intro />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App
