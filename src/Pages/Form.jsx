import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as todoActions from "../actions/todo";

class Form extends Component {
  state = {
    //name: "harika",
    //age: "24",
    //email: " suharikap@gmail.com",
    isEditable: true,
  };
  updateEditableStatus = () => {
    this.setState({  
      name: this.props.form.name,
      age: this.props.form.age,
      email: this.props.form.email,
      isEditable: !this.state.isEditable,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    //this.setState({ isEditable: true });
    this.props.actions.formtext(
      this.state.name,
      this.state.age,
      this.state.email
    );
    this.setState({ isEditable: true });
  };

  nameChangeHandler = (e) => {
    this.setState({ name: e.target.value });
  
  };

  ageChangeHadler = (e) => {
    let age = e.target.value;
    if (!Number(age)) {
      alert("Your age must be a number");
    }
    this.setState({ age: e.target.value });
  };
  emailChangeHadler = (e) => {
    this.setState({ email: e.target.value });
  };
  render() {
    /*let text = "";

    if (this.state.name) {
      text = [
        <h6>Name : {this.state.name}</h6>,
        <h6>Age : {this.state.age}</h6>,
        <h6>Email : {this.state.email}</h6>,
      ];
    } else {
      text = "";
    }*/
    console.log(this.props);
    console.log(this.state);
    return (
      <div className="container">
        <i
          className="fa fa-pencil-square-o float-right"
          onClick={this.updateEditableStatus}
        ></i>
        {this.state.isEditable ? (
          <form>
            <h6> Name : {this.props.form.name}</h6>
            <h6> Age : {this.props.form.age}</h6>
            <h6> Email : {this.props.form.email}</h6>
            {/*  {text}*/}
          </form>
        ) : (
          <form>
            Name :{" "}
            <input
              type="text"
              maxLength="10"
              onChange={this.nameChangeHandler}
              value={this.state.name}
            ></input>
            <br />
            Age :{" "}
            <input
              type="text"
              className="m-2 "
              onChange={this.ageChangeHadler}
              value={this.state.age}
            ></input>
            <br />
            Email :{" "}
            <input
              type="email"
              className="mb-2 "
              onChange={this.emailChangeHadler}
              value={this.state.email}
            ></input>
            <br />
            <button onClick={this.onSubmit}>Submit</button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ form }) => ({
  form,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(todoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

//export default Form;

/*<form>             
<h6> Name : {this.state.name}</h6>
    <h6> Age : {this.state.age}</h6>
    <h6> Email : {this.state.email}</h6>
  </form>)
  ( <form>
    Name : <input type="text" maxLength="6"></input><br/>
    Age  :  <input type="text" className="m-2 " ></input><br/>
    Email : <input type="text" ></input>
</form>)

updateEditableStatus=(isEditable)=>{
    this.setState({ isEditable: isEditable})
  }
  onClick={()=>this.updateEditableStatus(!this.state.isEditable)}
  ></i>
  {this.state.isEditable ? (
  
    <h6> Name : {this.state.name}</h6>)
  
  :*/
