import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { isEmpty } from 'lodash';


const ProductCard2 = ({ customers, year, month, ...rest }) => {
  const a = month + '-' + year;
  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  客戶名稱
                </TableCell>
                <TableCell>
                  客戶代號
                </TableCell>
                <TableCell>
                  總銷售金額
                </TableCell>
                <TableCell>
                  總利潤
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map(({ seq3, CtId, CtNe, OrDe, amount, profit }) => {
                return ((isEmpty(year) && isEmpty(month)) === true ? (
                  null
                ) :
                  ((OrDe.search(a) != -1) === true ?
                    (<TableRow
                      hover
                      key={seq3}>
                      <TableCell>
                        {CtId}
                      </TableCell>
                      <TableCell>
                        {CtNe}
                      </TableCell>
                      <TableCell>
                        {amount}
                      </TableCell>
                      <TableCell>
                        {profit}
                      </TableCell>
                    </TableRow>) :
                    (null)));
              })}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>

    </Card>
  );
}

export default ProductCard2;
