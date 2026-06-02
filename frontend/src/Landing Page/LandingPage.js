import TopSection from './top section/TopSection';
import MiddleSection from './middle section/MiddleSection';
import EndSection from './end section/EndSectoin';

// const center = 
// {
//   display: 'flex', 
//   justifyContent: 'center',
//   width: '100%'
// }

function LandingPage() 
{ 
  return (
    // <div style={center}>
      <div>
        <TopSection />
        <MiddleSection />
        <EndSection />
      </div>
    // </div>
  );
}

export default LandingPage;
