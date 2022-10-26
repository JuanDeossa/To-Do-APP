import "./CreateTodoButton.css"

function CreateTodoButton(props) {
  function toggleModal() {
    const {openModal,setOpenModal}=props
    if (!!openModal) {
      setOpenModal(false)
    } else {
      setOpenModal(true)
    }
  }
  return (
    <button
    className='CreateTodoButton'
    onClick={()=>toggleModal()}
    >+</button>
  )
}

export {CreateTodoButton}