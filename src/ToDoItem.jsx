import './ToDoItem.css'

const ToDoItem = (props) => {
    return( 
        <>
          <div className="list-item">👉
            <p>{props.completed ? 'Listo': 'Pendiente'}</p>
          <p>{props.text}</p>
          <span className='close-btn'>X</span>
          </div>  
        </>
    );
}

export default ToDoItem