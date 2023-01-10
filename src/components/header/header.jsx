import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import SpaIcon from '@mui/icons-material/Spa'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../../../styles/Header.module.sass'

export const Header = () => {
  const [sideBar, setSideBar] = useState(styles.sideBar__off)
  const openSideBar = () => {
    setSideBar(styles.sideBar__on)
  }

  const closeSideBar = () => {
    setSideBar(styles.sideBar__off)
  }

  return (
    <header className={styles.header}>
      <div className={sideBar}>
        <div className={styles.screen}>
          <div className={styles.leftSide}>
            <div className={styles.closeSideBar}>
              <div className={styles.topSide}>
                <div className={styles.sideLogo}>
                  <SpaIcon sx={{ color: '#606C38', width: 40, height: 40 }} />
                  <h1>Healthy Food</h1>
                </div>
                <div onClick={closeSideBar}>
                  <CloseIcon sx={{ color: '#606C38', width: 40, height: 40 }} />
                </div>
              </div>

            </div>
            <div className={styles.links}>
              <Link href='/'>Day offers</Link>
            </div>
            <div className={styles.social}>
              <Link href={'/'}>
                <FacebookIcon sx={{ color: '#606C38', width: 50, height: 50 }} />
              </Link>
              <Link href={'/'}>
                <TwitterIcon sx={{ color: '#606C38', width: 50, height: 50 }} />
              </Link>
              <Link href={'/'}>
                <InstagramIcon sx={{ color: '#606C38', width: 50, height: 50 }} />
              </Link>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.opacity}>

            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.topNav}>
          <div className={styles.logo}>
            <SpaIcon sx={{ color: '#DDA15E', width: 70, height: 70 }} />
            <h1>Healthy Food</h1>
          </div>

          <div className={styles.searchInput}>
            <input className={styles.input} placeholder='Search' />

            <a className={styles.searchButton}>
              <Image src={'/images/search.png'} width={40} height={40} alt='search' />
            </a>

          </div>
          <ShoppingCartIcon sx={{ color: '#DDA15E', width: 70, height: 70 }} />
        </div>
        <div className={styles.bottomNav}>
          <nav>
            <ul>
              <li>
                <div className={styles.sidebarButton} onClick={openSideBar}>
                  <MenuIcon sx={{ color: '#fff', width: 30, height: 30 }} />
                  <a>All categories</a>
                </div>

              </li>
              <li>
                <Link href='/'>Day offers</Link>
              </li>
              <li>
                <Link href='/'>Top sellers</Link>
              </li>
              <li>
                <Link href='/'>For you</Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  )
}