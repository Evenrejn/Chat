import './App.css';
import { Message } from './component/message/Message';

function App() {
  return (
    <div className="App">
      <Message message="some text from props" />
    </div>
  );
}

export default App;
