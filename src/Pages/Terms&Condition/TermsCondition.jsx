import React from "react";
import MyTitle from "../../Components/Title/MyTitle";
import MyContainer from "../../Components/MyContainer/MyContainer";

const TermsCondition = () => {
  return (
    <MyContainer>
      <MyTitle>Terms & Condition</MyTitle>
      <div className="divider m-0 py-0"></div>
      <p>
        Welcome to <span className="font-semibold">Car Rental!</span> <br />{" "}
        These Terms and Conditions (“Terms”) govern your use of our website and
        car rental services. By accessing or using our platform, you agree to be
        bound by these Terms. Please read them carefully before booking or
        renting a car.
      </p>

      {/* 1 */}
      <div className="divider"></div>
      <h5 className="text-2xl font-medium">1. General Terms</h5>
      <ul className="list-inside list-disc ml-5 mt-1">
        <li>
          DriveEase operates as an online platform that connects users with
          available rental cars.
        </li>
        <li>
          By using our website, you confirm that you are at least 18 years old
          and possess a valid driver’s license.
        </li>
        <li>
          All bookings made through DriveEase are subject to availability and
          confirmation.
        </li>
      </ul>

      {/* 2 */}
      <div className="divider"></div>
      <h5 className="text-2xl font-medium">2. User Responsibilities</h5>
      <ul className="list-inside list-disc ml-5 mt-1">
        <li>
          Users must provide accurate and complete information when creating an
          account or making a booking.
        </li>
        <li>
          Misuse of the website, including fraudulent bookings or abuse of
          promotional offers, will result in account suspension.
        </li>
        <li>
          Users agree not to use DriveEase for unauthorized data scraping,
          hacking, or spam-related activities.
        </li>
      </ul>

      {/* 3 */}
      <div className="divider"></div>
      <h5 className="text-2xl font-medium">3. Privacy Policy</h5>
      <ul className="list-inside list-disc ml-5 mt-1">
        <li>
          We respect your privacy and handle personal data in accordance with
          our [Privacy Policy].
        </li>
        <li>
          By using DriveEase, you consent to the collection and processing of
          your data for booking and service purposes.
        </li>
      </ul>

      {/* 4 */}
      <div className="divider"></div>
      <h5 className="text-2xl font-medium">4. Contact Information</h5>
      <p>For questions, support, or complaints, please contact us:</p>
      <p>📧 <a href="mailto:kamrul116522@gmail.com">kamrul116522@gmail.com</a></p>
    </MyContainer>
  );
};

export default TermsCondition;
