'use client'
import React, { useState } from 'react';
import Burger from './burger';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/header.module.css';
import logo from '../images/logo.png';

const Header = () => {

  let [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {isOpen && <Burger/>}
      <span className={styles.burger} onClick={() => { setIsOpen(!isOpen) }} style={{color: isOpen ? 'white' : 'black'}}>
        <p>__</p>
        <p>__</p>
        <p>__</p>
      </span>
      <section className={styles.banner}>
        <Link href="/" passHref legacyBehavior><h1 className="pointer">The Doula Mama</h1></Link>
        <h2>Erica Campbell</h2>
        <h4>CBD (CBI), CPD (CBI), CLC</h4>
        <Image className={styles.image} src={logo} height={0} width={0} alt="The Doula Mama Logo"/>
      </section>
    </header>
  )
}

export default Header;