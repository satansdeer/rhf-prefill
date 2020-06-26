import React, { useEffect, useState } from "react";
import "./App.css";
import { getUserData } from "./api";
import {UserForm} from './UserForm'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setData(await getUserData())
    } 
    fetchData()
  }, []) 

  return data ? <UserForm preloadedValues={data}/> : <div>Loading...</div>
}

export default App;
