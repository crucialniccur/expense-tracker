import React from "react";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    setExpenses((previous) => [...previous, formData]);
    setFormData({
      name: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    });
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <section>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <h2>Add Expense</h2>
          <p>Enter your expense details below</p>
          <input
            type="text"
            placeholder="Enter expense name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter expense description"
            value={formData.description}
            name="description"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter expense category"
            name="category"
            onChange={handleChange}
            value={formData.category}
          />
          <input
            type="number"
            placeholder="Enter amount"
            value={formData.value}
            name="amount"
          />
          <input type="date" />
          <input type="submit" value="Submit" />
        </form>
        <div className="tableList">
          <input
            type="search"
            placeholder="Search expenses"
            value={searchTerm}
            onChange={handleSearch}
          />
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
              {expenses
                .filter(
                  (expense) =>
                    expense.name.toLowerCase().includes(searchTerm) ||
                    expense.description.toLowerCase().includes(searchTerm)
                )
                .map((expense, index) => (
                  <tr key={index}>
                    <td>{expense.name}</td>
                    <td>{expense.description}</td>
                    <td>{expense.category}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.date}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Form;
