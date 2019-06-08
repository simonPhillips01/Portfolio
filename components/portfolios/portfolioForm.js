// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'reactstrap';
import PortInput from '../form/portInput';
import PortDate from '../form/portDate';

const validateInputs = (values) => {
    let errors = {};
    
    Object.entries(values).forEach(([key, value]) => {
      if(!values[key] && (values[key] === 'startDate' || values[key] === 'endDate')) {
        errors[key] = `Field ${key} is required!`;
      }
    })

    // Object.keys(values).forEach((key) => {
    //   if(!values[key]) {
    //     errors[key] = `Field ${key} is required!`;
    //   }
    // })

    const startDate = values.startDate;
    const endDate = values.endDate;

    if(startDate && endDate && endDate.isBefore(startDate)) {
      errors.endDate = 'End Date cannot be before start date!!!';
    }
    
    return errors;
  }

const INITIAL_VALUES = { title: '',
                         company: '', 
                         location: '', 
                         position: '',
                         description: '', 
                         startDate: '', 
                         endDate: ''};

const PortfolioForm = (props) => (
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={props.onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          
          <Field type="text" name="title" label="Title" component={PortInput}/>
          
          <Field type="text" name="company" label="Company" component={PortInput}/>
          
          <Field type="text" name="location" label="Location" component={PortInput}/>
          
          <Field type="text" name="position" label="Position" component={PortInput}/>
          
          <Field type="textarea" name="description" label="Description" component={PortInput}/>
          
          <Field name="startDate" label="Stat Date" component={PortDate}/>
          
          <Field name="endDate" label="End Date" canBeDisabled={true} component={PortDate}/>
          
          <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioForm;