import { Helmet } from 'react-helmet';
import {
  Box,
  Container,

} from '@material-ui/core';
import ProductListToolbar from 'src/components/product/ProductListToolbar';
import ProductCard from 'src/components/product/ProductCard';
import { useContext } from "react";
import { AppContext } from "../Context";

const ProductList = () => {
  const { users3, str } = useContext(AppContext);
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
          <ProductListToolbar />
          <Box sx={{ pt: 3 }}>
            <ProductCard customers={users3} str={str} />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ProductList;
