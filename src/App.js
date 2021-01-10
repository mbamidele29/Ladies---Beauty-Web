import Nav from './components/Nav';
import Catalog from './components/Catalog';
import './css/App.css';

import { data } from './utils/data';
import Accessories from './components/Accessories';

function App() {
  return (
    <div className="main">
      <Nav />
      <div className="mart">
        <Catalog products={data} />
        <Accessories product={data[0]} />
      </div>
    </div>
  );
}

export default App;
