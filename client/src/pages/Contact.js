import React from 'react';
import Layout from '../components/Layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi';

const Contact = () => {
  return (
    <Layout title={"Contact Us - Ecommerce"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpg"
            alt="Contact Us"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <h2 className="bg-dark p-2 text-white text-center">CONTACT US</h2>
          <p className="text-center mt-2">
            For any queries and information about our products, feel free to reach out. We are available 24/7.
          </p>
          <p className="mt-3">
            <BiMailSend /> : <a href="mailto:help@ecommerceapp.com">help@ecommerceapp.com</a>
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : <a href="tel:0123456789">012-3456789</a>
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll-free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
