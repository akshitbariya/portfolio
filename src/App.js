import './App.css';
import Home from './Components/Home/Home'
import Projects from './Components/Home/Projects';
import Resume from './Components/Home/Resume'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes,
} from 'react-router-dom';
function App() {
  return (
   <>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/Resume" element={<Resume/>} />         
        </Routes>
   </>
  );
}

export default App;


