import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import '../Components/appcontent.css';

const AppContent = () => {
  const toDoList = useSelector((state) => state.todo.todoList);

  const initialFilterStatus = useSelector((state) => state.todo.filterStatus); 

  const sortedTodoList = [...toDoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter(item => {
    if (initialFilterStatus === 'all') {
      return true;
    }
    return item.status === initialFilterStatus;
  });

  return (
    <div className='content__wrapper'>
      {filteredTodoList && filteredTodoList.length > 0
        ? filteredTodoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
        : null}
    </div>
  );
};

export default AppContent;

