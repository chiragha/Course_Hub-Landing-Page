import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic Plan",
    price: "$20",
    desc: "Perfect for casual learners exploring new skills.",
    features: [
      "Access to 50+ courses",
      "Community support",
      "Monthly new content",
      "No certification",
    ],
  },
  {
    name: "Pro Plan",
    price: "$45",
    desc: "Ideal for committed learners and career builders.",
    features: [
      "Unlimited course access",
      "Downloadable resources",
      "Certificates of completion",
      "Priority support",
      "Access to expert webinars",
      "Live sessions",
    ],
    highlight: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold mb-2">Pricing Plan</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Affordable Plans for Every <span className="text-blue-600">Student</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl  font-bold mb-6">
              Affordable plans for every business
            </h2>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg">Flexible Class</h4>
                <p className="text-gray-600">
                  Set your own pace and learn anytime with flexible scheduling.
                </p>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-lg">Hybrid Access</h4>
                <p className="text-gray-600">
                  Enjoy both online and offline learning experiences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid sm:grid-cols-2 gap-6 items-end">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`rounded-2xl p-6 shadow-lg text-white relative ${
                  plan.highlight
                    ? "bg-[#032042]  scale-105 sm:scale-110 py-10"
                    : "bg-[#032042] "
                }`}
              >
                
                {plan.highlight && (
                  <span className="absolute top-4 right-4 bg-blue-500 text-xs px-2 py-1 rounded">
                    HOT
                  </span>
                )}

                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>

                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm"> /month</span>
                </div>

                <p className="text-sm mb-4">{plan.desc}</p>

                <ul className="space-y-2 text-sm mb-6">
                  {plan.features.map((f, idx) => (
                    <li key={idx}>• {f}</li>
                  ))}
                </ul>

                <button className="bg-blue-500 cursor-pointer hover:bg-white hover:text-blue-500 px-4 py-2 rounded-lg text-sm">
                  Contact Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
