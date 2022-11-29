import './App.css';
import CallbackHook from './components/CallbackHook';
import CustomHook from './components/CustomHook';
import MemoHook from './components/MemoHook';
import ReducerHook from './components/ReducerHook';

function App() {
  return (
    <div className="App">
      {/* <MemoHook/> */}
      <CallbackHook/>
      {/* <CustomHook/> */}
      {/* <ReducerHook/> */}
    </div>
  );
}

export default App;
