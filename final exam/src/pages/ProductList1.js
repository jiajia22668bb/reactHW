import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import ProductListToolbar1 from 'src/components/product/ProductListToolbar1';
import ProductCard1 from 'src/components/product/ProductCard1';
import { useContext } from "react";
import { AppContext } from "../Context";

const ProductList1 = () => {
  const { users5, detail } = useContext(AppContext);
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
          <ProductListToolbar1 />
          <Box sx={{ pt: 3 }}>
            <ProductCard1 customers={users5} str={detail} />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ProductList1;
