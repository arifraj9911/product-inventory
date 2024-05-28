const Banner = () => {
  return (
    <div>
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
            Track, Manage, and Optimize Your Stock with Ease
          </h1>
          <p className="mt-6 text-gray-500 ">
            Real-time inventory tracking and efficient management to streamline
            your stock and boost efficiency
          </p>
          <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
            Manage Orders
          </button>
        </div>

        <div className="flex justify-center mt-10">
          <img
            className="object-cover w-full h-full rounded-xl lg:w-4/5"
            src="https://i.ibb.co/1vXTfcc/2148902549.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
