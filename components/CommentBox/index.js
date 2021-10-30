import useRequest from "../../hooks/useRequest"
import styles from './index.module.css'
export default function CommentBox(props){
  const { data, loading } = useRequest("https://617d21b01eadc500171363e4.mockapi.io/api/comments/Comments")
  console.log(data, typeof data)
  return <div className={styles.comment_box}>
    <div className={styles.comment_box_header}>{ typeof data === 'object' ? data.length : ''} Comments</div>
    <div className={styles.comment_box_list}>
      
    </div>
  </div>
}