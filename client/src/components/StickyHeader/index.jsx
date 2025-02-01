import { useState, useEffect } from 'react';

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const hiddenThreshold = 100;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < hiddenThreshold) {
      setIsVisible(false);
    } else if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 z-50 left-0 w-full bg-red shadow-lg transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">My Header</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default StickyHeader;
