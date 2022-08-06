import {
    TableWrapper,
    TableMain,
    TableHead,
    TableHeadRow,
    TableBody,
    TableRow,
    TableCell,
    StatusItem,
    TotalSum,
    TotalSumKey,
    TotalExpValue,
    TotalIncValue
} from "./Table.styled";

const Table = ({ data, expenses, income }) => {
    console.log(data);
    
    return (
        <TableWrapper>
            <TableMain>
                <TableHead>
                    <TableHeadRow>
                        <th>
                            Category
                        </th>
                        <th>
                            Sum
                        </th>
                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {
                        data.map(item => {
                            // console.log(item);
                            return (
                                <TableRow key={ item.expense }>
                                    <TableCell>
                                        <StatusItem
                                            backgroundColor={item.color}
                                        />
                                        {item.expense}
                                    </TableCell>
                                    <TableCell>
                                        {Number(item.value).toFixed(2)}
                                    </TableCell>
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