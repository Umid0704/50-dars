import React, {Component} from "react";

export default class App extends Component{
  state={
    count:0,
    stap:1,
    arr:[1,2,3,4,5]
  }
  add__item=()=>{
      let result = this.state.arr
      let last__item = result[result.length -1]
      result.push(last__item + 1)
      this.setState({
        arr:result
      })
  }
  increase=()=>{
    this.setState({
      count: this.state.count + this.state.stap
     
    })
  }
  decrease=()=>{
    this.setState({
      count: this.state.count - this.state.stap
    })
  }
  increasestap=()=>{
    this.setState({
      stap: this.state.stap + 1
    })
  }
  decreasestap=()=>{
    this.setState({
      stap: this.state.stap - 1
    })
  }
  render(){
    const {arr} = this.state
    return(
      <div>
        <h1> <button onClick={this.increase}>+</button>{this.state.count}<button onClick={this.decrease}>-</button></h1>
        <h1> <button onClick={this.increasestap}>+</button>{this.state.stap} <button onClick={this.decreasestap}>-</button></h1>
        <button onClick={this.add__item}>add item</button>
        {
          arr.map((item, index)=>{
            return <div>
              <h1>{item}</h1>
            </div>
          })
        }
      </div>
    )
  }

}





