import styles from './index.module.css'

export default function VideoBox(props){
  return <div className={styles.vid_box} >
    <div className={styles.vid_header}>
      <div className={styles.vid_title}>
        This is the title of the video
      </div>
      <div className={styles.vid_info}>
        <span>
          39.9K plays
        </span>
        <span>
          1800 comments
        </span>
        <span>
          2021-10-19 09:00:06
        </span>
      </div>
    </div>
    <div className={styles.vid_player} style={props.size}>
      <iframe  src="//player.bilibili.com/player.html?aid=797663148&bvid=BV1cy4y1k7A2&cid=252900431&page=1" scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen={true}> </iframe>
    </div>
  </div>
}