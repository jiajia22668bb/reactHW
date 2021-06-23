import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';
import { AppContext } from "../Context";
import { useContext } from "react";



const Register1 = () => {
  const navigate = useNavigate();
  const { insertUser3, useravatar, users4 } = useContext(AppContext);
  console.log();
  const myfunction = (value) => {
    insertUser3({ OI: value.firstName, EI: value.lastName, CI: value.email, OD: value.password, descript: value.descript });
  };
  return (
    <>
      <Helmet>
        <title>Register | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              firstName: '',
              lastName: useravatar.id,
              password: '',
              descript: '',
            }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string().max(255).required('CustId is required'),
                firstName: Yup.string().max(255).required('OrderId is required'),
                lastName: Yup.string().max(255).required('EmpId is required'),
                password: Yup.string().max(255).required('OrderDate is required'),

              })
            }
            onSubmit={(value) => {
              myfunction(value);
              navigate('/app/products', { replace: true });

            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    insert salesorder
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.firstName && errors.firstName)}
                  fullWidth
                  helperText={touched.firstName && errors.firstName}
                  label="OrderId"
                  margin="normal"
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  helperText={touched.lastName && errors.lastName}
                  label="EmpId"
                  margin="normal"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  select
                  SelectProps={{
                    native: true
                  }}
                  placeholder="Id"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin="normal"
                >
                  <option></option>
                  {users4.map(({ CId, CN }) => {
                    return (
                      <option key={CId} value={CId}>{CId}  {CN}</option>
                    )
                  })}
                </TextField>
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="date"
                  value={values.password}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Descript"
                  margin="normal"
                  name="descript"
                  onChange={handleChange}
                  type="text"
                  value={values.descript}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    insert
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Register1;
