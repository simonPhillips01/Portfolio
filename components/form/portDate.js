import React from "react";
import DatePicker from "react-datepicker";
import { FormGroup, Label, Button } from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css";

export default class PortDate extends React.Component {
  constructor(props) {
    super(props);

    const dateValue = props.initialDate ? new Date(props.initialDate) : new Date();

    this.state = {
      dateValue,
      isHidden: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  setFieldValueAndTouched(date, touched) {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;
    
    setFieldValue(name, date, true);
    setFieldTouched(name, true, true);
  }

  handleChange(date) {
    this.setState({
      dateValue: date
    });

    this.setFieldValueAndTouched(date, true);
  }

  toggleDate(date) {
    this.setState({
      isHidden: !this.state.isHidden
    })

    this.setFieldValueAndTouched(date, true);
  }

  render() {
    const { canBeDisabled, label, field, form: { touched, errors } } = this.props;
    const {isHidden, dateValue} = this.state;

    return (
      <FormGroup>
        <Label>{ label }</Label>
        <div className="input-group">
        { !isHidden &&
          <DatePicker
            selected={dateValue}
            onChange={this.handleChange}
            peekNextMonth
            // showMonthDropdown
            // showMonthYearDropdown
            // minDate={new Date()}
            // maxDate={addDays(new Date(), 5)}
            dateFormat="dd/MM/yyyy"
            dropdownMode="select"
          />
        }
        </div>
        { canBeDisabled && !isHidden && <Button onClick={() => this.toggleDate()}>Still working here...</Button>}
        { canBeDisabled && isHidden && 
            <React.Fragment>
              <span>Still working here</span>
              <Button onClick={() => this.toggleDate(dateValue)}>Set End Date</Button>
            </React.Fragment>
        }
        { touched[field.name] &&
          errors[field.name] && <div className="error">{errors[field.name]}</div>}
      </FormGroup>
    );
  }
}