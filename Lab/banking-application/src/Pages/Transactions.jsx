import { useParams } from 'react-router-dom';

const transactions = {
  1: [{ id: 1, amount: 100, date: '2024-07-01' }, { id: 2, amount: -50, date: '2024-07-05' }],
  2: [{ id: 3, amount: 200, date: '2024-07-10' }],
  3: [{ id: 4, amount: -30, date: '2024-07-15' }]
};

const Transactions = () => {
  const { id } = useParams();
  const txns = transactions[id] || [];

  return (
    <div>
      <h1>Transactions for Account ID: {id}</h1>
      <ul>
        {txns.map(txn => (
          <li key={txn.id}>
            {txn.date}: {txn.amount} INR
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
