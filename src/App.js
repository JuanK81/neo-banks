import Header from "./components/Header";
import Dashboard from './components/Dashboard';
import Expenses from "./components/Expenses";
import MainContent from './components/MainContent';
import Transaction from './components/Transaction';
import Conversion from "./components/Conversion";

function App() {
  return (
    <div className="app">
      <Header />
      <Dashboard />
      <MainContent>
        <Transaction item="item-1" amount="35" period="last month" />
        <Transaction item="item-2" amount="3" period="today" />
        <Conversion item='item-3' />
        <Expenses start='Oct' end='Nov' year='2019' title='Weekly expenses' total='$76685.41' growth='7.00' isPositive={true} item='item-4'/>
      </MainContent>
    </div>
  );
}

export default App;
