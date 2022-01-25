import React, { Component } from 'react';

class NomadState extends Component {
  state = {
    count: 0,
    name: '',
    nick: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.name + ':' + this.state.nick);
    this.setState({
      name: '',
      nick: '',
    });
  };
  render() {
    const { count } = this.state;
    const onClick = () => this.setState({ count: count + 1 });

    return (
      <div>
        <h1>{count}</h1>
        <h3>name: {this.state.name}</h3>
        <h2>nick: {this.state.nick}</h2>
        <button onClick={onClick}>카운트 증가</button>
        <hr />
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="nick"
          value={this.state.nick}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>경고창</button>
      </div>
    );
  }
}

export default NomadState;
