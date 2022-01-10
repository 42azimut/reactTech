import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
  };

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleClick = (e) => {
    alert(this.state.message);
    this.setState({ message: '' });
  };
  render() {
    return (
      <div>
        <h1>이벤트 핸들러 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
