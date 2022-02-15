import { useSelector, useDispatch } from "react-redux";
import { withdrawMoney, depositMoney } from "../redux/atmSlice";

const Atm = () => {
  const { balance } = useSelector((state) => state.atm);
  const { status } = useSelector((state) => state.atm);
  const dispatch = useDispatch();

  const handleWithdrawal = () => {
    const withdrawInput = +document.querySelector("#withdrawMoney").value;
    console.log(withdrawInput);
    dispatch(withdrawMoney(withdrawInput));
  };

  const handleWithdrawal2 = (value) => {
    dispatch(withdrawMoney(value));
  };

  const handleDeposit = () => {
    const depositInput = +document.querySelector("#depositMoney").value;
    console.log(depositInput);
    dispatch(depositMoney(depositInput));
  };

  const handleDeposit2 = (value) => {
    dispatch(depositMoney(value));
  };

  return (
    <div className="atm">
      <h2>Welcome to React Redux ATM</h2>
      <h4>Your current Balance is {balance} SEK </h4>

      <p>{status}</p>
      {/* The withdrawal part */}

      <div className="withdraw">
        <h3>Withdraw</h3>
        <button
          onClick={() => {
            handleWithdrawal2(100);
          }}
        >
          100
        </button>
        <button
          onClick={() => {
            handleWithdrawal2(200);
          }}
        >
          200
        </button>
        <button
          onClick={() => {
            handleWithdrawal2(500);
          }}
        >
          500
        </button>
        <button
          onClick={() => {
            handleWithdrawal2(1000);
          }}
        >
          1000
        </button>
        <br />
        <br />
        <label htmlFor="withdrawMoney">Enter Amount: </label>
        <input type="number" id="withdrawMoney" />
        <button
          onClick={() => {
            handleWithdrawal();
          }}
        >
          Withdraw
        </button>
      </div>

      {/* The deposit part */}

      <div className="deposit">
        <h3>Deposit</h3>

        <br />
        <button
          onClick={() => {
            handleDeposit2(100);
          }}
        >
          100
        </button>
        <button
          onClick={() => {
            handleDeposit2(200);
          }}
        >
          200
        </button>
        <button
          onClick={() => {
            handleDeposit2(500);
          }}
        >
          500
        </button>
        <button
          onClick={() => {
            handleDeposit2(1000);
          }}
        >
          1000
        </button>
        <br />
        <br />
        <label htmlFor="depositMoney">Enter Amount: </label>
        <input type="number" id="depositMoney" />
        <button onClick={() => {handleDeposit()}}>Deposit</button>
      </div>
    </div>
  );
};
export default Atm;
