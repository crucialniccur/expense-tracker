import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <h2>Add Expense</h2>
        <p>Enter your expense details below</p>
        <input type="text" placeholder="Enter expense name"></input>
        <input type="text" placeholder="Enter expense description"></input>
        <input type="text" placeholder="Enter expense category"></input>
        <input type="number" placeholder="Enter amount"></input>
        <input type="date"></input>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
