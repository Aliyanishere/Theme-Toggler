import { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 30,
      theme: "light",
      iconClass: "fas fa-sun"
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  toggleTheme = () => {
    if (this.state.theme === "light") {
      localStorage.setItem("theme", "dark");
      localStorage.setItem("icon", "far fa-moon");
      this.setState({
        theme: localStorage.getItem("theme"),
        iconClass: localStorage.getItem("icon")
      })
    }
    else {
      localStorage.setItem("theme", "light");
      localStorage.setItem("icon", "fas fa-sun");
      this.setState({
        theme: localStorage.getItem("theme"),
        iconClass: localStorage.getItem("icon")
      })
    }
  }

  render() {
    return (
      <div className={this.state.theme}>

        <i className={this.state.iconClass} onClick={this.toggleTheme}></i><br /><br /><br /><br /><br /><br /><br />

        <div className="Counter">
          <button className="plusBtn" onClick={this.increment}>+</button>
          <h1 className="counterh1">{`${this.state.count}*C`}</h1>
          <button className="minusBtn" onClick={this.decrement}>-</button><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>

    );
  }
}

export default App;
