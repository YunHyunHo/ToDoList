import './App.css';
import TodoHead from './component/TodoHead';
import TodoTemplate from './component/TodoTemplate';
import TodoList from './component/TodoList'
import TodoCreate from './component/TodoCreate';
import {TodoProvider} from './TodoContext'


function App() {
  return (
    <div className="App">
      <TodoProvider>
        {/* TodoTemplate - 레이아웃을 설정 */}
        <TodoTemplate>
          {/* TodoHead 날짜 요일 할 일 */}
          <TodoHead></TodoHead>
          {/* TodoList 할 일에 대한 정보 */}
          <TodoList></TodoList>
          {/* TodoCreate 추가 */}
          <TodoCreate></TodoCreate>
        </TodoTemplate>
      </TodoProvider>
    </div>
  );
}

export default App;
