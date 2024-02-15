import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './navbar.module.css';
import { IoMdHome, IoMdPersonAdd } from 'react-icons/io';
import { FaClipboardUser } from 'react-icons/fa6';
import { MdQuiz } from 'react-icons/md';

function NavBar() {
  const [activeItem, setActiveItem] = useState('');
  const location = useLocation();

  useEffect(() => {
    determineActiveItem();
  }, [location]);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const pathToItemNameMap = {
    '/': 'home',
    '/signin': 'signin',
    '/quiz': 'quiz',
    '/leaderboard': 'leaderboard',
  };

  const determineActiveItem = () => {
    const path = location.pathname;
    const itemName = pathToItemNameMap[path];
    setActiveItem(itemName || '');
  };

  return (
    <div className={styles.navbar}>
      <div>
        <h2>GOFORIT</h2>
      </div>

      <div className={styles.lin}>
        <NavItem
          icon={<IoMdHome />}
          text="Home"
          itemName="home"
          activeItem={activeItem}
        />
        <NavItem
          icon={<IoMdPersonAdd />}
          text="Sign In"
          itemName="signin"
          activeItem={activeItem}
        />
        <NavItem
          icon={<MdQuiz />}
          text="Quiz"
          itemName="quiz"
          activeItem={activeItem}
        />
         <Link onClick={() => setActiveItem('leaderboard')} to={'/leaderboard'} className={styles.text}>
        <NavItem
          icon={<FaClipboardUser />}
          text="Scores"
          itemName="leaderboard"
          activeItem={activeItem}
          onClick={handleItemClick}
        />
        </Link>
      </div>
    </div>
  );
}

function NavItem({ icon, text, itemName, activeItem }) {
  return (
    <div
      className={styles.linkContainer}
    >
      <div className={styles.link}>
        <div >{icon}</div>
        <div className={styles.text}>{text}</div>
      </div>
      {activeItem === itemName &&(
        <div className={styles.line}></div>
      )}
    </div>
  );
}

export default NavBar;
