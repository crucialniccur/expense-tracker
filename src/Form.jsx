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
      <div>
        <input type="search" placeholder="Search expenses" />
        <table>
          <thead>
            <tr>
              <th>Expense</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem Expense</td>
              <td>Lorem Description</td>
              <td>Lorem category</td>
              <td>Lorem Amount</td>
              <td>Lorem date</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;
