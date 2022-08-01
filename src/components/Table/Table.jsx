import {
    TableWrapper,
    TableMain,
    TableHead,
    TableBody,
    TableRow,
    TotalSum,
    TotalSumKey,
    TotalExpValue,
    TotalIncValue
} from "./Table.styled";

const Table = ({ data, expenses, income }) => {
    console.log(data);
    return (
        <TableWrapper>
            {/* У цьому місці буде потрібно додати інпути для фільтрації транзакцій за датами */}
            <TableMain>
                <TableHead>
                        <th>
                            Category
                        </th>
                        <th>
                            Sum
                        </th>
                </TableHead>
                <TableBody>
                    {
                        data.map(item => {
                            console.log(item);
                            return (
                            <TableRow>
                                    <td> {item.expense} </td>
                                <td> {Number(item.value).toFixed(2)} </td>
                            </TableRow>
                        )})
                    }
                </TableBody>
            </TableMain>
            <TotalSum>
                <TotalSumKey>Expenses:</TotalSumKey>
                <TotalExpValue>{Number(expenses).toFixed(2)}</TotalExpValue>
            </TotalSum>
            <TotalSum>
                <TotalSumKey>Income:</TotalSumKey>
                <TotalIncValue>{Number(income).toFixed(2)}</TotalIncValue>
            </TotalSum>

        </TableWrapper>
    )
};

export default Table;