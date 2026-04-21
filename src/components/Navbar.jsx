import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Courses", id: "courses" },
    { name: "Instructors", id: "instructors" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-[999]">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    
    {/* Logo */}
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold">
        S
      </div>
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
        SkillSync
      </h1>
    </div>

    {/* Desktop Menu */}
    <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
      {navLinks.map((link) => (
        <li
          key={link.name}
          onClick={() => handleScroll(link.id)}
          className="cursor-pointer hover:text-indigo-600 transition"
        >
          {link.name}
        </li>
      ))}
    </ul>

    {/* Mobile Menu Button */}
    <div className="md:hidden flex items-center cursor-pointer z-[1000]">
      {open ? (
        <HiX size={30} className="text-gray-800" onClick={() => setOpen(false)} />
      ) : (
        <HiMenu size={30} className="text-gray-800" onClick={() => setOpen(true)} />
      )}
    </div>
  </div>

  {/* Mobile Menu */}
  {open && (
    <div className="md:hidden bg-white shadow-md px-6 pb-6">
      <ul className="flex flex-col gap-4 text-gray-700">
        {navLinks.map((link) => (
          <li
            key={link.name}
            onClick={() => handleScroll(link.id)}
            className="cursor-pointer"
          >
            {link.name}
          </li>
        ))}
      </ul>
    </div>
  )}
</nav>
  );
};

export default Navbar;
