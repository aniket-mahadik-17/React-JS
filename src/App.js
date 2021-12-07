import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import NewCounter from './NewCounter';
import FunctionaComponent from './FunctionaComponent';
import OnlineOrders from './OnlineOrders';
import OfflineOrders from './OfflineOrders';

function App() {
  return (
    <div className="App">
      <OnlineOrders/>
      <OfflineOrders/>
      {/* <FunctionaComponent/> */}
      {/* <Counter/> */}
      {/* <NewCounter/> */}
    </div>
  );
}

export default App;
