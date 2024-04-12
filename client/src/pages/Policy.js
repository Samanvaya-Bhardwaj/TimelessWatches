import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Frequently Asked Questions - TimelessWatches"}>
      <div className="container faq-container">
        <h2 className="text-center faq-title mb-4 mt-5">
          Frequently Asked Questions
        </h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h3 className="accordion-header" id="faqHeadingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseOne"
                aria-expanded="true"
                aria-controls="faqCollapseOne"
              >
                Question 1: What types of watches do you offer?
              </button>
            </h3>
            <div
              id="faqCollapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeadingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Answer 1: We offer a diverse range of watches including luxury,
                casual, sports, and smartwatches for both men and women.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h3 className="accordion-header" id="faqHeadingTwo">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseTwo"
                aria-expanded="false"
                aria-controls="faqCollapseTwo"
              >
                Question 2: What are the payment options available?
              </button>
            </h3>
            <div
              id="faqCollapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeadingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Answer 2: We accept payments through credit cards, debit cards,
                PayPal, and cash on delivery.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h3 className="accordion-header" id="faqHeadingThree">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseThree"
                aria-expanded="false"
                aria-controls="faqCollapseThree"
              >
                Question 3: Do you offer international shipping?
              </button>
            </h3>
            <div
              id="faqCollapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeadingThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Answer 3: Yes, we offer international shipping to most
                countries. Shipping charges may vary based on the destination.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h3 className="accordion-header" id="faqHeadingFour">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseFour"
                aria-expanded="false"
                aria-controls="faqCollapseFour"
              >
                Question 4: How can I track my order?
              </button>
            </h3>
            <div
              id="faqCollapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeadingFour"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Answer 4: Once your order is shipped, we will provide you with a
                tracking number and a link to track your order online.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h3 className="accordion-header" id="faqHeadingFive">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseFive"
                aria-expanded="false"
                aria-controls="faqCollapseFive"
              >
                Question 5: What is your return policy?
              </button>
            </h3>
            <div
              id="faqCollapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeadingFive"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Answer 5: We have a 30-day return policy for unused and
                undamaged items. Please call  our customer service number
                for more details.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
