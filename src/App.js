import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import MyRoutes from './MyRoutes';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <MyRoutes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
