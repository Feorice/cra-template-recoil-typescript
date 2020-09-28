import React from 'react';
import { useRecoilState } from 'recoil';

import Logo from './components/Logo';
import { logoAnimationState } from './recoil/atoms';
import './App.css';

function App() {
  const [logoAnimation, setLogoAnimation] = useRecoilState(logoAnimationState);

  const toggleAnimation = () => {
    setLogoAnimation(!logoAnimation);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />
        <button onClick={toggleAnimation()}>Toggle animation</button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
