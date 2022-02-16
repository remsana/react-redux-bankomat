import { useSelector, useDispatch } from "react-redux";
import { withdrawMoney, depositMoney } from "../redux/atmSlice";

const Atm = () => {
  const { balance, status } = useSelector((state) => state.atm);
  const dispatch = useDispatch();

  // Functions
  const handleWithdrawal = (value) => {
    let withdrawInput = +document.querySelector("#withdrawMoney").value;
     dispatch(withdrawMoney(withdrawInput || value));
    document.querySelector("#withdrawMoney").value = "";
  };

  const handleDeposit = (value) => {
    const depositInput = +document.querySelector("#depositMoney").value;
    dispatch(depositMoney(depositInput || value));
    document.querySelector("#depositMoney").value = "";
  };

  return (
    <div className="atm">
      <h2>Welcome to React Redux ATM</h2>
      <h4>Your current Balance is {balance} SEK </h4>
      <p>{status}</p>

      {/* The withdrawal part begins here */}
      <div className="withdraw">
        <h3>Withdraw</h3>
        <button
          className="amtBtn"
          onClick={() => {
            handleWithdrawal(100);
          }}
        >
          100
        </button>
        <button
          className="amtBtn"
          onClick={() => {
            handleWithdrawal(200);
          }}
        >
          200
        </button>
        <button
          className="amtBtn"
          onClick={() => {
            handleWithdrawal(500);
          }}
        >
          500
        </button>
        <button
          className="amtBtn"
          onClick={() => {
            handleWithdrawal(1000);
          }}
        >
          1000
        </button>
        <div className="labelDiv">
          <label htmlFor="withdrawMoney">Enter Amount: </label>
          <input type="number" id="withdrawMoney" />
          <button
            className="withDepBtn"
            onClick={() => {
              handleWithdrawal();
            }}
          >
            Withdraw
          </button>
        </div>
      </div>

      {/* The deposit part begins here */}

      <div className="deposit">
        <h3>Deposit</h3>

        <button
          className="amtBtn"
          onClick={() => {
            handleDeposit(100);
          }}
        >
          100
        </button>
        <button
          className="amtBtn"
          onClick={() => {
            handleDeposit(200);
          }}
        >
          200
        </button>
        <button
          className="amtBtn"
          onClick={() => {
            handleDeposit(500);
          }}
        >
          500
        </button>
        <button
          className="amtBtn"
          onClick={() => {
            handleDeposit(1000);
          }}
        >
          1000
        </button>
        <div className="labelDiv">
          <label htmlFor="depositMoney">Enter Amount: </label>
          <input type="number" id="depositMoney" />
          <button
            className="withDepBtn"
            onClick={() => {
              handleDeposit();
            }}
          >
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Atm;
