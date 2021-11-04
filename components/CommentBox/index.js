import { List, Avatar } from "@alifd/next"
import moment from "moment"
import useRequest from "../../hooks/useRequest"
import styles from './index.module.css'
import useSWR from 'swr';
import axios from "axios";

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function CommentBox(props){
  const { data, loading } = useRequest("https://617d21b01eadc500171363e4.mockapi.io/api/comments/Comments")
  // const {data, error} = useSWR("https://617d21b01eadc500171363e4.mockapi.io/api/comments/Comments", fetcher)
  // const data = props.comments
  console.log(data, typeof data)
  return <div className={styles.comment_box} style={{width: props.size?.width , maxWidth: props.size?.maxWidth}}>
    <div className={styles.comment_box_list}>
      <List
        size="small"
        header={<div className={styles.comment_box_header}>{ data ? data.length : ''} Comments</div>}
        dataSource={data}
        renderItem={(item, i)=>{
          return <List.Item
            key={item.vid}
            title={item.name}
            media={<Avatar src={item.avatar} />}
          >
            <div className={styles.comment_item_desc}> 
              {moment(item.createdAt).format('dd/mm/yyyy hh:mm:ss')} 
            </div> 
            <div className={styles.comment_item_content}>
              { item.comment}
            </div>
          </List.Item>
        }}
      />
    </div>
  </div>
}