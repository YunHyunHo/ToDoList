import './App.css';
import TodoHead from './component/TodoHead';
import TodoTemplate from './component/TodoTemplate';
import TodoList from './component/TodoList'
import TodoCreate from './component/TodoCreate';


function App() {
  return (
    <div className="App">
      {/* TodoTemplate - 레이아웃을 설정 */}
      <TodoTemplate>
        {/* TodoHead 날짜 요일 할 일 */}
        <TodoHead></TodoHead>
        <TodoList></TodoList>
        <TodoCreate></TodoCreate>
      </TodoTemplate>
      {/* TodoList 할 일에 대한 정보 */}
      {/* TodoItem 체크박스 */}
      {/* TodoCreate 추가 */}
    </div>
  );
}

export default App;
