import React from 'react'

function useLocalStorage(itemName,defaultValue) {
  const localStorageVersion = itemName
  const [error,setError] = React.useState(false)
  const [loading,setLoading] = React.useState(true)
  const [item,setItem] = React.useState(defaultValue)
    React.useEffect(()=>{
      setTimeout(()=>{
        try {
          const localStorageItem = localStorage.getItem(localStorageVersion)
          let parsedItem
          if (!localStorageItem) {
            localStorage.setItem(localStorageVersion,defaultValue)
            parsedItem=defaultValue
          } else {
            parsedItem=JSON.parse(localStorageItem)
          }
          setItem(parsedItem)
          setLoading(false)
        } catch (error) {
          setError(error)
        }
      },1000)
    })
    function saveItem(newItem) {
      try {
        const strItem=JSON.stringify(newItem)
        localStorage.setItem(localStorageVersion,strItem)
        setItem(newItem)
      } catch (error) {
        setError(error)
      }
    }
    return {item,saveItem,loading,error}
  }

export {useLocalStorage}