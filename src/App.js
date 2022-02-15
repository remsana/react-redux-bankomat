import './App.css';
import Atm from "./components/Atm";
import { useSelector, useDispatch } from "react-redux";
import { showHideAtm } from "./redux/atmSlice";


function App() {

  const { showAtm } = useSelector((state) => state.atm);
  let dispatch = useDispatch();

  return (
    <div className="App">
      <header className='header'>
        <h1>React Redux Bankomat</h1>
      </header>
      <button className="showBtn" onClick={() => dispatch(showHideAtm())}>{showAtm ? "Close ATM" : "Start ATM"}</button>
      {showAtm && <Atm />}
    </div>
  );
}

export default App;
