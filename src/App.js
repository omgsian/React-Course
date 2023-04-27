import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 2, 28),
    },
    {
      id: "e2",
      title: "Shampoo",
      amount: 15.67,
      date: new Date(2023, 2, 27),
    },
    {
      id: "e3",
      title: "Kitchen towels",
      amount: 5.86,
      date: new Date(2023, 2, 25),
    },
    {
      id: "e4",
      title: "Movie ticket",
      amount: 22.0,
      date: new Date(2023, 1, 28),
    },
  ];

  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
