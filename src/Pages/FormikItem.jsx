import React from "react";
import { useFormik } from 'formik';
//import * as Yup from 'yup';

const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
   
    
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };
 
  const FormikItem = (props) => {
   
    const formik = useFormik({
        initialValues: {
          firstName: 'harika',
        // age :'27',
         // lastName: '',
          email: 'suharikap@gmail.com',
          //isEditable : true
        },
        validate,
        onSubmit: values => {
          //alert(JSON.stringify(values, null, 2));
        
          props.updateEditableStatus()
        },
      });

      console.log("isEditable value is ", props.isEditable)
    return (
        <div>
        <i
        className="fa fa-pencil-square-o float-right"
        onClick={props.updateEditableStatus}
      ></i>
      {props.isEditable ? (
          <form>
            <h6> Name : {formik.values.firstName}</h6>
            
            <h6> Email :{formik.values.email}</h6>
         
          </form>
        ) : (
            <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              
              value={formik.values.firstName}
            />
            {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

           
            
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <button type="submit">Submit</button>
          </form>
        )
  }
      </div>
    );
  };
  export default FormikItem;
  
  
  
  
  