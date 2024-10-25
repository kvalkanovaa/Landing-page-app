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
    <section className="container pb-md-5">
      <div className="row g-5">
        <h2 className="text-center text-muted mb-0 mb-lg-5">
          With every myPOS payment terminal you get:
        </h2>
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="col-12 col-md-6 mb-4 d-flex justify-content-start"
          >
            <div className="row d-flex justify-content-center align-items-center g-2">
              <div className="d-flex gap-3 justify-content-start align-items-center">
                <img
                  src={benefit.img}
                  alt={benefit.text}
                  className="benefit-img" // I would have used img-fluid class if the images were the same size
                />
                <div className="d-flex flex-column justify-content-center align-items-start">
                  <h4 className="m-0 text-muted">{benefit.text}</h4>
                  <b>{benefit.boldText}</b>
                </div>
              </div>
              {/* If the imgs were the same size I would have used this structure to avoid fixed width and height */}
              {/* <div className="col-2 col-lg-4">
                <img
                  src={benefit.img}
                  alt={benefit.text}
                  className="img-fluid" !!!!!
                  // Since the icons are different sizes, when we use img-fluid class
                  // it is not working properly - some icons are bigger than others
                  // It is always better the icons to be the same size to avoid this issue.
                  // But since the icons are different sizes, we will use a fixed width for all.
                  // Also we have to use media queries to make them smaller on smaller screens
                  // Generally, if the images are the same size in the design,
                  // we could use the img-fluid class to make them responsive.
                  // Also I would have used svgs instead of pngs for better quality and scalability
                  // but I couldn't make it work properly with the psd file - the svgs were containing
                  // the whole design and that made them very large in size and not suitable for this purpose.
                />
              </div>
              <div className="col-10 col-lg-8 d-flex flex-column justify-content-center align-items-start ps-4">
                <h4 className="m-0 text-muted">{benefit.text}</h4>
                <b>{benefit.boldText}</b>
              </div>
              */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
