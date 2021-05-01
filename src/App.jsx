import Header from './components/Header';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Especialidades from './components/Especialidades';
import Objetivos from './components/Objetivos';
import Form from './components/Form';
import Foot from './components/Foot';
import './assets/main.css';


function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Portfolio/>
      <Especialidades/>
      <Objetivos/>
      <Form/>
      <Foot/>
    </div>
  );
}

export default App;
