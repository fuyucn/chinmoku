'use client'

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <div className="px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
          }}
          variants={{
            visible: {
              opacity: 1, y: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
              }
            },
            hidden: { opacity: 0, y: 20, transition: { duration: 0.2 } }
          }}
        >
          <h2 className="text-7xl">home page</h2>

        </motion.div>
      </div>
    </main>
  );
}
