import { FaPhoneAlt, FaEnvelope, FaHeadset } from "react-icons/fa";

const HelpCenterModal = () => {
  return (
    <>
      {/* Modal */}
      <dialog id="support_modal" className="modal">
        <div className="modal-box bg-base-200 max-w-md">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <FaHeadset className="text-primary text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Support Center</h3>
              <p className="text-sm text-base-content/70">
                We’re here to help you 24/7
              </p>
            </div>
          </div>

          {/* Support Options */}
          <div className="space-y-3">
            {/* Phone */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-base-100 hover:shadow transition">
              <FaPhoneAlt className="text-primary" />
              <div>
                <p className="text-sm font-medium">Call Support</p>
                <p className="text-xs text-base-content/70">+880 1806-116522</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-base-100 hover:shadow transition">
              <FaEnvelope className="text-primary" />
              <div>
                <p className="text-sm font-medium">Email Us</p>
                <p className="text-xs text-base-content/70">
                  support@yourbrand.com
                </p>
              </div>
            </div>

            {/* Live Support */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-base-100 hover:shadow transition">
              <FaHeadset className="text-primary" />
              <div>
                <p className="text-sm font-medium">Live Assistance</p>
                <p className="text-xs text-base-content/70">
                  Available 10:00 AM – 8:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary btn-sm">Got it</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default HelpCenterModal;
