import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { LuHeadphones } from "react-icons/lu";
import { RiShirtLine } from "react-icons/ri";
import { MdLibraryMusic } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
      </div>
      <div className="mt-3 flex gap-6 text-base">
        <span className="inline-flex items-center gap-2">
          <LuHeadphones className="text-2xl text-[#4169E1]" />
          Headphones
        </span>
        <span className="inline-flex items-center gap-2">
          <RiShirtLine className="text-2xl text-[#172554]" />
          Coat check
        </span>
      </div>
      <div className="mt-3 flex gap-3">
        <MdLibraryMusic className="text-4xl text-blue-600" />
        <HiOutlineSparkles className="text-4xl text-blue-600" />
      </div>
    </div>
  );
}
