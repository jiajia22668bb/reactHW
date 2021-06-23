import {
  Box,
  Button,
  Card,
  CardContent,
  TableCell,
  TextField,
  TableRow,
  Table,
  TableHead,
} from '@material-ui/core';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AppContext } from "../../Context";
const CustomerListToolbar = (props) => {
  const navigate = useNavigate();
  const myFunction = () => { navigate('/register'); };
  const myFunction2 = () => { setProdId(''); };
  const { setProdId } = useContext(AppContext);
  
  return (
    <Formik
      initialValues={{
        password: '',
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string().max(255).required('Password is required')
      })}
      onSubmit={(value) => {
        setProdId(value.password);
        console.log(value.password)
      }}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values
      }) => (
        <form onSubmit={handleSubmit}>
          <Box {...props}>
            <Box
              sx={{
                display: 'flex',

              }}
            >
              基本資料/商品資料
            </Box>
            <Box sx={{ mt: 3 }}>
              <Card>
                <CardContent>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ width: '150px' }}>
                          <Box sx={{ maxWidth: 500 }}>
                            <Button
                              color="primary"
                              variant="contained"
                              onClick={myFunction}
                            >
                              新增
                              <img
                                src=
                                "/static/images/icon/plus.png"
                                width="20px"
                              />
                            </Button>
                          </Box>
                        </TableCell>
                        <TableCell style={{ width: '520px' }}></TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex-end', }} >
                            <TextField
                              width='40px'
                              label="請輸入產品編號"
                              margin="normal"
                              name="password"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              type="text"
                              value={values.password}
                              variant="outlined"
                            />
                          </Box>
                        </TableCell>
                        <TableCell style={{ width: '120px' }}>
                          <Button
                            color="primary"
                            variant="contained"
                            style={{ backgroundColor: 'rgb(14,171,95)' }}
                            type="submit"
                            variant="contained"
                          >
                            查詢
                            <img
                              src=
                              "/static/images/icon/serch.png"
                              width="20px"
                            />
                          </Button>
                        </TableCell>
                        <TableCell style={{ width: '120px' }}>
                          <Button
                            color="secondary"
                            variant="contained"
                            onClick={myFunction2}
                          >
                            重置
                            <img
                              src=
                              "/static/images/icon/reset.png"
                              width="20px"
                            />
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                  </Table>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </form>
      )
      }
    </Formik >
  );
}

export default CustomerListToolbar;
