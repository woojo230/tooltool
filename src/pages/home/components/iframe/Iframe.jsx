import styles from './Iframe.module.css';

function Iframe({ handleClose, url }) {
  return (
    <>
      <div className={styles.iframeContainer} onClick={handleClose} />

      <button onClick={handleClose} className={styles.button}>
        close
      </button>

      <iframe src={url} title="External Site" className={styles.iframe} />
    </>
  );
}

export default Iframe;
