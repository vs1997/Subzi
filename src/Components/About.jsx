import React from 'react';
import './About.css';

function About() {
  return (
    <div>
      <section className='AboutSection'>
        <div className='AboutImgSet'>
          <img
            src='https://www.teahub.io/photos/full/88-885630_software-developer-wallpaper.png'
            className="AboutImg" alt='about-pht'
          ></img>
        </div>
        <div className=''>
          <div className='coloum-header'>
            <h1 className='About-Header'>about subzi</h1>
          </div>
          <div className='HeadingSet'>
            <h1 className='Heading'>Revolution Of Gamers</h1>
          </div>
          <div className='HeadSet1'>
            <h1 className='Heading2'>
              Lorem ipsum dolor sit amet, consectetur adi piscing elit. A
              pellentesque quisque imperdiet netus nisi dui.
            </h1>
            <div className='ParSet1'>
              <h1 className='Par1'>
                Orci mattis aliquam aliquet bibendum. Viverra felis risus enim,
                nunc. Proin turpis turpis tortor, nullam ullamcorper eget vitae,
                pretium adipiscing. At sit egestas iaculis at. Quam nibh
                ultrices mi faucibus donec sagittis. Fermentum nec non laoreet
                aliquet. Arcu adipiscing vulputate diam molestie et ipsum rutrum
                facilisis morbi. Parturient porttitor facilisi commodo in neque
                platea dolor arcu.
              </h1>
            </div>
            <div className='ParSet2'>
              <h1 className='Par2'>
                Vel quis pulvinar sed elementum morbi vitae. Sed dictum cras
                praesent quisque netus eu. Nullam ultricies auctor tempus
                pulvinar senectus urna consequat, porta urna. In mauris nec
                imperdiet feugiat. Porttitor nec varius auctor mi porta
                tincidunt habitasse etiam.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
