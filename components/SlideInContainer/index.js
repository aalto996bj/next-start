import React, { useEffect } from 'react'
import styles from './index.module.css'

function SlideInContainer() {
  return (
    <div className={styles.slide_in_container}>
      {props.children}
    </div>
  )
}

export default SlideInContainer