const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 absolute bottom-0 w-full">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">&copy; 2024 strzz</p>
          <nav className="mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end space-x-4">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>Designed and developed by </p>
      </div>
    </footer>
  );
};

export default Footer;
