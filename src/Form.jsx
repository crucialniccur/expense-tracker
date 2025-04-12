import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <h2>Add Expense</h2>
        <p>Enter your expense details below</p>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <input type="number"></input>
        <input type="password"></input>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
