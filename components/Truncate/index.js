import styles from './index.module.css'

export default function Truncate(props) {
  return <div className={styles.truncateBody} style={{width: props.width, maxHeight: props.height}}>
    {props.content}
  </div>
}
