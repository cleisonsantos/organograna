import logo from './logo.svg'
import { Logo } from './styles'
import GlobalStyle from './globalStyles'
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
    <GlobalStyle />
        <Logo src={logo} />
    </Fragment>
  );
}

export default App;
