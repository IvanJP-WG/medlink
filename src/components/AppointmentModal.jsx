import { useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";

function AppointmentModal({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full p-6 relative shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Book a Consultation
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Select your preferred date and time:
        </p>

        <div className="flex justify-center items-center mb-4">
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-teal-500 text-black"
            />

        </div>
        

        <button
          className="mt-6 w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition"
          onClick={() => alert(`You selected ${selectedDate.toLocaleString()}`)}
        >
          Confirm
        </button>
      </motion.div>
    </div>
  );
}

export default AppointmentModal;
