import { FaLongArrowAltUp } from "react-icons/fa";
import { motion } from "framer-motion";

const LandingPage = () => {
  const titles = ["We Sell Best-Fishes in Market"];
  const below_border = [
    "For public and private people",
    "From the best company",
  ];
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-green-900 pt-1"
    >
      <div className="TextStructure mt-52 px-20">
        {titles.map((title, index) => (
          <div key={index} className="Masker">
            <div className="w-fit flex items-center overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.6, -0.05, 0.01, 0.99], duration: 3 }}
                  className="mr-[0.5vw] w-[9vw] rounded-md h-[5vw] relative -top-[0.4]"
                ></motion.div>
              )}
              <h1 className="uppercase text-[7vw] leading-[6vw] tracking-tighter font-['Founders_Grotesk_X-Condensed'] font-bold">
                {title}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center tracking-tight leading-none py-5 px-20">
        {below_border.map((phrase, index) => (
          <p key={index} className="text-md font-light">
            {phrase}
          </p>
        ))}

        <div className="start flex gap-5 items-center">
          <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full uppercase font-light text-md">
            start your shopping
          </div>
          <div className="w-10 h-10 rounded-full border-[1px] border-zinc-500 flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
