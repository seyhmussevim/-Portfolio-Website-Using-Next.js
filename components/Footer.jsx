import styles from "../styles/Footer.module.css"
import Image from "next/legacy/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className={styles.container}>
     <div className={styles.cardL}>
      <h1 className={styles.title}>CARKY CREATIVIES</h1>
      <h1 className={styles.linkTitle}>
      <Link href="/contact" passHref>
        <span className={styles.linkText}>WORK WITH US</span>
        <Image src="/img/link.png"
        width="40px"
        height="40px"
         alt=""/>
         </Link>
      </h1>
     </div>
     <div className={styles.cardS}>
      <div className={styles.cardItem}>
        SKOPJE<br/>NORTH MACEDONIA
      </div>
      <div className={styles.cardItem}>
        sevimseyhmuss@gmail.com<br/>+389 71 377 447
      </div>
     </div>
     <div className={styles.carS}>
     <div className={styles.cardItem}>
     FOLLOW US
      <br/> __FB__IN__BE__TW
      
      </div>
      <div className={styles.cardItem}>
      © 2023 CARKY INTERACTIVE ,
      <br/>
      ALL RIGHTS RESERVED
      </div>
     </div>
    </div>
  )
}

export default Footer