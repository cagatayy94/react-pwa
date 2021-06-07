import './App.css';
import BottomMenu from './layouts/BottomMenu';
import Capsule from './layouts/Capsule';
import Header from './layouts/Header';
import Loader from './layouts/Loader';
import Search from './layouts/Search';
import Sidebar from './layouts/Sidebar';

function App() {
  return (
    <div className="App">
      <Loader/>
      <Header/>
      <Search/>
      <Capsule/>
      <BottomMenu/>
      <Sidebar/>
    </div>
  );
}

export default App;
