import React from 'react';
import { FaCartPlus, FaStarOfLife } from 'react-icons/fa';
import './TopCourses.css';

const TopCourses = () => {
  return (
    <>
    <div className="w-full pt-20">
      <h2 className="text-7xl font-extrabold text-center text-shadow-xl">
        Top Online Courses
      </h2>

      <p className="text-center text-lg mt-5 text-gray-900">
        The world’s largest selection of courses choose from 130,000 online video <br /> courses with new additions published every month
      </p>

      <div className="w-full px-4 my-20 flex justify-start gap-5 overflow-x-auto custom-scrollbar">
        {/* course 1 */}
        <div className="w-[300px] flex flex-shrink-0 flex-col">
          <div className="w-full h-[200px] overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="course"
              className="w-full h-full object-cover hover:scale-[1.1] transition-all duration-300"
            />
          </div>
          <div>
            <h3>Effective budgeting and ...</h3>
            <div className="flex items-center justify-start gap-5">
              <p className="flex items-center gap-2">
                4/5 <FaStarOfLife className="text-yellow-500" />
              </p>
              <FaCartPlus className="text-red-600" />
            </div>
            <div className="flex items-center justify-between gap-5">
              <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">John Doe</p>
              <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">5 Students</p>
            </div>
          </div>
        </div>

        <div className="w-[300px] flex flex-shrink-0 flex-col">
          <div className="w-full h-[200px]">
            <img
              src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="course"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3>Effective budgeting and ...</h3>
            <div className="flex items-center justify-start gap-5">
              <p className="flex items-center gap-2">
                4/5 <FaStarOfLife className="text-yellow-500" />
              </p>
              <FaCartPlus className="text-red-600" />
            </div>
            <div className="flex items-center justify-between gap-5">
              <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">John Doe</p>
              <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">5 Students</p>
            </div>
          </div>
        </div>


        <div className="w-[300px] flex flex-shrink-0 flex-col">
          <div className="w-full h-[200px]">
            <img
              src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="course"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3>Effective budgeting and ...</h3>
            <div className="flex items-center justify-start gap-5">
              <p className="flex items-center gap-2">
                4/5 <FaStarOfLife className="text-yellow-500" />
              </p>
              <FaCartPlus className="text-red-600" />
            </div>
            <div className="flex items-center justify-between gap-5">
              <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">John Doe</p>
              <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">5 Students</p>
            </div>
          </div>
        </div>


        <div className="w-[300px] flex flex-shrink-0 flex-col">
          <div className="w-full h-[200px]">
            <img
              src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="course"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3>Effective budgeting and ...</h3>
            <div className="flex items-center justify-start gap-5">
              <p className="flex items-center gap-2">
                4/5 <FaStarOfLife className="text-yellow-500" />
              </p>
              <FaCartPlus className="text-red-600" />
            </div>
            <div className="flex items-center justify-between gap-5">
              <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">John Doe</p>
              <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">5 Students</p>
            </div>
          </div>
        </div>


        <div className="w-[300px] flex flex-shrink-0 flex-col">
          <div className="w-full h-[200px]">
            <img
              src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="course"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3>Effective budgeting and ...</h3>
            <div className="flex items-center justify-start gap-5">
              <p className="flex items-center gap-2">
                4/5 <FaStarOfLife className="text-yellow-500" />
              </p>
              <FaCartPlus className="text-red-600" />
            </div>
            <div className="flex items-center justify-between gap-5">
              <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">John Doe</p>
              <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">5 Students</p>
            </div>
          </div>
        </div>


        <div className="w-[300px] flex flex-shrink-0 flex-col">
          <div className="w-full h-[200px]">
            <img
              src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="course"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3>Effective budgeting and ...</h3>
            <div className="flex items-center justify-start gap-5">
              <p className="flex items-center gap-2">
                4/5 <FaStarOfLife className="text-yellow-500" />
              </p>
              <FaCartPlus className="text-red-600" />
            </div>
            <div className="flex items-center justify-between gap-5">
              <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">John Doe</p>
              <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">5 Students</p>
            </div>
          </div>
        </div>



        <div className="w-[300px] flex flex-shrink-0 flex-col">
          <div className="w-full h-[200px]">
            <img
              src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="course"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3>Effective budgeting and ...</h3>
            <div className="flex items-center justify-start gap-5">
              <p className="flex items-center gap-2">
                4/5 <FaStarOfLife className="text-yellow-500" />
              </p>
              <FaCartPlus className="text-red-600" />
            </div>
            <div className="flex items-center justify-between gap-5">
              <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">John Doe</p>
              <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">5 Students</p>
            </div>
          </div>
        </div>
        {/* Add other courses similarly */}
      </div>


      <div className='w-full flex justify-center my-10'>
      <button className="bg-red-600 text-white px-6 py-4 rounded-md hover:bg-transparent hover:text-red-600 hover:border-red-600 hover:border-2">
        View All Courses
      </button>
      </div>


    </div>



    <div className='mx-auto w-full h-[60vh] md:h-[50vh] bg-white showdow-lg max-w-xl rounded-lg flex items-center justify-center flex-wrap gap-6  lg:gap-10 px-4 lg:px-0 lg:flex-nowrap' >

      <img src='https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='course' className='w-20 h-20 rounded-full object-center'    />

      <div className='flex flex-col gap-4 lg:gap-2' >
        <h1 className='text-2xl font-bold'>Become a instructor</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing <br/> elit. Quisquam, quos.</p>
        <button className='bg-red-600 text-white px-4 py-2 rounded-md w-fit'>
          Become a instructor
        </button>
      </div>
    </div>
  
    </>
  );
};

export default TopCourses;
