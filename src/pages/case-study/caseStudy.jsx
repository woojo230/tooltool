import TopText from '../../components/top-text/TopText';
import style from './caseStudy.module.css';
import Slider from './components/Slider';
import { mockData as mock1 } from './mock/mock1';
import { mockData as mock2 } from './mock/mock2';

function CaseStudy() {
  const dataArr = [
    {
      title: 'Enchelon',
      theme: 'Pin Toy Tool',
      mockData: mock1,
      url: 'https://tool-pintoy.netlify.app/',
    },
    {
      title: 'Muse',
      theme: 'Fluid Tool',
      mockData: mock2,
      url: 'https://tool-fluid.netlify.app/',
    },
  ];
  return (
    <div className={style.pageWrapper}>
      <TopText
        text1={'Brand identity in action.'}
        text2={'Check out how our tools might bring systems to your projects!'}
      />
      <div className={style.caseGallery}>
        {/* <Slider title={'Enchelon'} theme={'Pin Toy Tool'} mockData={mock1} />
        <Slider title={'Muse'} theme={'Fluid Tool'} mockData={mock2} /> */}
        {dataArr.map((data) => (
          <Slider
            title={data.title}
            theme={data.theme}
            mockData={data.mockData}
            url={data.url}
          />
        ))}
      </div>
    </div>
  );
}

export default CaseStudy;
