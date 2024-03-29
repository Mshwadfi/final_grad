import React from 'react';

const CourseCard = ({ course }) => {
    const { name, description, thumbnail } = course;

    return (
        <div className='w-72  h-auto rounded-xl overflow-hidden shadow-md m-4 bg-white hover:shadow-lg cursor-pointer'>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
                <div className="relative h-56 overflow-hidden bg-blue-gray-500 shadow-lg bg-clip-border rounded-t-xl">
                    <img src={thumbnail} alt="card-image" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                    <h5 className="block mb-2 font-sans text-xl font-semibold leading-snug text-blue-gray-900 text-center">
                        {name}
                    </h5>
                    <p className="block font-sans text-base leading-relaxed text-gray-700 text-center">
                        {description}
                    </p>
                </div>
                <div className="p-6 pt-0 flex justify-center items-center">
                    <button className="font-bold uppercase text-xs py-3 px-6 rounded-lg bg-[#18A9EA] text-white hover:bg-[#4b9cc2]">
                        manage course
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
