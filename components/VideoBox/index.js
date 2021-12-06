import useRequest from '../../hooks/useRequest'
import styles from './index.module.css'
import { useEffect } from 'react'
export default function VideoBox(props){
  console.log(props.params)
  const [data, loading] = useRequest(`https://api.pexels.com/videos/popular?per_page=1&page=2`, {headers: {'Authorization': '563492ad6f91700001000001d0eb52c325db4f8285144f26f11fc2c6'}})

  return <div className={styles.vid_box} >
    <div className={styles.vid_header}>
      {
        data?.videos?.length && 
        <>
        <div className={styles.vid_title}>
          {data.videos[0].user.name}
        </div>
        <div className={styles.vid_info}>
          <span>
            {(data.videos[0].id/1000).toFixed(2)} K views
          </span>
          <span>
            {data.videos[0].user.id} comments
          </span>
          <span>
            2021-10-19 09:00:06
          </span>
        </div>
      </>
      }
    </div>
    <div className={styles.vid_player}>
      { data?.videos?.length && 
        <video
          id="my-video"
          controls
          preload="auto"
          width={Math.min(props.size.width, props.size.maxWidth)}
          height={Math.min(props.size.height, props.size.minHeight)}
          poster={data.videos[0].image}
          autoPlay 
        >
          <source src={data.videos[0].video_files[0].link} type="video/mp4" />
          <p>
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
            <a href="https://videojs.com/html5-video-support/" >supports HTML5 video</a>
          </p>
        </video>
      }
    </div>
  </div>
}