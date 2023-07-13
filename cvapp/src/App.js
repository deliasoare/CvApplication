import logo from './logo.svg';
import './styles/styles.scss';
import Form from './components/form/form';
import { useState } from 'react';

function App() {
  const [info, setInfo] = useState([]);
  return (
    <Form info={info} />
  );
}

export default App;
