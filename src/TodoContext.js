import React, {useReducer, createContext, useContext, useRef} from 'react'

const initialTodos = [
  
];

function todoReducer(state, action){
  // action.type이 CREATE/TOGGLE/REMOVE 일때 실행
  switch( action.type ){
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      // 에러 메세지
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext()

export function TodoProvider({ children }){
  console.log(children)
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  // 새로운 항목을 추가할때 필요한 고유의 id값
  const nextId = useRef(5)
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

// custom hook / TodoProvider로 App안에 있는 컴포넌트들이  감싸져있지 않으면 에러 메세지

export function useTodoState(){
  const context = useContext(TodoStateContext);
  if(!context){
    throw new Error('Cannot find TodoProvider')
  }
  return context
}

export function useTodoDispatch(){
  const context = useContext(TodoDispatchContext);
  if(!context){
    throw new Error('Cannot find TodoProvider')
  }
  return context
}

export function useTodoNextId(){
  const context = useContext(TodoNextIdContext);
  if(!context){
    throw new Error('Cannot find TodoProvider')
  }
  return context
}