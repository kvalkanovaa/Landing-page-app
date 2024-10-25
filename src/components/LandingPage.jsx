import Header from './Header';
import Benefits from './Benefits';
import PaymentTerminals from './PaymentTerminals';
import Footer from './Footer';

const LandingPage = () => (
  <>
    <div id="hero-wrapper">
      <Header />
      <Benefits />
      <PaymentTerminals />
    </div>
    <Footer />
  </>
);

export default LandingPage;
