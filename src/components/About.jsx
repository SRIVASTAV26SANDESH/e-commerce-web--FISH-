function About() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.1.5"
      className="w-full p-20 bg-[#CDE168] rounded-tl-3xl rounded-tr-3xl text-black"
    >
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[3.5vw] tracking-tight ">
      Dive into freshness at OceanBounty.com! Explore our daily catch of premium seafood,
       from succulent salmon to plump shrimp. Discover mouthwatering recipes,
        cooking tips, and learn about our ocean-to-table journey. Experience the difference of 
        truly fresh seafood – your taste buds will thank you!
      </h1>

      <div className="grid gap-y-30 md:grid-cols-12 py-15 outline-top mb-40 md:mb-90 mt-32 border-t-[1px] pt-[1vw]  border-[#a1b562]">
        <div className="md:col-span-4 lg:col-span-6 reset-last font-medium">
          <p>What you can expect:</p>
        </div>
        <div className="md:col-span-4 lg:col-span-4 reset-last">
          <div className="wysiwyg reset-last max-w-275">
            <p>
            Fresh, high-quality seafood: The shop emphasizes freshness and premium quality in their products.
            Variety: A range of seafood options, including different types of fish and shellfish like salmon and shrimp.
            Sustainable sourcing: The shop appears to prioritize environmentally responsible fishing practices.
            
            </p>
            <p>
           :Customers can have fresh seafood delivered directly to their homes.
            </p>
          </div>
        </div>
        <div className="md:col-span-4 lg:col-span-2 reset-last md:items-end md:justify-end md:flex laptop:justify-start">
          <div>
            <p className="mb-15">Sources:</p>
            <ul>
              <li>
                <a className="underline" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="underline" href="#">
                  Behance
                </a>
              </li>
              <li>
                <a className=" underline" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className="underline" href="https://www.linkedin.com/in/sandesh-srivastav-750a652b8/">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full flex  gap-5 border-t-[1px] pt-[1vw] mt-[2vw] border-[#a1b562] ">
        <div className="w-full">
          <h1 className="text-7xl">Our approach:</h1>
          <button className="flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-[1vw] rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-full h-[60vh] rounded-3xl bg-[#3a431d] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://www.thoughtco.com/thmb/XRS8J7vnB3Vx6KRaElWO5fzzg1Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blue-runners--947498612-5c634cd3c9e77c0001566e32.jpg"
            alt="modelsImage"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default About;
