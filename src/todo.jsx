import React from 'react';

class Todo extends React.Component{
    state= {
        items :[],
        text : ''
    };
  submitButton(){
      const text = this.state.text;
      this.setState = this.state.items.concat(text)
  }
    render(){
        return(
            <div>
                <h4>TODO</h4>
                <div> git test </div>
                <form onSubmit={this.submitButton}>
                <input type='textbox' value={this.state.text} ></input>
                <br/>
                <button type='submit'>Add</button>
                </form>
            </div>
        );
    }
}

export default Todo;