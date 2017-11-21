import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Note from'./Note.js';
import Fetch from 'react-fetch'


export default  class Board extends Component {
    constructor(props) {
        super(props);
        this.state = { notes: [] };
      }
      nextId(){
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
      }
      componentWillMount(){
        if(this.props.count)
          {
            var url = 'https://baconipsum.com/api/?type=all-meat&sentences=$' + this.props.count
            fetch(url)
              .then(results => results.json())
              .then(array => array[0])
              .then(text => text.split('. '))
              .then(array => array.forEach(
                sentence => this.add(sentence)))
                .catch(function(err){console.log('dident connect to api',err)})
          }
      }
      add(text){
        var notes = [...this.state.notes,{
          id:this.nextId()
          ,note:text
        }]
        this.setState({notes})
      }
      update(text,id){
            var notes = this.state.notes.map(
            note=>(note.id !== id) ? 
            note:
            {
              ...note,
              note: text
            }
        )
        this.setState({notes})
        
      }
      remove(id){
        var notes = this.state.notes.filter(note => note.id !== id)
        this.setState({notes})
      }
      eachNote(note){
        return(
        <Note key={note.id} id={note.id} onChange={(newText)=>this.update(newText,note.id)} onRemove={(idremove)=>this.remove(idremove)}>{note.note}</Note>
      )
      }
  render() {
    return (
      <div className="Board" style={board}>
      {this.state.notes.map((n)=>this.eachNote(n))}
      <button onClick={()=>this.add("New Note")}>+</button>
      </div>
    );
  }
  
}
Board.propTypes = {
   count:PropTypes.number
  }
const board = {
    backgroundColor: 'orange',
    width:2200,
    height:2200,
  }