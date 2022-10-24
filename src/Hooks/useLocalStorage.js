import React from 'react'

function useLocalStorage(itemName,defaultValue) {
    const localStorageVersion = itemName
    const localStorageItem = localStorage.getItem(localStorageVersion)
    let parsedItem
    if (!localStorageItem) {
      localStorage.setItem(localStorageVersion,defaultValue)
      parsedItem=defaultValue
    } else {
      parsedItem=JSON.parse(localStorageItem)
    }
    const [item,setItem] = React.useState(parsedItem)
    function saveItem(newItem) {
      const strItem=JSON.stringify(newItem)
      localStorage.setItem(localStorageVersion,strItem)
      setItem(newItem)
    }
    return [item,saveItem]
  }

export {useLocalStorage}