import visa from '../assets/svgs/payment-card-type-visa.svg';
import visaElectron from '../assets/svgs/payment-card-type-visa-electron.svg';
import mastercard from '../assets/svgs/payment-card-type-mastercard.svg';
import maestro from '../assets/svgs/payment-card-type-maestro.svg';
import amex from '../assets/svgs/payment-card-type-american-express.svg';
import vpay from '../assets/svgs/payment-card-type-visa-pay.svg';
import jcb from '../assets/svgs/payment-card-type-jcb.svg';
import ideal from '../assets/svgs/payment-card-type-ideal.svg';
import bancontact from '../assets/svgs/payment-card-type-bancontact.svg';
import unionPay from '../assets/svgs/payment-card-type-union-pay.svg';
import iosPay from '../assets/svgs/payment-card-type-ios-pay.svg';
import googlePay from '../assets/svgs/payment-card-type-google-pay.svg';
import samsungPay from '../assets/svgs/payment-card-type-pay.svg';
import yellowPay from '../assets/svgs/payment-card-type-yellow.svg';

const PaymentCards = () => (
  <div className="row">
    <ul className="list-unstyled d-flex flex-wrap gap-2 justify-content-center align-items-start w-md-50">
      <li>
        <img src={visa} alt="visa" />
      </li>
      <li>
        <img src={visaElectron} alt="visa electron" />
      </li>
      <li>
        <img src={mastercard} alt="mastercard" />
      </li>
      <li>
        <img src={maestro} alt="maestro" />
      </li>
      <li>
        <img src={amex} alt="american express" />
      </li>
      <li>
        <img src={vpay} alt="visa pay" />
      </li>
      <li>
        <img src={jcb} alt="jcb" />
      </li>
      <li>
        <img src={ideal} alt="ideal" />
      </li>
      <li>
        <img src={bancontact} alt="bancontact" />
      </li>
      <li>
        <img src={unionPay} alt="inion pay" />
      </li>
      <li>
        <img src={iosPay} alt="ios pay" />
      </li>
      <li>
        <img src={googlePay} alt="google pay" />
      </li>
      <li>
        <img src={samsungPay} alt="samsung pay" />
      </li>
      <li>
        <img src={yellowPay} alt="yellow pay" />
      </li>
    </ul>
  </div>
);

export default PaymentCards;
