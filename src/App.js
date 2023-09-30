import './App.css';
import ToDoCounter from './ToDoCounter';
import ToDoSearch from './ToDoSearch';
import ToDoList from './ToDoList';
import CreateToDoButton from './CreateToDoButton';
import ToDoItem from './ToDoItem';

const allTodos = [
  {
    text: 'Cortar cebolla',
    completed: true,
  },
  {
    text: 'Tomar el curso de intro a React',
    completed: false,
  },
  {
    text: 'Llorar con la llorona',
    completed: false,
  },
  ]
function App() {
  return (
    <>
      <ToDoCounter completed="2" total="5" />
      <ToDoSearch />
      
      <ToDoList>
        {allTodos.map(todo => (
          <ToDoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </ToDoList>

      <CreateToDoButton />

    </>
  );
}

export default App;
