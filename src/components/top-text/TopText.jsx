import style from './TopText.module.css';

function TopText({ text1, text2 }) {
  return (
    <div>
      <h3 className={style.brandMessage}>{text1}</h3>
      <h3 className={style.brandMessage}>{text2}</h3>
    </div>
  );
}

export default TopText;
