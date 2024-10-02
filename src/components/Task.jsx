// Component
// props = propriedades
function Task(props) {
    // console.log(props)
    return (
      <>
        <ul>
            {props.tasks.map((task) => {
                <li key={task.id}></li>
            })}
        </ul>
      </>
    )
      
  }
  
  export default Task; //Exportar component