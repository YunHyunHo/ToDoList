import styled from "styled-components"
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";


const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList(){
  const todos = useTodoState();
  return(
    // {/* TodoItem 체크박스 */}
    // {/* text 할 일에 대한 정보 / done 체크에 대한 Bollean */}
    <TodoListBlock>
      {todos.map((todo) =>(
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
        ))}
    </TodoListBlock>
  )
}
export default TodoList