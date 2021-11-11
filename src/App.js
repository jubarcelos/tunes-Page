import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './MyRoutes';

class App extends React.Component {
  render() {
    return (
      <>
        <p>TrybeTunes é nós</p>
        <BrowserRouter>
          <MyRoutes />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
