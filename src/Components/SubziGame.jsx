import React from 'react';
import './SubziGame.css';

function SubziGame() {
  return (
    <div>
      <section className='GamesSection'>
        <div className='image1'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5NCeePHk6QHUAWJOJvaa3Tep06IWhV2mOAA&usqp=CAU'
            className='img1'
            alt='img1'
          ></img>
          <img
            src='https://www.abertay.ac.uk/media/1349/abertay-showcase9.jpg?anchor=center&mode=crop&quality=80&width=1050&height=700&rnd=131715383420000000'
            className='img2'
            alt='img2'
          ></img>
          <div className='GameName'>
            <h1 className='game1'>
              TAKYEN <span className='game2'>GAME2</span>
            </h1>{' '}
          </div>
        </div>
        <div className='heading1'>
          <h1 className='bodyheading1'>SUBZI GAMES</h1>
          <h1 className='bodyheading2'>The Sky Is Not The Limit</h1>
          <div className='infoCont'>
            <p className='bodyinfo'>
              Quam non sed dictumst et quisque hendrerit nunc habitant euismod.
              Ut adipiscing sociis urna pharetra. Tortor arcu rutrum rhoncus
              vitae. Convallis faucibus fringilla tellus viverra.
            </p>
            <h1 className='arrow'>
              <span className='material-icons arroww '>trending_flat</span>
              Check All Games
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SubziGame;
