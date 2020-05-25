import React, { Component } from 'react';
import { Router, Switch } from 'react-router-dom';
import { history } from './_helpers/history';
import PublicRoute from './_routers/PublicRoute';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Main from './component/main';
import ProductDetails from './component/productdetails';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#4285F4' },
    secondary: { main: '#4285F4' },
    danger: { main: '#ac2925' }
  },
});

class App extends Component {
  render() {
    return (
      <div className="h-100">
        <MuiThemeProvider theme={theme}>
          <Router history={history} >
            <Switch>
              <PublicRoute exact path="/" component={Main} />
              <PublicRoute exact path="/product_operation/:id" component={ProductDetails} />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default App
