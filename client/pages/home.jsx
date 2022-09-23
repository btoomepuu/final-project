import React from 'react';
// import NavBar from '../components/nav-bar';

export default class Home extends React.Component {
  render() {
    return (
      <div className='container'>

        {/* <div className="img-container">
          <div className="card">
            <img className='home-img' src='/img/home.jpg' alt="coffee-home" />
            <div className="card-img-overlay">
              <p className='card-title img-title'>Coffee made simple.</p>
              <p className='card-text img-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, animi vel libero et dolorem molestiae.</p>
            </div>
          </div>
        </div> */}
        <div className='hero-img'>
          <h1>hello</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint error recusandae ipsum in ipsa veritatis quos perspiciatis sapiente impedit asperiores.
          </p>
        </div>

        <div className="collection-container">
          <p className='collection'>our collection</p>
          <div className=" collection-row row">
            <div className="coffee-card col-12 col-lg-3">
              <div className="card">
                <img className='card-img-top coffeebag' src="/img/coffeebag.png" alt="" />
                <div className="card-body">
                  <div className="card-title cursive">
                    Confetti
                  </div>
                  <p className='card-text card-info '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
            <div className="coffee-card col-12 col-lg-3">
              <div className="card">
                <img className='card-img-top coffeebag' src="/img/coffeebag.png" alt="" />
                <div className="card-body">
                  <div className="card-title cursive">
                    Obsidian
                  </div>
                  <p className='card-text card-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
            <div className="coffee-card col-12 col-lg-3">
              <div className="card">
                <img className='card-img-top coffeebag' src="/img/coffeebag.png" alt="" />
                <div className="card-body">
                  <div className="card-title cursive">
                    Jive
                  </div>
                  <p className='card-text card-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
            <div className="coffee-card col-12 col-lg-3">
              <div className="card">
                <img className='card-img-top coffeebag' src="/img/coffeebag.png" alt="" />
                <div className="card-body">
                  <div className="card-title cursive">
                    Velvet
                  </div>
                  <p className='card-text card-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
