import { Provider } from "react-redux";
import './App.css';

import store from "./store"
import Container from '@material-ui/core/Container';

import Main from './pages/main/main';
function App() {
  return (
    <Provider store={store}>
      <Container className="App">
        <Main/>
      </Container>
    </Provider>
  );
}

export default App;
