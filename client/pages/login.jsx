import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <section className="log-sign-head">
          <h2>All ready registered?</h2>
          <h4>Signin here:</h4>
        </section>

        <section className="form">
          <form>
            <div className="form-group">
              <p>Email</p>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group">
              <p>Password</p>
              <input
                type="text"
                className="form-control"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group">
              <button className="btn">Login</button>
            </div>
          </form>
        </section>
      </>
    );
  }
}
