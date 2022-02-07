import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Practice React",
      desp: "You need to practice React"
    },
    {
      sno: 2,
      title: "Drink Water",
      desp: "You need to hydrate yourself"
    },
    {
      sno: 3,
      title: "Face Pack",
      desp: "You need to take care of your skin"
    }
  ]
  return (
    <>
     <Header title="My Todos List"/>
     <Todos todos={todos}/>
     <Footer/>
    </>
  );
}

export default App;
