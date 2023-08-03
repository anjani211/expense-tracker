import ExpenseItems from "./components/ExpenseItems";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItems
        date="2 march 2022"
        description="car insurance"
        rupees="22"
      />
      <ExpenseItems
        date="2 march 2022"
        description="bike insurance"
        rupees="22"
      />
      <ExpenseItems
        date="2 march 2022"
        description="car insurance"
        rupees="22"
      />
      <ExpenseItems
        date="2 march 2022"
        description="car insurance"
        rupees="22"
      />
    </div>
  );
}

export default App;
