import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <section className='carl'>
        <div className='container-fluid nav_bg'>
          <div className='SetImg2'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1dUne35UpDa_cn7Z_-f0SYs8N2VxGxYNEA&usqp=CAU'
              className='Img2'
              alt='img2'
            ></img>
          </div>
          <div className='SetImg1'>
            <img
              src='https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55031/brown-circle-emoji-clipart-sm.png'
              className='Img1'
              alt='img1'
            ></img>
          </div>

          <div className='headingdi'>
            <h1 className='heading'>Epic Game</h1>
          </div>
          <div className='headingCont'>
            <p className='headingText'>
              SubZi's mission is to make the best mobile games.
            </p>
          </div>

          <div className='mt-3 calButton'>
            <a href='aa' className='applebtn'>
              Apple Store<span className='line'></span>
            </a>
          </div>
          <div className='mt-3 googleButton'>
            <a href='aa' className='googlebtn'>
              Google Play<span className='line'></span>
            </a>
            <div className='dots'>
              <span className='material-icons first-dot'>adjust</span>
              <span className='material-icons second-dot'>fiber_manual_record</span>
              <span className='material-icons third-dot'>fiber_manual_record</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
