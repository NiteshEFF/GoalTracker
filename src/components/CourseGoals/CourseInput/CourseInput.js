import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [showError, isDataValid] = useState(true)

  const goalInputChangeHandler = event => {
    if(event.target.value.length > 0){
      isDataValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.length !== 0){
      props.onAddGoal(enteredValue);
      setEnteredValue("");
    } else {
      isDataValid(false);
    }
    
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${(!showError)? `error` : ``}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
