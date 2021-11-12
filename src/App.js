import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './MyRoutes';
import userAPI from '../services/userAPI';


class App extends React.Component {
  render() {
    constructor(props) {
      super();
      this.state = {
        cardName: '',
        // isButtonDisabled: true,
      }
    };

    changeInput = ({ target }) => {
      const { name } = target;
      this.setState({ value: name }, () => {
        value > 3 ?
          this.setState({ isButtonDisabled: false })
          : this.setState({ isButtonDisabled: true })
      });
    };
  };

  // isButtonDisabled = (event) => {
  //   event.preventDefault();
  //   this.setState()

  // };

  return(
    <div>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>

  );
}

export default App;
