import React, { useEffect, useState, createContext } from 'react';
import {data} from './data';

export const DataContext = createContext()

export const DataProvider = (props) => {
  const [items, setItems] = useState(data)
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    capacity: 1,
    type: "all",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  })

  // useEffect(() => {
  //   setItems(data)
  // }, [])

  console.log(items);
  
  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url)
      let room = {...item.fields, images, id};
      return room;
    })
    return tempItems
  }
 console.log(formatData(items))

  useEffect(() => {
   let rooms = formatData(items)
   let featuredRooms = rooms.filter(room => room.featured === true)
   let maxPrice = Math.max(...rooms.map((item) => item.price))
   let maxSize = Math.max(...rooms.map(item => item.size))
   setState({
     rooms,
     featuredRooms,
     sortedRooms: rooms,
     loading: false,
     price: maxPrice,
     maxPrice,
     maxSize
   })
  }, [items])

  console.log(state.featuredRooms, state.rooms);

  const getRoom = (slug) => {
  let tempRooms = [...state.rooms];
  const room = tempRooms.find((room) => room.slug === slug);
  return room;
  }

  const filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = state

    //all the rooms
    let tempRooms = [...rooms]

    //transform values
    capacity = parseInt(capacity)
    price = parseInt(price)

    //filter by type
    if(type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type)
    }

    //filter by capacity
    if(capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity)
    }

    //filter by price
    tempRooms = tempRooms.filter(room => room.price <= price)
    //filter by size
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
    //filter by breakfast
    if(breakfast){
      tempRooms = tempRooms.filter(room => room.breakfast === true)
    }
    //filter by pets
    if(pets) {
      tempRooms = tempRooms.filter(room => room.pets === true)
    }

    setState({
      sortedRooms: tempRooms
    })
  }

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkedbox" ? target.checked : target.value;
    const name = e.target.name;
    setState(
      {
        [name]: value
      },
      filterRooms
    )

  }

  return (
        <DataContext.Provider value={{...state, getRoom: getRoom, handleChange: handleChange}}>
            {props.children}
        </DataContext.Provider>
        );
};
