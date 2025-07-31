import styles from './Iframe.module.css';

function Iframe({ handleClose }) {
  return (
    <>
      <div className={styles.iframeContainer} onClick={handleClose} />

      <button onClick={handleClose} className={styles.button}>
        close
      </button>

      <iframe
        src="https://tooltool.design"
        title="External Site"
        className={styles.iframe}
      />
    </>
  );
}

export default Iframe;
