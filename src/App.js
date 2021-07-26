import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

import Container from '@material-ui/core/Container';

import { teamStorageUpdate } from "./store/modules/team/action";
import { projectStorageUpdate } from "./store/modules/project/action";

import Main from './pages/main/main';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( teamStorageUpdate() );
    dispatch( projectStorageUpdate() );
  })

  return (
      <Container className="App">
        <Main/>
      </Container>
  );
}

export default App;
