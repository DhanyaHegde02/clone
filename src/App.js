import './App.css';
import { BrowserRouter , Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import { useEffect } from 'react';
import {getUserAuth} from "./actions";
import {connect} from "react-redux";

function App(props) {
   useEffect(()=>{
    props.getUserAuth();
   },[]);
  return (
    <div className="App">
 <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}>
            </Route>
        <Route path='/home' element={
         
        <><Header /><Home /></>}>
      </Route>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

const mapStatetoProps = (state)=>{
  return{};

};

const mapDispatchToProps= (dispatch)=>({
  getUserAuth:()=> dispatch(getUserAuth()),
});

export default connect(mapStatetoProps,mapDispatchToProps)(App);


