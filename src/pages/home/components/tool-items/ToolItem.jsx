import { useState } from 'react';
import styles from './ToolItem.module.css';
import Iframe from '../iframe/Iframe';

function ToolItem({ video, num, title }) {
  const [showIframe, setShowIframe] = useState(false);

  const handleOpen = () => {
    setShowIframe(true);
  };

  const handleClose = () => {
    setShowIframe(false);
  };
  return (
    <>
      <div className={styles.toolItemWrapper}>
        {showIframe && <Iframe handleClose={handleClose} />}
        <div className={styles.tooltoolItem}>
          <a className={styles.thumbnailLink}>
            <div className={styles.tooltoolItem}>
              <div className={styles.thumbnailContainer}>
                <video src={video} autoPlay muted loop playsInline></video>
              </div>

              <div
                className={styles.tooltoolLandingButton}
                onClick={handleOpen}
              >
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
      </div>
    </>
  );
}

export default ToolItem;
