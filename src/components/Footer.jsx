function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
        <p className="font-medium">
          &copy; {new Date().getFullYear()} MedLink. All rights reserved.
        </p>
        <p className="text-sm mt-1">
          Designed by Dr. Ivan Christopher
        </p>
      </div>
    </footer>
  );
}

export default Footer;
