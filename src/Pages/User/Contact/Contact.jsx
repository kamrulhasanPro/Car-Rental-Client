import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import MyTitle from "../../../Components/Title/MyTitle";
import MyContainer from "../../../Components/MyContainer/MyContainer";

const Contact = () => {
  return (
    <MyContainer shortWidth={true}>
      <div>
        {/* Header */}
        <div className="mb-5 md:mb-10">
          <MyTitle className={"!mb-2"}>
            Contact <span className="text-primary border-b-2">Us</span>{" "}
          </MyTitle>
          <p className="text-base-content/70 max-w-xl mx-auto">
            Have a question, feedback, or need support? We’d love to hear from
            you.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* ===== Contact Info ===== */}
          <div className="space-y-6">
            <div className="bg-base-200 rounded-2xl p-6 border border-base-300">
              <div className="flex items-center gap-3 mb-2">
                <FaPhoneAlt className="text-primary" />
                <h4 className="font-semibold">Phone</h4>
              </div>
              <p className="text-sm text-base-content/70">+880 1806-116522</p>
            </div>

            <div className="bg-base-200 rounded-2xl p-6 border border-base-300">
              <div className="flex items-center gap-3 mb-2">
                <FaEnvelope className="text-primary" />
                <h4 className="font-semibold">Email</h4>
              </div>
              <p className="text-sm text-base-content/70">
                support@carrental.com
              </p>
            </div>

            <div className="bg-base-200 rounded-2xl p-6 border border-base-300">
              <div className="flex items-center gap-3 mb-2">
                <FaMapMarkerAlt className="text-primary" />
                <h4 className="font-semibold">Location</h4>
              </div>
              <p className="text-sm text-base-content/70">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* ===== Contact Form ===== */}
          <div className="bg-base-200 rounded-2xl p-8 border border-base-300">
            <h3 className="text-xl font-semibold mb-6 text-primary">
              Send us a message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="textarea textarea-bordered w-full"
              ></textarea>

              <button className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Contact;
