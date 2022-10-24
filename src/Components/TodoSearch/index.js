import "./TodoSearch.css"

function TodoSearch(props) {
  const {searchValue,setSearchValue}=props
  function searchTask(e) {
    const inputValue = e.target.value
    setSearchValue(inputValue)
  }
  return (
    <>
    <input
      placeholder='find your task...'
      className='TodoSearch'
      onChange={searchTask}
      value={searchValue}
    ></input>
    </>
  )
}

export {TodoSearch}