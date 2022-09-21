import React from 'react';
// import NavBar from '../components/nav-bar';

export default class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="main-img">
          <div className="img-containter">
            <img className='home-img' src='/img/home.jpg' alt="coffee-home" />
          </div>
          <div className="img-text">
            <p className='img-title'>Cofee made simple</p>
            <p className='img-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique non esse iste delectus facilis est magnam odio excepturi aut beatae?</p>
            {/* <button className='create-btn'>Create your plan</button> */}
          </div>
        </div>
      </div>
    );
  }

}
