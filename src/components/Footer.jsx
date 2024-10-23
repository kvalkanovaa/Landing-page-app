import logo from '../assets/svgs/myPos-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-dark text-secondary pt-2 pb-5">
      <div className="container text-center">
        <img
          src={logo}
          alt="myPOS Logo"
          className="my-4"
          style={{
            width: '5rem',
            opacity: '0.6',
          }}
        />

        <p className="small mb-4">
          * The transaction fee is displayed for indicative purposes and may
          vary depending on your business activity, geographical location, and
          other factors. Please get in touch with us to get a tailor-made offer
          for your business needs.
        </p>

        <div className="d-flex justify-content-center mb-3 gap-3">
          <a href="#" className="text-decoration-none">
            &raquo; <span className="text-secondary">Legal</span>
          </a>
          <a href="#" className="text-decoration-none">
            &raquo; <span className="text-secondary">Cookie Policy</span>
          </a>
        </div>

        <hr
          className="bg-white col-8 mx-auto mb-4 rounded"
          style={{ height: '2px' }}
        />

        <p className="small mb-0">
          &copy; 2014-2018, myPOS World Ltd., London, United Kingdom and its
          affiliates. myPOS Shop is operated by myPOS Services Ltd, processing
          on-line orders, distribution, replacement, and return of myPOS
          packages,
          <a href="mailto:sales@mypos.com" className="text-decoration-none">
            {' '}
            sales@mypos.com
          </a>
        </p>

        <p className="small">
          All e-money and payment services for customers from Bulgaria are
          provided by myPOS AD, Company Registration number: 205050564, in its
          capacity of agent of iCard AD registered in the Bulgarian National
          Bank. iCard AD, with registered address: blvd. 76A James Boucher,
          Sofia 1407, Bulgaria, Company registration number: 175325806, is
          licensed and regulated by the Bulgarian National Bank as an e-money
          institution under the Directive 2009/110/EO for electronic money with
          license number 4703-5081/25.07.2011, SWIFT/BIC code: INTSF8G,
          <a href="mailto:help.bg@mypos.com" className="text-decoration-none">
            {' '}
            help.bg@mypos.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
