import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import { Provider } from "./Context";
import { Actions } from "./Actions";
import { Actions2 } from "./Actions2";
import { Actions3 } from "./Actions3";
import { Actions4 } from "./Actions4";
import { Actions5 } from "./Actions5";
import { Actions6 } from "./Actions6";
import { useState } from 'react';

const App = () => {
  const routing = useRoutes(routes);
  const data = Actions();
  const data2 = Actions2();
  const data3 = Actions3();
  const data4 = Actions4();
  const data5 = Actions5();
  const data6 = Actions6();
  const [useravatar, setUseravatar] = useState({ id: '1', name: '丁組長', job: '助理工程師', dn: '維修部' });
  const [str, setStr] = useState();
  const [detail, setDetail] = useState();
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const[prodid, setProdId] = useState();
  const avatar = {
    ...data,
    useravatar,
    setUseravatar,
    ...data2,
    ...data3,
    setStr,
    str,
    ...data4,
    ...data5,
    detail,
    setDetail,
    ...data6,
    year,
    month,
    setYear,
    setMonth,
    prodid,
    setProdId,
  }
  return (
    <Provider value={avatar} >
      <ThemeProvider theme={theme} >
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    </Provider>
  );
};

export default App;
