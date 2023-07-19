import logo from './logo.svg';
import './styles/styles.scss';
import Header from './components/page/header';
import Main from './components/page/main';
import Footer from './components/page/footer';

import { useState } from 'react';

function App() {
  const [info, setInfo] = useState([]);

  return (
      <div className="container">
        <Header />
        <Main info={info} setInfo={setInfo} />
        <Footer />
      </div>
  );
}

export default App;
