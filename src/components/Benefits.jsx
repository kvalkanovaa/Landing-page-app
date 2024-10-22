import benefit1 from '../assets/images/benefit-1.png';
import benefit2 from '../assets/images/benefit-2.png';
import benefit3 from '../assets/images/benefit-3.png';
import benefit4 from '../assets/images/benefit-4.png';
import benefit5 from '../assets/images/benefit-5.png';
import benefit6 from '../assets/images/benefit-6.png';

const Benefits = () => {
  const benefits = [
    {
      img: benefit1,
      text: 'Business account with IBAN',
      boldText: '0 EUR/month',
    },
    { img: benefit4, text: 'Data connectivity', boldText: '0 EUR/month' },
    {
      img: benefit2,
      text: 'Visa debit card',
      boldText: '0 EUR/month',
    },
    { img: benefit5, text: 'Dashboard and reporting', boldText: '24/7 access' },
    { img: benefit3, text: 'Money in your account', boldText: 'INSTANTLY' },
    { img: benefit6, text: 'Phone, email & chat support', boldText: 'FREE' },
  ];

  return (
    <section className="container mt-5">
      <div className="row">
        <h2 className="text-center mb-5 p-5">With every myPOS payment terminal you get:</h2>
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="col-12 col-md-6 mb-4 px-5 d-flex justify-content-start"
          >
            <div className="d-flex gap-3 justify-content-start align-items-center">
              <img
                src={benefit.img}
                alt={benefit.text}
                className=""
                style={{ height: '50px' }}
              />
              <div className="d-flex flex-column justify-content-center align-items-start">
                <p className="m-0">{benefit.text}</p>
                <b>{benefit.boldText}</b>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
