import TopText from '../../components/top-text/TopText';
import ToolItem from './components/tool-items/ToolItem';
import style from './Home.module.css';

import video3 from '../../assets/thumbnail/filpboards_thumbnail.mp4';
import video1 from '../../assets/thumbnail/fluid_thumbnail.mp4';
import video2 from '../../assets/thumbnail/pintoy_thumbnail.mp4';

function Home() {
  const mockData = [
    { video: video3, num: 3, title: 'Flipboards' },
    { video: video2, num: 2, title: 'Pintoy' },
    { video: video1, num: 1, title: 'Fluid' },
  ];
  return (
    <div className={style.pageWrapper}>
      <TopText
        text1={'Welcome to Tooltool! Have fun experimenting with our tools.'}
        text2={'See if you need one for your brand!'}
      />
      <div className={style.tooltoolGallery}>
        {mockData.map((data) => (
          <ToolItem key={data.num} {...data} />
        ))}
      </div>
    </div>
  );
}

export default Home;
