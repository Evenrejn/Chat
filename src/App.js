import './App.css';
import { MessageContainer } from './component/message/MessageContainer';
import VirtualizedList from './component/MessageList';

function App() {
  return (
    <div className="App">
      <VirtualizedList />
      <MessageContainer />
    </div>
  );
}

export default App;
