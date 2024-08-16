function Cards() {
  return (
    <div className="w-full h-screen flex gap-5 items-center px-32  bg-zinc-900">
      <div className="cardContainder h-[50vh] w-1/2">
        <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
          <img
            className="w-full "
            src="https://www.thoughtco.com/thmb/XRS8J7vnB3Vx6KRaElWO5fzzg1Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blue-runners--947498612-5c634cd3c9e77c0001566e32.jpg"
            alt="relative"
          ></img>
          <button className="absolute  px-5 py-1 rounded-full border-2 left-10 bottom-10">
            &copy;2024-2025
          </button>
        </div>
      </div>
      <div className="cardContainder flex gap-5 h-[50vh] w-1/2">
        <div className="card w-1/2 h-full rounded-xl relative flex items-center justify-center bg-[#102623] ">
          <img
            src="data:image/png;base64,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"
            alt="relative2 "
          ></img>
          <button className="absolute  px-5 py-1 rounded-full border-2 left-10 bottom-10">
            RATING 4.5 + ON OUR QUALITY
          </button>
        </div>
        <div className="card w-1/2 rounded-xl h-full relative flex items-center justify-center bg-[#102623]">
          <img
            className="w-full "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlV7omJ9ntTvi3kbHq27jeILQzCusEGaF4fA&sg"
            alt="relative2 "
          ></img>
          
          <button
  className="absolute px-5 py-1 rounded-full border-2 left-10"
  style={{ bottom: '15px' }}
>
  FRESH FISHES AVAILABLE HERE
</button>

        </div>
      </div>
    </div>
  );
}

export default Cards;
