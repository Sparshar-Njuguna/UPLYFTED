
export default function App() {
  return (
    <div className="bg-gradient-to-b from-pink-100 via-white to-pink-50 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-pink-500">Abbie’s World</h1>
        <ul className="flex gap-6 text-gray-700">
          <li className="hover:text-pink-500 cursor-pointer">Home</li>
          <li className="hover:text-pink-500 cursor-pointer">Features</li>
          <li className="hover:text-pink-500 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-pink-500">Your Dream UI</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          We make your ideas shine with beautiful, modern, and responsive designs.
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-lg text-lg shadow-md transition duration-300">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-pink-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-pink-500 mb-2">Fast</h3>
            <p className="text-gray-600">Quick and smooth performance for all your needs.</p>
          </div>
          <div className="p-6 bg-pink-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-pink-500 mb-2">Responsive</h3>
            <p className="text-gray-600">Perfect on mobile, tablet, and desktop devices.</p>
          </div>
          <div className="p-6 bg-pink-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-pink-500 mb-2">Beautiful</h3>
            <p className="text-gray-600">Aesthetic design that stands out from the crowd.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-500 text-white text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} Abbie’s World. All rights reserved.</p>
      </footer>
    </div>
  );
}