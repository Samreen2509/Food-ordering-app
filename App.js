import React from "react";
import ReactDOM from 'react-dom/client';

const Header = () => {
  return (
   <div className="header">
    <div className="logo-container"><img className="logo" alt="logo" src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg?w=740" /></div>
    <div className="menu">
      <ul className="Menu-list">
      <li>About</li>
      <li>About</li>
      <li>About</li>
      <li>About</li>
      <li>About</li>
      </ul>
    </div>
   </div>
  )
};

const Cards = (props) => {
 return(
  <div className="cards-container">
    <img className="logo" alt="logo" src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg?w=740" />
    <h3>{props.resName}</h3>
    <p>{props.cuisin}</p>
    <h4>4  star</h4>
  </div>
 )
};

const BodyLayout = () => {
return(
  <div className="body-container">
  <div className="search-btn"><input type="search"></input><button>Search</button></div>
  <div className="res-cointainer">
    <Cards resName="Megna Food" cuisin="Chineez"/>
    <Cards resName="Megna Food" cuisin="Chineez" />
    <Cards/><Cards/><Cards/><Cards/><Cards/><Cards/><Cards/><Cards/><Cards/><Cards/><Cards/><Cards/><Cards/><Cards/><Cards/><Cards/>v<Cards/><Cards/></div>
</div>
)
};
const AppLayout = () => {
    return (
        <div className="app">
          <Header/>
          <BodyLayout/>
          
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);