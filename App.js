import React from 'react';
class App extends React.Component {
	//render() {
		// return <div>Hello Nikola!!!! </div>
	//}
//}

 constructor() {
    super();
    
    this.state = {
      num: 0
    }
    
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    
  }
  
  render() {
    return (
      <div>
        <button onClick={this.decrease}>-</button>
        {this.state.num}
        <button onClick={this.increase}>+</button>
        
        {this.state.num % 2 === 0 ?
          <div>The number is even</div>
          : null
        }
        
        {this.state.num > 10 ?
          <div>The number is greater than 10</div>
          : null
        }
        
      </div>
    );
  }
  
  increase() {
    this.setState({
      num: this.state.num + 1
    })
  }
  
  decrease() {
    this.setState({
      num: this.state.num - 1
    })
  }
}

//ReactDOM.render(
 // <App />,
  //document.getElementById('container')
//);

export default App
