import MobileHeader from '../components/MobileHeader';

export default function Home() {
  return (

    <div>
      <div className="bg-regal-blue">

        <div className="flex">
          <a href="#">   <svg className="text-white h-4 w-4 mt-2 ml-2" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg></a>
          <img className="h-6 w-8 mt-1 ml-2" src={"data:image/png;base64,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"} />
          <span className="px-3 py-1  text-white  ">Add delivery address</span>

        </div>
      </div>
      <div className="h-auto w-96 bg-teal-700 mt-6   px-4">
        <input type="text" name="name" placeholder="  Full Name(Required)*" className=" px-2 outline-none rounded h-12   w-full border border-gray-200 " />
        <input type="text" name="name" placeholder=" Phone number(Required)*" className="  px-2 outline-none rounded h-12 w-full border border-gray-200 mt-6" />
        <p className="text-regal-blue mt-4 text-sm">+Add Alter Phone Number</p>
        <div className="flex justify-between mt-4">
          <div>
            <input className="px-2 border-2 w-40 h-12 rounded outline-none" type="text" placeholder=" Pincode(Required)*" />
          </div>
          <a href="">
            <div className="flex bg-regal-blue h-8 w-44 mt-3 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-white ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-white mt-1 text-sm ml-1">Use my location</p>
            </div>
          </a>
        </div>



        <div className="flex justify-between mt-4" >
          <div >
            <input className=" px-2 border border-gray-200 h-12 w-40 outline-none" type="text" placeholder="  State(Required)*" />
          </div>
          <div className="flex border">
            <input className="px-2 h-12 w-36 outline-none " type="text" placeholder="  City(Required)*" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mt-4 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="mt-6" >
          <input type="text" placeholder="  House No., Building Name(Required)*" className="px-2 rounded border border-gray-200 h-12 w-full outline-none" />
        </div>

        <div className="border border-gray-200 mt-6">
          <div className="flex">
            <input type="text" placeholder="  House No., Building Name(Required)*" className="px-2 rounded  h-12 w-full  outline-none" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mt-4 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-regal-blue text-sm">+Add Nearby Famous Shop/Mail/Landmark</p>
        </div>
        <div className="mt-6">
          <label className="text-gray-300 text-xl">Type of addess</label>
        </div>



        <div className="flex">
          <div className="  h-12 w-36   flex">

            <button className="text-xl flex border-2 rounded-2xl w-full focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-4 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xl mt-2">Home</span>

            </button>
          </div>
          <div className="rounded-2xl h-12 w-36  border border-2 mx-6 flex">

            <button className="text-xl flex w-full focus:outline-none rounded-2xl">

              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-4 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              <span className="text-xl mt-2">   Work</span>

            </button>

          </div>
        </div>



      </div>
    </div>
  );
}