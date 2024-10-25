import { useEffect, useState } from 'react';
import { Tooltip } from 'bootstrap';
import PaymentCards from './PaymentCards';
import terminal1 from '../assets/images/POS-terminal-1.png';
import terminal2 from '../assets/images/POS-terminal-2.png';
import terminal3 from '../assets/images/POS-terminal-3.png';
import terminal4 from '../assets/images/POS-terminal-4.png';
import terminal5 from '../assets/images/POS-terminal-5.png';

const PaymentTerminals = () => {
  const terminals = [
    {
      name: 'Combo',
      price: '299 EURO',
      img: terminal1,
      description: 'Android OS, Touch-screen display, Paper Printer',
    },
    {
      name: 'Mini Ice',
      price: '239 EURO',
      img: terminal2,
      description: 'Android OS, Touch-screen display, Paper Printer',
    },
    {
      name: 'Smart N5',
      price: '349 EURO',
      img: terminal3,
      description: 'Android OS, Touch-screen display, Paper Printer',
    },
    {
      name: 'Smart',
      price: '349 EURO',
      img: terminal4,
      description: 'Android OS, Touch-screen display, Paper Printer',
    },
    {
      name: 'Mini',
      price: '99 EURO',
      img: terminal5,
      description: 'Android OS, Touch-screen display, Paper Printer',
    },
  ];

  // State to track which terminal is rotated on mobile devices
  const [rotatedIndex, setRotatedIndex] = useState(null);

  useEffect(() => {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );

    tooltipTriggerList.map((tooltipTriggerEl) => {
      return new Tooltip(tooltipTriggerEl, {
        html: true,
        offset: '0, 40',
      });
    });
  }, []);

  // Handle terminal click to rotate
  const handleTerminalClick = (index) => {
    setRotatedIndex(index);

    // Automatically reset after 3 seconds
    setTimeout(() => {
      setRotatedIndex(null);
    }, 3000);
  };

  return (
    <section className="container pt-5">
      <div className="row g-5">
        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
          <h2 className="text-muted">Payment Terminals</h2>
          <p className="mb-5 pe-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            natus mollitia, quasi reiciendis blanditiis quisquam.
          </p>
          <button className="btn btn-primary col-8 col-xl-7 rounded-pill px-5 py-2 mb-5 text-white">
            SHOP NOW
          </button>
        </div>

        {terminals.map((terminal, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-4 d-flex justify-content-center justify-content-lg-start align-items-end text-center mb-4"
          >
            <div className="terminal-wrapper">
              <div
                className={`terminal-card mb-4 ${
                  rotatedIndex === index ? 'rotated' : ''
                }`}
                data-bs-toggle="tooltip"
                title={`
                  <div class="d-flex flex-column align-items-start p-2">
                    <h6 class="text-start text-primary fw-bold px-0">${terminal.name}</h6>
                    <p class="text-start">${terminal.description}</p>
                  </div>
                `}
                onClick={() => handleTerminalClick(index)} // Handle click event for mobile devices
              >
                <div className="blue-bg" />
                <img
                  src={terminal.img}
                  alt={`myPOS ${terminal.name}`}
                  className="terminal-img"
                />
              </div>

              <div className="price-bubble position-absolute d-flex flex-column pt-3">
                <h3 className="price-text text-white fw-bolder m-0 p-0">
                  {terminal.price.split(' ')[0]}
                  <span className="superscript-big">.00</span>
                </h3>
                <h4 className="text-white fw-bolder m-0 p-0">
                  {terminal.price.split(' ')[1]}
                </h4>
                <p className="small-text text-white fw-lighter m-0 p-0">
                  excl. VAT
                </p>
              </div>
              <h4 className="text-muted">myPOS {terminal.name}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Payment card types */}
      <PaymentCards />
    </section>
  );
};

export default PaymentTerminals;
