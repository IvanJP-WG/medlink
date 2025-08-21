import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import AppointmentModal from "./AppointmentModal"; // import the modal

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [modalOpen, setModalOpen] = useState(false); // modal state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_nxivks6",
        "template_nmngnhq",
        formData,
        "d-pGgDAXFkYkQAB_6"
      )
      .then(
        () => setStatus("Message sent successfully!"),
        () => setStatus("Failed to send message. Try again.")
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Form */}
        <motion.form
          className="flex-1 flex flex-col gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
          {status && <p className="text-gray-700 dark:text-gray-200 mt-2">{status}</p>}
        </motion.form>

        {/* Social Links & CTA Buttons */}
        <motion.div
          className="flex-1 flex flex-col items-center gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Live CTA: Book Consultation Demo */}
          <button
            className="px-6 py-3 bg-teal-500 text-white font-medium rounded-xl hover:bg-teal-600 transition"
            onClick={() => setModalOpen(true)} // open modal on click
          >
            Book Consultation
          </button>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Connect with me
          </h3>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/YOUR_PROFILE"
              target="_blank"
              className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/YOUR_PROFILE"
              target="_blank"
              className="px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.researchgate.net/profile/YOUR_PROFILE"
              target="_blank"
              className="px-4 py-2 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition"
            >
              ResearchGate
            </a>
          </div>
        </motion.div>
      </div>

      {/* Appointment Modal */}
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

export default Contact;
