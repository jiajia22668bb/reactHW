import {
  Box,
  Button,
  Card,
  CardContent,
  TableCell,
  Table,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';


const ProductListToolbar1 = (props) => {
  const navigate = useNavigate();
  const myFunction = () => { navigate('/register2'); };
  const myFunction2 = () => { navigate('/app/products'); };
  return (

    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        訂單
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <div>
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
                      <Box
                        sx={{
                          float: 'right'
                        }}>
                        <Button
                          style={{ backgroundColor: 'red' }}
                          variant="contained"
                          onClick={myFunction2}
                        >
                          返回
                          <img
                            src=
                            "/static/images/icon/back.png"
                            width="20px"
                          />
                        </Button>
                      </Box>
                    </div>
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )


}

export default ProductListToolbar1;
