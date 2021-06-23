import { useState } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
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
import { useContext } from "react";
import { AppContext } from "../../Context";
import { isEmpty } from 'lodash';


const CustomerListResults = ({ customers, prodid, ...rest }) => {
  const { deleteUser2, editMode2, updateUser2, cancelEdit2 } = useContext(AppContext);
  const [newData, setNewData] = useState({});
  const saveBtn = () => {
    updateUser2(newData);
  };
  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };
  const enableEdit = (PId, PN, UP, Cost) => {
    setNewData({ PId, PN, UP, Cost });
    editMode2(PId);
  };
  console.log(prodid)
  const myFunction = (PI) => { deleteUser2(PI) };
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
                  品號
                </TableCell>
                <TableCell>
                  品名
                </TableCell>
                <TableCell>
                  定價
                </TableCell>
                <TableCell>
                  成本
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map(({ PId, PN, UP, Cost, isEditing }) => {
                return isEmpty(prodid) === true ? (isEditing === true ? (
                  <TableRow
                    hover
                    key={PId}
                  >
                    <TableCell>
                      <Button color="primary" onClick={() => saveBtn()}>
                        Save
                      </Button>
                      <Button
                        onClick={() => cancelEdit2(PId)}
                      >
                        Cancel
                      </Button>
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={PId}
                        readOnly
                        onChange={(e) => updateNewData(e, "PId")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={PN}
                        onChange={(e) => updateNewData(e, "PN")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={UP}
                        onChange={(e) => updateNewData(e, "UP")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={Cost}
                        onChange={(e) => updateNewData(e, "Cost")}
                      />
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow
                    hover
                    key={PId}
                  >
                    <TableCell>
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex'
                        }}
                      >
                        <Button
                          onClick={() => myFunction(PId)}
                        >
                          <img
                            src="/static/images/icon/delete.jpg"
                            width="20px"
                          />
                        </Button>
                        <Button
                          onClick={() => enableEdit(PId, PN, UP, Cost)}
                        >
                          <img
                            src="/static/images/icon/modify.jpg"
                            width="20px"
                          />
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {PId}
                    </TableCell>
                    <TableCell>
                      {PN}
                    </TableCell>
                    <TableCell>
                      {UP}
                    </TableCell>
                    <TableCell>
                      {Cost}
                    </TableCell>
                  </TableRow>
                )
                ) : ((PId.search(prodid) != -1) === true ? (isEditing === true ? (
                  <TableRow
                    hover
                    key={PId}
                  >
                    <TableCell>
                      <Button color="primary" onClick={() => saveBtn()}>
                        Save
                      </Button>
                      <Button
                        onClick={() => cancelEdit2(PId)}
                      >
                        Cancel
                      </Button>
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={PId}
                        readOnly
                        onChange={(e) => updateNewData(e, "PId")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={PN}
                        onChange={(e) => updateNewData(e, "PN")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={UP}
                        onChange={(e) => updateNewData(e, "UP")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={Cost}
                        onChange={(e) => updateNewData(e, "Cost")}
                      />
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow
                    hover
                    key={PId}
                  >
                    <TableCell>
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex'
                        }}
                      >
                        <Button
                          onClick={() => myFunction(PId)}
                        >
                          <img
                            src="/static/images/icon/delete.jpg"
                            width="20px"
                          />
                        </Button>
                        <Button
                          onClick={() => enableEdit(PId, PN, UP, Cost)}
                        >
                          <img
                            src="/static/images/icon/modify.jpg"
                            width="20px"
                          />
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {PId}
                    </TableCell>
                    <TableCell>
                      {PN}
                    </TableCell>
                    <TableCell>
                      {UP}
                    </TableCell>
                    <TableCell>
                      {Cost}
                    </TableCell>
                  </TableRow>
                )
                ) : (null));
              })}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>

    </Card>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerListResults;
