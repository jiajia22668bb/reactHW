import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from '@material-ui/core';
import { useContext, useState } from "react";
import { AppContext } from "../../Context";
import PerfectScrollbar from 'react-perfect-scrollbar';

const ProductCard = ({ customers, str, ...rest }) => {
  const { deleteUser5, editMode5, updateUser5, cancelEdit5 } = useContext(AppContext);
  const [newData, setNewData] = useState({});
  const saveBtn = () => {
    updateUser5(newData);
  };
  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };
  const enableEdit = (seq2, OId2, PI2, qty, discount) => {
    setNewData({ seq2, OId2, PI2, qty, discount });
    editMode5(seq2);
  };
  const myFunction = (PI) => { deleteUser5(PI) };
  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  執行
                </TableCell>
                <TableCell>
                  序號
                </TableCell>
                <TableCell>
                  訂單編號
                </TableCell>
                <TableCell>
                  產品代號
                </TableCell>
                <TableCell>
                  數量
                </TableCell>
                <TableCell>
                  折扣
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map(({ seq2, OId2, PI2, qty, discount, isEditing }) => {
                return str === OId2 ? (isEditing === true ? (
                  <TableRow
                    hover
                    key={seq2}
                  >
                    <TableCell>
                      <Button color="primary" onClick={() => saveBtn()}>
                        Save
                      </Button>
                      <Button
                        onClick={() => cancelEdit5(seq2)}
                      >
                        Cancel
                      </Button>
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={seq2}
                        readOnly
                        style={{ width: '25px' }}
                        onChange={(e) => updateNewData(e, "seq2")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={OId2}
                        readOnly
                        onChange={(e) => updateNewData(e, "OId2")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={PI2}
                        onChange={(e) => updateNewData(e, "PI2")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={qty}
                        onChange={(e) => updateNewData(e, "qty")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={discount}
                        onChange={(e) => updateNewData(e, "discount")}
                      />
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow
                    hover
                    key={seq2}
                  >
                    <TableCell
                      style={{ width: '200px' }}
                    >
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex'
                        }}
                      >
                        <Button
                          onClick={() => myFunction(seq2)}
                        >
                          <img
                            src="/static/images/icon/delete.jpg"
                            width="20px"
                          />
                        </Button>
                        <Button
                          onClick={() => enableEdit(seq2, OId2, PI2, qty, discount)}
                        >
                          <img
                            src="/static/images/icon/modify.jpg"
                            width="20px"
                          />
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {seq2}
                    </TableCell>
                    <TableCell>
                      {OId2}
                    </TableCell>
                    <TableCell>
                      {PI2}
                    </TableCell>
                    <TableCell>
                      {qty}
                    </TableCell>
                    <TableCell>
                      {discount}
                    </TableCell>
                  </TableRow>
                )) : (null)
              })}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>

    </Card>
  );
}

export default ProductCard;
