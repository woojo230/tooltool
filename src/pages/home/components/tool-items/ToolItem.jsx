import styles from './ToolItem.module.css';

function ToolItem({ video, num, title }) {
  return (
    <div className={styles.tooltoolItem}>
      <a className={styles.thumbnailLink}>
        <div className={styles.tooltoolItem}>
          <div className={styles.thumbnailContainer}>
            <video src={video} autoPlay muted loop playsInline></video>
          </div>

          <div className={styles.tooltoolLandingButton}>
            <div className={styles.leftContainer}>
              <span>0{num}</span>
              <span>{title}</span>
            </div>
            <div className={styles.rightContainer}>
              <span>Type Tool</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ToolItem;
