import React, { Component } from 'react';

class Form extends Component{
    state = {
        nametext : '',
        agetext : '',
        //items : []
    };

    onNameChange=(a) =>{
        this.setState({nametext : a.target.value});
        
    }
    onAgeChange=(a) =>{
        this.setState({agetext : 'ur age is '+ a.target.value});
    }
   submitForm = (a) =>{
       a.preventDefault();
       alert('Ur form is submitted  Name is :' +this.state.nametext + ' ' +this.state.agetext);
       //this.setState({nametext :''});
      // const form = <h4>Hello {this.state.nametext}  your age is {this.state.agetext}</h4>;
       
       //this.setState({form});

    }
    render(){
        let headtext='';
        if(this.state.nametext )
        {
            headtext=<h4>Hi {this.state.nametext}  {this.state.agetext}</h4>;
        }
        else{
            headtext='';
        }
        /*let agetext='';
        if(this.state.nametext)
        {
            agetext=<h4>  {this.state.agetext}</h4>;
        }
        else{
            agetext='';
        }*/
        return(         
                  
                <form onSubmit={this.submitForm}>
                {headtext}
                               
                Enter your name:
                <input type='textbox' onChange={this.onNameChange}></input><br/>
                
                Age:
                <input type='textbox' onChange ={this.onAgeChange}></input><br/>
                <button type='submit'>Submit</button>
                
                </form>
            
        );
    }
}

export default Form;





/*const TodoItem = (props) => {
    const mystyle={
        width:'100px',
        margin: '0px',
        date : ''
    
    }

    textColor1 = () => {
        if (props.date === Date().now){
            const a={date : props.item.date} ,
             this.setState=()=>{
                 {<p class='text-danger'>a</p>}
        }
            else{
               <p class='text-warning'>{props.item.date} </p>
            }
        }
    return (
           
        <div class=" container text-center checkbox list-group"   style={{mystyle}}> 
            
                              
                <li class="list-group-item  " key={props.item.id}>
                    <input type='checkbox'  class="float-left m-2"></input>
                    <span class="float-left pl-3 ">{props.item.text} </span>
    <span class="float-right" >{textColor1} </span>
                
                </li>
            
           
        </div>
    )
       
};*/

// class TodoItem extends Component{
//     render(){
//         const mystyle={
//             width:'100px',
//             margin: '0px',
//         }
//         return(
           
//             <div class=" container text-center checkbox list-group"   style={{mystyle}}> 
                
                                  
//                     <li class="list-group-item  " key={this.props.item.id}>
//                         <input type='checkbox'  class="float-left m-2"></input>
//                         <span class="float-left pl-3 ">{this.props.item.text} </span>
//                        <span class="float-right" >{this.props.item.date} </span>
                    
//                     </li>
                
               
//             </div>
           
        
//         );
//     }
// }
