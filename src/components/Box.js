import React, { Component } from 'react';


export default class Box extends Component {
    
     getInitialState(){
         return{
             backgroundColor: 'purple',
             height: 200,
             width: 200
         }
     }
     update(){
         this.setState({backgroundColor:'red'})
     }
     componentDidUpdate(){
         alert('component did update')
     }
  render() {
    return (
        <div style={this.state} onClick={()=>this.update()}></div>
    );
  }
}
const divStyle = {
    
  }