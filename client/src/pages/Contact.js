import React from 'react';
import Layout from '../components/Layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi';

const Contact = () => {
  return (
    <Layout title={"Contact Us - Omnitrix"}>
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
            For any queries and information about our products, feel free to
            reach out. We are available from 9AM to 7PM.
          </p>
          <p className="mt-3">
            <BiMailSend /> :{" "}
            <a href="mailto:help@ecommerceapp.com">omnitrix@gmail.com</a>
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : <a href="tel:0123456789">0-9999999999</a>
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
