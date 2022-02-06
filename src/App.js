import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style/style.scss'
import Bar from './components/00-Bar';
import Cover from './components/01-Cover';
import MainEvent from './components/02-MainEvent';
import Support from './components/03-Support';
import SecondaryEvent from './components/04-SecondaryEvent';
import SponsorAndPartner from './components/05-SponsorAndPartner';
import Quotes from './components/06-Quotes';
import People from './components/07-People';
import RegisterAgain from './components/08-RegisterAgain';
import Faq from './components/09-Faq';
import Contacts from './components/10-Contacts';
import News from './components/11-News';
import GoogleMap from './components/12-GoogleMap';
import Footer from './components/13-Footer';

function App() {
  return (
    <div className="App">
      <Bar />
      <Cover />
      <MainEvent />
      <Support />
      <SecondaryEvent />
      <Quotes />
      <SponsorAndPartner />
      <People />
      <RegisterAgain />
      <Faq />
      <Contacts />
      {/* <News /> */}
      {/* <GoogleMap /> */}
      <Footer />
    </div>
  );
}

export default App;
