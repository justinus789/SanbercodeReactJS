import logo from './logo.png';
import './App.css';
import Checkbox from './checkbox';

const App = () => {
  return (
    <div className="App">
      <div className='container'>
        <img src={logo} alt="" />
        <h1>THINGS TO DO</h1>
        <small>During bootcamp in sanbercode</small>
        <Checkbox name="Belajar GIT & CLI"></Checkbox>
        <Checkbox name="Belajar HTML & CSS"></Checkbox>
        <Checkbox name="Belajar Javascript"></Checkbox>
        <Checkbox name="Belajar ReactJS Dasar"></Checkbox>
        <Checkbox name="Belajar ReactJS Advance"></Checkbox>
        <button className='button'>SEND</button>
      </div>
    </div>
  );
}

export default App;
