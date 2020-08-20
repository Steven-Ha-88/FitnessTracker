import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/index";
import { ExerciseList } from "./components/ExerciseList/index";
import { CreateExercise } from "./components/CreateExercise/index";
import { CreateUser } from "./components/CreateUser/index";
import { EditExercise } from "./components/EditExercise/index";

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <br />
        <Route path='/' exact component={ExerciseList} />
        <Route path='/edit/:id' component={EditExercise} />
        <Route path='/create' component={CreateExercise} />
        <Route path='/user' component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
