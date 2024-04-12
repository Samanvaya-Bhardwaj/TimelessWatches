import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - TimelessWatches"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src="/images/about.png" alt="about" style={{ width: "75%" }} />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            At Timeless Watches, we're passionate about curating a collection
            that embodies elegance, style, and craftsmanship. Our carefully
            selected watches reflect timeless beauty and individuality, catering
            to diverse tastes and preferences. We prioritize quality,
            authenticity, and customer satisfaction, ensuring that each watch
            meets the highest standards. Our platform is more than just a
            marketplace; it's a community where watch enthusiasts come together
            to explore, learn, and share their love for horology. Whether you're
            seeking a classic timepiece or a modern statement watch, Timeless
            Watches offers a range of options to suit every occasion and style.
            Join us in celebrating the artistry of watchmaking and the timeless
            allure of watches. With Timeless Watches, every moment becomes an
            opportunity to express your unique personality and elevate your
            sense of style.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;