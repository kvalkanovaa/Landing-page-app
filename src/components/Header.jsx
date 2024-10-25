import logo from '../assets/svgs/myPos-logo.svg';
import POSTerminal from '../assets/images/POS-terminal.png';

const Header = () => {
  return (
    <header className="header mb-5">
      <div className="container-fluid header-custom-banner position-relative">
        {/* Content placed on top of the background image */}
        <div className="row justify-content-center align-items-center pt-3 pt-lg-4 pt-xl-5">
          <div className="col col-sm-6 d-flex flex-column justify-content-center align-items-center">
            <img
              className="col-2 col-lg-1 pb-md-4 pb-lg-5 img-fluid"
              src={logo}
              alt="myPos-logo"
            />
            <h1 className="custom-heading text-center pt-1 pt-lg-4 pt-xxl-5 pb-md-2 text-white">
              Say &quot;YES&quot; to every payment
            </h1>
            <h5 className="custom-subheading text-center pb-sm-5 text-white">
              No commitment. No monthly fees.
            </h5>
            <button className="custom-button text-white btn btn-primary rounded-pill px-4 py-3 col-lg-6 col-xl-4 col-xxl-3 fs-5">
              LEARN MORE
            </button>
            <div className="custom-terminal-wrapper col d-flex align-items-end pt-5 mt-2 gap-5 position-absolute">
              <ul
                className="custom-ul col-6 col-lg-5 col-xxl-4 ps-4 py-4 rounded"
                style={{ backgroundColor: 'blue' }}
              >
                <li className="ps-1 ps-lg-4 pb-3 pb-lg-4 text-white fw-bold fs-5">
                  0.<span className="superscript">00</span> EUR monthly fee
                </li>
                <li className="ps-1 ps-lg-4 text-white fw-bold fs-5">
                  1.75% transaction fee *
                </li>
              </ul>
              <div className="custom-terminal">
                <div className="price-bubble d-flex flex-column position-absolute">
                  <h2 className="price-text text-white fw-bolder m-0 p-0">
                    99<span className="superscript-big">.00</span>
                  </h2>
                  <h3 className="price-euro text-white fw-bolder m-0 p-0">
                    EURO
                  </h3>
                  <p className="small-text text-white fw-lighter m-0 p-0">
                    exl. VAT
                  </p>
                </div>
                <img
                  className="custom-terminal-img"
                  src={POSTerminal}
                  alt="POSTerminal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile design */}
      <div className="container d-flex flex-column d-md-none">
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
          <h1 className="text-center">Say &quot;YES&quot; to every payment</h1>
          <h5 className="text-center">No commitment. No monthly fees.</h5>
          <button className="col-8 btn btn-primary rounded-pill px-1 py-2 text-white">
            LEARN MORE
          </button>
          <div className="bubble-wrapper d-flex position-relative mt-5">
            <div className="price-bubble d-flex flex-column position-absolute">
              <h2 className="price-text text-white fw-bolder m-0 p-0">
                99<span className="superscript-big">.00</span>
              </h2>
              <h5 className="text-white fw-bolder m-0 p-0">EURO</h5>
              <p className="small-text text-white fw-lighter m-0 p-0">
                exl. VAT
              </p>
            </div>
            <img
              style={{ width: '250px' }}
              src={POSTerminal}
              alt="POSTerminal"
            />
          </div>
          <ul className="custom-ul px-2 py-3 m-0 mt-5 rounded">
            <li className="ps-4 pb-2 text-white fw-bold">
              0.<span className="superscript">00</span> EUR monthly fee
            </li>
            <li className="ps-4 text-white fw-bold">1.75% transaction fee *</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
