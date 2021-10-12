import React from 'react';
import SwitchButton from './Button';
import Header from './Header';
import Main from './Main';
import { UserProvider } from './userContext';

class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    let { isDarkMode } = this.state;
    return (
      <div className={`bg ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
        <Header />
        <UserProvider value={isDarkMode}>
          <Main />
        </UserProvider>
        <SwitchButton isDarkMode={isDarkMode} changeMode={this.changeMode} />
      </div>
    );
  }
}

export default App;
