import { useEffect, useState } from 'react';

import Conversion from './components/Conversion';
import Dashboard from './components/Dashboard';
import Expenses from './components/Expenses';
import Header from './components/Header';
import MainContent from './components/MainContent';
import MobilNav from './components/MobilNav';
import Transaction from './components/Transaction';

function App() {
  const [isPc, setIsPc] = useState(window.innerWidth > 720);

  const updateView = () => {
    setIsPc(window.innerWidth > 720);
  };

  useEffect(() => {
    window.addEventListener('resize', updateView);
    console.log(isPc);
    return () => window.removeEventListener('resize', updateView);
  }, [isPc]);

  return (
    <div className="app">
      <Header pcMenu={isPc} />
      <Dashboard pcMenu={isPc} />
      <MainContent>
        <Transaction item="item-1" amount="35" period="last month" />
        <Transaction item="item-2" amount="3" period="today" />
        <Conversion item="item-3" />
        <Expenses
          start="Oct"
          end="Nov"
          year="2019"
          title="Weekly expenses"
          total="$76685.41"
          growth="7.00"
          isPositive={true}
          item="item-4"
        />
      </MainContent>
      {!isPc && <MobilNav />}
    </div>
  );
}

export default App;
