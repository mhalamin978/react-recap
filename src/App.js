import React,{useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const detectives=[{name:'sherlock',assist:'John Watson'},
  // {name:'kaka babu',assist:'Santu Babu'},
  // {name:'tin guenda',assist:'Kishore musa'},
  // {name:'kuasha',assist:'kamal'},{name:'masud rana' , assist:'ki dorkar'}]
    const [detectives, setDetectives]= useState([])
    useEffect(() => {
      fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setDetectives(data) )
    },[])
  return (
    <div className="App">
      {/* <Detective name={detectives.name.title} ></Detective>
      <Detective name={detectives.name.first} ></Detective> */}
      {detectives.map( dec => <Detective name={dec.name.title + dec.name.first+ dec.name.last}></Detective> )}
    </div>
  );
}

function Detective(props){
    const  DetectiveStyle={
      border:'2px solid purple',
      margin:'20px'
    }
    return(
      <div style={DetectiveStyle}>
        <h1>Detective: {props.name}</h1>
        <h2>Assist: {props.assist}</h2>
      </div>
    )
}



export default App;