import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
} from '@material-ui/core';
import ProductListToolbar2 from 'src/components/product/ProductListToolbar2';
import ProductCard2 from 'src/components/product/ProductCard2';
import { useContext } from "react";
import { AppContext } from "../Context";
const Account = () => {
  const { users6, year, month } = useContext(AppContext);
  return (
    <>
      <Helmet>
        <title>Products | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <ProductListToolbar2 />
          <Box sx={{ pt: 3 }}>
            <ProductCard2 customers={users6} year={year} month={month} />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Account;
