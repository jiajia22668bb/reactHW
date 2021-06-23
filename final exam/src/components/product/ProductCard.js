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
import { isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({ customers, str, ...rest }) => {
  const { deleteUser3, editMode3, updateUser3, cancelEdit3, setDetail } = useContext(AppContext);
  const navigate = useNavigate();
  const [newData, setNewData] = useState({});
  const saveBtn = () => {
    updateUser3(newData);
  };
  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };
  const enableEdit = (seq, OI, EI, CI, OD, descript) => {
    setNewData({ seq, OI, EI, CI, OD, descript });
    editMode3(seq);
  };
  const myFunction = (PI) => { deleteUser3(PI) };
  const myFunction2 = (OI) => { setDetail(OI); navigate('/app/products1'); };

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
                  員工代號
                </TableCell>
                <TableCell>
                  客戶代號
                </TableCell>
                <TableCell>
                  訂貨日期
                </TableCell>
                <TableCell>
                  備註
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map(({ seq, OI, EI, CI, OD, descript, isEditing }) => {
                return isEmpty(str) === true ? (isEditing === true ? (
                  <TableRow
                    hover
                    key={seq}
                  >
                    <TableCell>
                      <Button color="primary" onClick={() => saveBtn()}>
                        Save
                      </Button>
                      <Button
                        onClick={() => cancelEdit3(seq)}
                      >
                        Cancel
                      </Button>
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={seq}
                        readOnly
                        style={{ width: '25px' }}
                        onChange={(e) => updateNewData(e, "seq")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={OI}
                        readOnly
                        onChange={(e) => updateNewData(e, "OI")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={EI}
                        onChange={(e) => updateNewData(e, "EI")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={CI}
                        onChange={(e) => updateNewData(e, "CI")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={OD}
                        onChange={(e) => updateNewData(e, "OD")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={descript}
                        onChange={(e) => updateNewData(e, "descript")}
                      />
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow
                    hover
                    key={seq}
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
                          onClick={() => myFunction(seq)}
                        >
                          <img
                            src="/static/images/icon/delete.jpg"
                            width="20px"
                          />
                        </Button>
                        <Button
                          onClick={() => enableEdit(seq, OI, EI, CI, OD, descript)}
                        >
                          <img
                            src="/static/images/icon/modify.jpg"
                            width="20px"
                          />
                        </Button>
                        <Button
                          onClick={() => myFunction2(OI)}
                        >
                          <img
                            src="/static/images/icon/watch.png"
                            width="20px"
                          />
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {seq}
                    </TableCell>
                    <TableCell>
                      {OI}
                    </TableCell>
                    <TableCell>
                      {EI}
                    </TableCell>
                    <TableCell>
                      {CI}
                    </TableCell>
                    <TableCell>
                      {OD}
                    </TableCell>
                    <TableCell>
                      {descript}
                    </TableCell>
                  </TableRow>
                )) : ((OI.search(str) != -1) === true ? (isEditing === true ? (
                  <TableRow
                    hover
                    key={seq}
                  >
                    <TableCell>
                      <Button color="primary" onClick={() => saveBtn()}>
                        Save
                      </Button>
                      <Button
                        onClick={() => cancelEdit3(seq)}
                      >
                        Cancel
                      </Button>
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={seq}
                        readOnly
                        style={{ width: '25px' }}
                        onChange={(e) => updateNewData(e, "seq")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={OI}
                        readOnly
                        onChange={(e) => updateNewData(e, "OI")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={EI}
                        onChange={(e) => updateNewData(e, "EI")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={CI}
                        onChange={(e) => updateNewData(e, "CI")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={OD}
                        onChange={(e) => updateNewData(e, "OD")}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        defaultValue={descript}
                        onChange={(e) => updateNewData(e, "descript")}
                      />
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow
                    hover
                    key={seq}
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
                          onClick={() => myFunction(seq)}
                        >
                          <img
                            src="/static/images/icon/delete.jpg"
                            width="20px"
                          />
                        </Button>
                        <Button
                          onClick={() => enableEdit(seq, OI, EI, CI, OD, descript)}
                        >
                          <img
                            src="/static/images/icon/modify.jpg"
                            width="20px"
                          />
                        </Button>
                        <Button
                          onClick={() => myFunction2()}
                        >
                          <img
                            src="/static/images/icon/watch.png"
                            width="20px"
                          />
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {seq}
                    </TableCell>
                    <TableCell>
                      {OI}
                    </TableCell>
                    <TableCell>
                      {EI}
                    </TableCell>
                    <TableCell>
                      {CI}
                    </TableCell>
                    <TableCell>
                      {OD}
                    </TableCell>
                    <TableCell>
                      {descript}
                    </TableCell>
                  </TableRow>
                )) : (null));
              })}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>

    </Card>
  );
}

export default ProductCard;
