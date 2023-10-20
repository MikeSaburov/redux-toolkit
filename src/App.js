import './App.css';
import { Posts } from './components/rtat/Posts';
import { ReduxStateChange } from './components/rtc/ReduxStateChange';
import { Form } from './components/rtta/Form';

function App() {
  return (
    <div className="app">
      <div className="stateChange ">
        <ReduxStateChange />
      </div>
      <div className="todoApp">
        <Form />
      </div>

      <div className="asyncThunk">
        <Posts />
      </div>
    </div>
  );
}

export default App;
