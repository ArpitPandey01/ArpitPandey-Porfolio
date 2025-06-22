import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_GMAIL_SERVICE,
        import.meta.env.VITE_GMAIL_TEMPLETE_ID,
        form.current,
        import.meta.env.VITE_GMAIL_KEY
      )

      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#0e0e12] text-white"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide">
          CONTACT ME
        </h2>
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-xl mx-auto">
          Feel free to contact me for job opportunities, questions, or any
          queries.
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-4 w-full max-w-md bg-[#1a1a1f] p-6 rounded-xl shadow-[0_0_30px_rgba(167,139,250,0.1)] border border-[#2e2e3e]">
        <h3 className="text-xl font-semibold text-white text-center mb-4">
          Connect With Me
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#0d0d11] text-white border border-[#2e2e3e] focus:outline-none focus:border-[#a78bfa]"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#0d0d11] text-white border border-[#2e2e3e] focus:outline-none focus:border-[#a78bfa]"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#0d0d11] text-white border border-[#2e2e3e] focus:outline-none focus:border-[#a78bfa]"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#0d0d11] text-white border border-[#2e2e3e] focus:outline-none focus:border-[#a78bfa]"
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full  bg-[#8b5cf6] hover:bg-[#a78bfa] text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
