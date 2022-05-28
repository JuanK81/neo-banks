import Header from "./components/Header";
import Dashboard from './components/Dashboard';
import MainContent from './components/MainContent';
import Transaction from './components/Transaction';

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <MainContent>
        <Transaction item="item-1" amount="35" period="last month" />
        <Transaction item="item-2" amount="3" period="today" />
      </MainContent>
    </>
  );
}

export default App;
