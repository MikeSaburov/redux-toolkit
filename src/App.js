import './App.css';
import { Posts } from './components/rtat/Posts';
import { ReduxStateChange } from './components/rtc/ReduxStateChange';
import { Form } from './components/rtta/Form';
import { useSelector } from 'react-redux';
import { TodoItem } from './components/rtta/TodoItem';

function App() {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div className="app">
      <div className="stateChange ">
        <ReduxStateChange />
      </div>
      <div className="todoApp">
        <Form />

        {todos?.map((t) => (
          <TodoItem key={t.id} todo={t} />
        ))}
      </div>

      <div className="asyncThunk">
        <Posts />
      </div>
    </div>
  );
}

export default App;
