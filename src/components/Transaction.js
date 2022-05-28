import Container from './Container';

const Transaction = (props) => {
  return (
    <Container cssClass={`transaction ${props.item}`}>
      <h3 className="transaction-title">Transactions</h3>
      <h4 className="transaction-amount">{props.amount}</h4>
      <p className="transaction-period">{props.period}</p>
    </Container>
  );
};

export default Transaction;
