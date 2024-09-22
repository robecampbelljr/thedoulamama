'use client'
import { useState } from 'react';
import styles from './styles/burger.module.css';

export default function Burger() {

  let [studioInfo, setStudioInfo] = useState(false);

  return (
    <div>
      <div className={styles.menu}>
        <ul>
          <li className="cursive pointer"><a href="/">Home</a></li>
          <li className="cursive"><a href="/about-us">About Erica</a></li>
          <li className="cursive"><a href="/contact">Contact Erica</a></li>
          <li className="cursive"><a href="/faqs">FAQs</a></li>
          <li className="cursive"><a href="/services">Services</a></li>
          </ul>
      </div>
      <div className={`${styles.screen} ${styles.fadein}`}></div>
    </div>
  )
};