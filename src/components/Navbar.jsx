export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-black fixed w-full z-50 border-b border-gray-800 backdrop-blur-md">
      <a href="/"  className="text-2xl font-bold text-white">portfolio</a>
      <div className="flex gap-8">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-blue-400 transition"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
