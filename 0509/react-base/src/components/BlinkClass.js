import React, { Component, createRef } from "react";

export default class CBlinkComponent extends Component {
  constructor(props) {
    super(props); // 반드시 작성해줘야함

    this.state = {
      showText: true,
    }; // state 관리
    
    this.intervalRef = createRef();
    // createRef() 함수를 사용하여 ref를 생성하면, 
    // 해당 ref 객체에는 current 속성이 있는데, 
    // 이는 ref가 참조하는 DOM 요소나 클래스 컴포넌트의 인스턴스를 가리킵니다. 
    // 이를 통해 ref를 사용하여 해당 요소나 컴포넌트에 접근할 수 있습니다.
  }

  componentDidMount() { // 컴포넌트가 render 되고, 한 번 호출 되는 함수
    this.intervalRef.current = setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  componentWillUnmount() { // 컴포넌트가 unMount 되기 직전 (삭제되기 직전)에 한번 호출되는 함수
    clearInterval(this.intervalRef.current);
  }

  render() { // class는 render로 표현
    return <div> {this.state.showText ? this.props.text : null}</div>;
  }
}
