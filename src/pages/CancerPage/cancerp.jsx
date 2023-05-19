import React from "react";
import { Carousel } from "@material-tailwind/react";
import carousel1 from "../../assets/images/sarcoma.jpg"
import carousel2 from "../../assets/images/sarcomathree.jpg"
import blogimg1 from "../../assets/images/blogimg1.jpg"
import blogimg2 from "../../assets/images/blogimg2.jpg"
import blogimg3 from "../../assets/images/blogimg3.jpg"

const cancerp = () => {
  return (
    <>
      <div className="bg-orange-50">
        {/* // ----------CAROUSEL MODULE--------- */}
        <Carousel className="">
          <img
            src={carousel1}
            alt="image 1"
            className="h-81 w-full object-cover"
          />
          <img
            src={carousel2}
            alt="image 2"
            className="h-81 w-full object-cover"
          />
        </Carousel>

        {/* // ----------BLOGS MODULE--------- */}

        <h1 className='font-bold text-center text-black text-6xl uppercase my-4'>LATEST BLOGS</h1>
        <div class="min-h-screen flex items-center justify-center">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div class="max-w-lg mx-auto">
              <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                <a href="#">
                  <img class="rounded-t-lg" src={blogimg1} alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">The importance of early detection: How screening and testing can catch cancer before it spreads and the importance of regular check-ups.</h5>
                  </a>
                  <p class="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a class="text-white bg-[#57D840] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div class="max-w-lg mx-auto">
              <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                <a href="#">
                  <img class="rounded-t-lg" src={blogimg2} alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Cancer prevention: Exploring healthy lifestyle choices and habits that may reduce the risk of developing cancer.</h5>
                  </a>
                  <p class="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Check now</p>
                  <a class="text-white bg-[#57D840] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div class="max-w-lg mx-auto">
              <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                <a href="#">
                  <img class="rounded-t-lg" src={blogimg3} alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Cancer research and breakthroughs: Highlighting the latest advancements in cancer research and treatment options.</h5>
                  </a>
                  <p class="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Check it now.</p>
                  <a class="text-white bg-[#57D840] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div class="max-w-lg mx-auto">
              <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                <a href="#">
                  <img class="rounded-t-lg" src={blogimg1} alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">The importance of early detection: How screening and testing can catch cancer before it spreads and the importance of regular check-ups.</h5>
                  </a>
                  <p class="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a class="text-white bg-[#57D840] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default cancerp;