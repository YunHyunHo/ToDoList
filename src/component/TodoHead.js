import React from 'react';
import styled from "styled-components";
import {useTodoState} from "../TodoContext"

const TodoHeadBlock = styled.div`
padding-top: 48px;
padding-left: 32px;
padding-right: 32px;
padding-bottom: 24px;
border-bottom: 1px solid #e9ecef;
h1 {
  margin: 0;
  font-size: 36px;
  color: #343a40;
}
.day {
  margin-top: 4px;
  color: #868e96;
  font-size: 21px;
}
.tasks-left {
  color: #20c997;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
}
`;

function TodoHead(){
  const todos = useTodoState();
  // todos에 있는 done === false 인것만 꺼내온다.
  const undeoneTasks = todos.filter(todo => !todo.done);
  // 현재 날짜 시간을 가지고옴
  const today = new Date();
  // 현재 날짜, 시간 표기
  const dataSting = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  // 요일 표기
  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long'
  })
  return(
    <TodoHeadBlock>
      {/* 현재 날짜  */}
      <h1>{dataSting}</h1>
      <div className="day">{dayName}</div>
      {/* 체크된 개수만큼 index값 */}
      <div className="tasks-left">할 일 {undeoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  )
}

export default TodoHead