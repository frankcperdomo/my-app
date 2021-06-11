import ExpenseDate from './ExpenseDate';
import Card from './Card';
import "./ExpenseItem.css";

function ExpenseItem(props) {

  // function clickHandler(){};
  const clickHandler = () =>{
    console.log('Clicked!!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
