// SignUpForm.js
import React from 'react';
import brain from '../../assets/cover.jpg'
import styles from './signup.module.css'
import { FaRegCirclePlay } from "react-icons/fa6";

function SignUpForm({name, setName, isSignedIn, handleSignIn}) {

  
  return (
    
<>
{!isSignedIn && (
                 <div className={styles.half}>
                  <img src= {brain} alt='image of a brain' className={styles.landing} />
                <div className={styles.container}>
                    <h3>Sign In to Play</h3>
                    <p>Guess the logo in seconds. Play for free!</p>
                    <div className={styles.adjust}>
                    <input className= {styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                    <div className={`${styles.btn} ${name.trim() === '' && styles.disabled}`}
                    onClick={handleSignIn}
                    disabled= {name.trim() !== ""}>
                      <FaRegCirclePlay size={20} className={styles.play}/>
                      <p>PlayNow</p>
                    </div>
                    </div>
                </div>
                </div>
            )}
            
</>
  );
}

export default SignUpForm;
