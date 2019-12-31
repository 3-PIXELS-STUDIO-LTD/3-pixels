import '../style/style.scss';

import Logo from './components/Logo';
import MainInfo from './components/MainInfo';
import Footer from './components/Footer';

function HomePage() {
  return (
    <div className='pixels-root'>
      <Logo />
      <MainInfo />
      <Footer />
    </div>
  );
}

export default HomePage;
