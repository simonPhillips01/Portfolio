// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';
import PortInput from '../form/portInput';

const validateInputs = (validate) => {
    let errors = {};
    // if (!values.email) {
    //     errors.email = 'Required';
    //   } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //   ) {
    //     errors.email = 'Invalid email address';
    //   }
    //   return errors;
    }

const INITIAL_VALUES = { title: '',
                         company: '', 
                         location: '', 
                         position: '',
                         description: '', 
                         startDate: '', 
                         endDate: ''};

const PortfolioForm = () => (
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          
          <Field type="text" name="title" label="Title" component={PortInput}/>
          
          <Field type="text" name="company" label="Company" component={PortInput}/>
          
          <Field type="text" name="location" label="Location" component={PortInput}/>
          
          <Field type="text" name="position" label="Position" component={PortInput}/>
          
          <Field type="textarea" name="description" label="Description" component={PortInput}/>
          
          <Field type="text" name="startDate" label="StatDate" component={PortInput}/>
          
          <Field type="text" name="endDate" label="EndDate" component={PortInput}/>
          
          <button type="submit" disabled={isSubmitting}>
            Create
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioForm;

// import React from 'react';

// export default class PortfolioForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {title: '', description: '', language: ''}; 
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//         const field = event.target.name;
//         this.setState({[field]: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.title + ' ' + this.state.description + ' ' + this.state.language);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <Label>
//             Name:
//             <input name="title" type="text" value={this.state.value} onChange={this.handleChange} />
//           </Label>
//           <Label>
//             Description:
//             <textarea name="description" value={this.state.description} onChange={this.handleChange} />
//           </Label>
//           <select name="language" value={this.state.language} onChange={this.handleChange}>
//             <option value="Vanilla Javascript">Vanilla Javascript</option>
//             <option value="ES6">ES6</option>
//             <option selected value="Typescript">Typescript</option>
//             <option value="Jquery">Jquery</option>
//           </select>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }