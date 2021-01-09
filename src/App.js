import Nav from './components/Nav';
import Catalog from './components/Catalog';
import './css/App.css';

import { data } from './utils/data';

function App() {
  return (
    <div className="main">
      <Nav />
      <Catalog products={data} />
    </div>
  );
}

export default App;
