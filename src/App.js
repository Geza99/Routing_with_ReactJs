//import logo from './logo.svg';
import {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import PageOne from './Components/PageOne'
import PageTwo from './Components/PageTwo'

class App extends Component {
  render (){
  return (
    <div className="App">
  <p style={{color:"red",fontSize:"30px"}}>Main Page</p> 
  <BrowserRouter> 
  {/* 
  HTTP://myapplication.com/pageone/subpage -> ez esetben az extractPath='/page/extractPath.contains(path)
  'exact' eseten ->extractPath===path
  */}
  
  <Route path='/pageone'  component={PageOne}></Route>
  <Route path='/pagetwo'  component={PageTwo}></Route>
  
  

  </BrowserRouter>
 
    </div>
  );
}
}
export default App;
