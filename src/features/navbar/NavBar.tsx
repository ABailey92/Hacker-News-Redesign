import React from 'react'
import styles from './NavBar.module.css';



const NavBar = () => {
  return (
    <section className={styles.headerContainer}>
      <section className={styles.headerSection}>
        <section className={styles.headerLetter}>Y</section>
      <section className={styles.headerHeroText}>Hacker News</section>
      </section>
      <section className={styles.headerNavTextSection}>
      <p className={styles.headerNavText}>latest</p>
      <p className={styles.headerPipeText}> | </p>
      <p className={styles.headerNavText}>starred</p>
      </section>
    </section>
    
    
  )
}

export default NavBar