import React from 'react';

export default class Create extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className='question'>How do you drink your coffee?</div>
          <div className="col box-1 hover">
            <span className='option'>Capsule</span>
            <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, doloremque.</p>
          </div>
          <div className="col box-2 hover">
            <span className='option'>Filter</span>
            <p className='info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, dolore..</p>
          </div>
          <div className="col box-3 hover">
            <span className='option'>Espresso</span>
            <p className='info'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur corrupti at qui incidunt!</p>
          </div>
        </div>
        <div className="row">
          <div className='question'>What type of coffee?</div>
          <div className="col box-1 hover">
            <span className='option'>Single Origin</span>
            <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, doloremque.</p>
          </div>
          <div className="col box-2 hover">
            <span className='option'>Decaf</span>
            <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="col box-3 hover">
            <span className='option'>Blened</span>
            <p className='info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime!</p>
          </div>
        </div>
        <div className="row">
          <div className='question'>Want us to grind them?</div>
          <div className="col box-1 hover">
            <span className='option'>Wholebean</span>
            <p className='info'>Lorem ipsum dolor sit amet. Dolore maxime iusto et inventore doloremque.</p>
          </div>
          <div className="col box-2 hover">
            <span className='option'>Filter</span>
            <p className='info'>Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
          </div>
          <div className="col box-3 hover">
            <span className='option'>Cafetiere</span>
            <p className='info'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="row">
          <div className='question'>How much would you like?</div>
          <div className="col box-1 hover">
            <span className='option'>250g</span>
            <p className='info'>Mumblecore fanny pack art party normcore aesthetic praxis austin etsy.</p>
          </div>
          <div className="col box-2 hover">
            <span className='option'>500g</span>
            <p className='info'>Sustainable gluten-free roof party next level tousled.</p>
          </div>
          <div className="col box-3 hover">
            <span className='option'>100g</span>
            <p className='info'>Butcher tumblr cronut, selvage asymmetrical four dollar poke poutine.
            </p>
          </div>
        </div>
        <div className="row">
          <div className='question'>How often should we deliver?</div>
          <div className="col box-1 hover">
            <span className='option'>Every week</span>
            <p className='info'>Mumblecore fanny pack art party normcore aesthetic praxis austin etsy.</p>
          </div>
          <div className="col box-2 hover">
            <span className='option'>Every 2 weeks</span>
            <p className='info'>Sustainable gluten-free roof party next level tousled.</p>
          </div>
          <div className="col box-3 hover">
            <span className='option'>Every month</span>
            <p className='info'>Butcher tumblr cronut, selvage asymmetrical four dollar poke poutine.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
