import React, { Component } from "react";
//import { useFormik } from "formik";
import FormikItem from './FormikItem'

class  Form extends Component {
  state = {
    
    isEditable: true,
  };
  updateEditableStatus = () => {
    this.setState({ isEditable: !this.state.isEditable });
  };
  onSubmit = (e) => {
    e.preventDefault();
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
    
    return (
      <div>
        <FormikItem 
        isEditable={this.state.isEditable}
        updateEditableStatus= {this.updateEditableStatus}/>

      </div>
    );
}
}
export default Form;
