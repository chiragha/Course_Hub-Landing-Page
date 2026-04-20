import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white pt-16 px-6">
      <div className="max-w-7xl mx-auto">
       
        <div className="grid md:grid-cols-2 gap-8 mb-12">
      
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-3">Stay Fresh with Us</h2>
            <p className="text-gray-400 text-sm max-w-md">
              Subscribe to our newsletter to get the latest updates, courses,
              and exclusive offers delivered straight to your inbox.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white text-black p-6 rounded-xl"
          >
            <h3 className="font-semibold mb-3">Subscribe Our Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get the latest news and updates.
            </p>
            <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-transparent outline-none text-sm"
              />
              <button className="bg-black text-white px-4 py-2 text-sm">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        <hr className="border-gray-700 mb-10" />

    
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-4">CourseHub</h4>
            <p className="text-gray-400">
              Learn new skills online with top educators and industry experts.
            </p>

         
            <div className="flex gap-3 mt-4">
              <span className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-xs">F</span>
              <span className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-xs">T</span>
              <span className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-xs">I</span>
              <span className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-xs">L</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Services</li>
              <li>Contact</li>
              <li>Settings</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 +123 456 7890</li>
              <li>✉️ info@coursehub.com</li>
              <li>📍 abc, United States</li>
            </ul>
          </div>
        </div>


        <div className="text-center text-gray-500 text-xs mt-12 pb-6">
          Copyright © 2025 CourseHub | Designed by Chiragha
        </div>
      </div>
    </footer>
  );
}
