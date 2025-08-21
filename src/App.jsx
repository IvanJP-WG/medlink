import { motion } from "framer-motion";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.h1
        className="text-5xl font-bold text-blue-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to MedLink, Doctor
      </motion.h1>
    </div>
  );
}

export default App;
