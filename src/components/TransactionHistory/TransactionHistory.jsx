import PropTypes from 'prop-types';
import {Tab, TableRow, TableData, TableHeader} from './TransactionHistory.stelyd'


const TransactionHistory = ({ items }) => {
  return (
    <Tab class="transaction-history">
      <thead>
            <TableRow>
               <TableHeader>Type</TableHeader>
               <TableHeader>Amount</TableHeader>
               <TableHeader>Currency</TableHeader>
            </TableRow>
         </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
          <TableData>{type}</TableData>
          <TableData>{amount}</TableData>
          <TableData>{currency}</TableData>
        </TableRow>
          )
        })}
      </tbody>
    </Tab>
  )
}


TransactionHistory.propTypes = {
   items: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         type: PropTypes.string.isRequired,
         amount: PropTypes.string.isRequired,
         currency: PropTypes.string.isRequired,
      })
   ),
}
export default TransactionHistory;