import './App.css';

import Navbar from './components/navbar/navbar';
import Container from '@material-ui/core/Container';

import Main from './pages/main/main';
function App() {
  return (
    <div>
      <Container className="App">
        <Main/>
      </Container>
    </div>
  );
}

export default App;
