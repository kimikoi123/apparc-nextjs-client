import { motion } from "framer-motion"
import { fadeIn, zoomIn } from "../utils/motion"
import { useState } from "react"
import { BiMenuAltRight } from "react-icons/bi"
import Link from "next/link"
import Head from "next/head"

export default function Home() {
  const [isMenuActive, setIsMenuActive] = useState(false)

  function toggleMenuClick() {
    if (isMenuActive) return setIsMenuActive(false)
    return setIsMenuActive(true)
  }
  return (
    <main className="bg-[#111111] text-[#999999]">
      <Head>
        <title>appArc</title>
      </Head>
      <motion.div
        initial="hidden"
        whileInView="show"
        className="h-screen relative"
      >
        <div className="absolute inset-0 grid place-items-center z-10">
          <motion.img
            variants={zoomIn(0.5, 0.75)}
            className="max-w-[300px] md:max-w-[500px] lg:max-w-[744px]"
            src="/slogan.png"
            alt=""
          />
        </div>

        <div className="absolute inset-0 z-20">
          <div className="container mx-auto px-5">
            <motion.div
              variants={fadeIn("down", "tween", 0.5, 1)}
              className="flex justify-end mt-20 relative"
            >
              <BiMenuAltRight
                onClick={() => toggleMenuClick()}
                className="text-5xl cursor-pointer hover:bg-[#5554548e] p-2 rounded"
              />
              <div
                className={`${
                  isMenuActive
                    ? "opacity-100 h-auto p-2"
                    : "opacity-0 h-0 overflow-hidden p-0"
                } right-0 -bottom-1 absolute translate-y-full bg-[#252525] w-[250px] rounded-lg text-center flex flex-col transition-all`}
              >
                <Link href="/analysis-tool">
                  <div className="hover:bg-[#5554548e] p-2 rounded-lg">
                    Analysis Tool
                  </div>
                </Link>
                <Link href="/contact">
                  <div className="hover:bg-[#5554548e] p-2 rounded-lg">
                    Contact Us
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
