'use client'
import '@/styles/home.scss'
import { motion } from "framer-motion";


const FiberBentoBlock = () => {
  return (<div className='frosted-glass rounded-xl p-4 sm:w-2/5 sm:mr-4'>

  </div>)

}
export default function Home() {
  return (
    <div className="px-4 h-full">
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
        <h2 className="text-7xl font-sans">Hi!</h2>
      </motion.div>
      <div className='mt-4'>
        <div className='flex flex-col md:flex-row'>
          <div className='frosted-glass rounded-xl p-4 sm:w-2/5 sm:mr-4'>
            <div className='h-[600px]'></div>
          </div>
          <div className='frosted-glass rounded-xl p-4 sm:w-3/5 sm:mt-0'>
            <div className='h-[600px]'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
