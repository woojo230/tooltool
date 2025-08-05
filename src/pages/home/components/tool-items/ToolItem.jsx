import { useEffect, useState } from 'react';
import styles from './ToolItem.module.css';
import Iframe from '../iframe/Iframe';
import useIframeStore from '../../../../store/useIframStore';

function ToolItem({ video, num, title, url }) {
  const [showIframe, setShowIframe] = useState(false);
  const isOpen = useIframeStore((state) => state.isOpen);
  const openIframe = useIframeStore((state) => state.openIframe);
  const closeIframe = useIframeStore((state) => state.closeIframe);

  return (
    <>
      <div className={styles.toolItemWrapper}>
        {isOpen && <Iframe handleClose={closeIframe} url={url} />}
        <div className={styles.tooltoolItem}>
          <a className={styles.thumbnailLink} onClick={openIframe}>
            <div className={styles.tooltoolItem}>
              <div className={styles.thumbnailContainer}>
                <video src={video} autoPlay muted loop playsInline></video>
              </div>

              <div
                className={styles.tooltoolLandingButton}
                onClick={openIframe}
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
