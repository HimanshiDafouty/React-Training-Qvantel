import { Link } from 'react-router-dom';

const accounts = [
  { id: 1, name: 'Savings Account' },
  { id: 2, name: 'Checking Account' },
  { id: 3, name: 'Credit Card Account' }
];

const Accounts = () => (
  <div>
    <h1>Your Accounts</h1>
    <ul>
      {accounts.map(account => (
        <li key={account.id}>
          <Link to={`/transactions/${account.id}`}>{account.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Accounts;
