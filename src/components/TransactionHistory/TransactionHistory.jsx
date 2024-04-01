import css from '../TransactionHistory/TransactionHistory.module.css';

export default function TransitionHistory({ items }) {
    return (
  <table className={css.table}>
   <thead className={css.title}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
   </thead>

   <tbody>
      {items.map((item) => (
      <tr className={css.line} key={item.id}>
      <td className={css.column}>{item.type}</td>
      <td className={css.column}>{item.amount}</td>
      <td className={css.column}>{item.currency}</td>
      </tr>))}

   </tbody>
  </table>
    )
}