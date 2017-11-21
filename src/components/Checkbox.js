import React, { Component } from 'react';


export default class Checkbox extends Component {
      constructor(props) {
        super(props);
        this.state = { checked: true };
      }
      handleCheck(){
          this.setState({checked:!this.state.checked})
      }
  render() {
        var msg
        if(this.state.checked){
            msg = 'checked'
        }else{
            msg='unchecked'
        }
    return (
      <div className="note" style={divStyle}>
         <input type="checkbox" 
         onChange={()=>this.handleCheck()}
         defaultChecked={this.state.checked}/>
         <p>this box is {msg}</p> 
      </div>
    );
  }
}
const divStyle = {
    
  }