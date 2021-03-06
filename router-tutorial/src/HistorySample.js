import React, { Component } from 'react';

class HistorySample extends Component {
  //뒤로가기
  handleGoBack = () => {
    this.props.history.goBack();
  };

  // Go Home
  handleGoHome = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    //페이지에 변화가 생기려고 할때마다 정말 나갈 것인지 질물함!
    this.unblock = this.props.history.block('정말 나갈거니?');
  }

  componentWillUnmount() {
    //컴포넌트가 언마운트 되면 질문을 멈춤
    if (this.unblock) {
      this.unblock();
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;
