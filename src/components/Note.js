import React, { Component } from 'react';
import Draggable, {DraggableCore} from 'react-draggable'; 

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }
  componentWillMount(){
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 150, 'px'),
      top:this.randomBetween(0,window.innerHeight - 150, 'px')
    }
  }
  componentDidUpdate(){
    if(this.save.editing){
      this.refs.newtext.focus()
      this.refs.newtext.select()
    }
  }
 shouldComponentUpdate(nextProps,nextState){
        return this.props.children !== nextProps.children || this.state !== nextState
 }
  randomBetween(x, y, s){
    return (x + Math.ceil(Math.random() * (y-x))) + s
  }
    edit(){
        this.setState({editing:true})
    }
    save(){
      this.props.onChange(this.refs.newtext.value)
      
      this.setState({editing: false})
  }
  remove(){
    this.props.onRemove(this.props.id)
  }
    renderForm(){
      return (
        <div className="note"   style={this.style}>
              <textarea ref="newtext"
              defaultValue={this.props.children}></textarea>
              <button onClick={()=>this.save()}>save</button>
        </div>
      );
    }
    renderDisplay(){
      return (
        <div className="note" style={this.style} >
              <p>{this.props.children} </p>
              <span>
                  <button onClick={()=>this.edit()}>Edit</button>
                  <button onClick={()=>this.remove()}>X</button>
              </span>
        </div>
      );
    }
    render() {
      return(
        <Draggable>
        {(this.state.editing) ? this.renderForm()
                             : this.renderDisplay()}
      </Draggable>
      )
   
  }
}
