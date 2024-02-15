import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./home.module.css"
import brain from '../../assets/cover.jpg'

function Home() {
 const navigate = useNavigate()
 
 const handleFindOut = () => {
      navigate('/signin')
 }
 
  return (
        <div className={styles.half}>
         <img src= {brain} alt='image of a brain' />
         <div className={styles.body}>
           <h2> CAN YOU IDENTIFY RANDOM PICS IN SECONDS?</h2>
           <button onClick={handleFindOut}>Find Out!</button>
  </div>

    
         </div>
    
  )
}

export default Home;