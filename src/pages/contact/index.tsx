import React from "react"
import { BsArrowRightShort } from "react-icons/bs"

export default function index() {
  return (
    <div className="bg-[#111111] text-[#999999]">
      <div className="h-screen grid place-items-center">
        <form className="w-full sm:w-[500px] px-5" action="">
          <div className="flex flex-col gap-5 ">
            <input
              className="py-4 px-3 bg-[#252525] rounded-lg outline-none"
              type="text"
              placeholder="name"
              required
            />
            <input
              className="py-4 px-3 bg-[#252525] rounded-lg outline-none"
              type="email"
              placeholder="email"
              required
            />
            <textarea
              className="py-4 px-3 bg-[#252525] rounded-lg h-[200px] resize-none outline-none"
              name="message"
              placeholder="message"
              required
            ></textarea>
            <button className="flex items-center" type="submit">
              <div>send</div>
              <BsArrowRightShort className="h-[30px] w-[30px]" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
