import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './about.css';
export default function About() {
const [Information,setInformation] = useState({});
useEffect(()=>{
    axios.get('') //url heroku
    .then(
        res => setInformation(res.data[0])
    )
})
  return (
    <div>about</div>
  )
}
