import { useState } from 'react';

const DialogForm = ({ onClose }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    }

  return (
    <div className='absolute top-0 left-0 w-full h-min-full py-20 bg-black/20 backdrop-blur-[2px] flex justify-center items-center z-10'>
        <form className='w-[50%] bg-white p-6' onSubmit={handleSubmit}>
            <div className='flex justify-between items-start'>
                <h1 className='font-normal text-xl'>Add New Device</h1>
                <button onClick={onClose}>
                    <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/>
                    </svg>
                </button>
            </div>
            <hr className='mt-3 mb-5'/>

            <div className='flex flex-col gap-6'>
                <div className='flex flex-row gap-6'>
                    <label className='w-full text-gray-600 font-normal text-sm'>
                        Device Name
                        <input
                            type="text"
                            value=''
                            onChange={() => {}}
                            placeholder='Name'
                            className='h-10 px-4 mt-3 block w-full text-gray-600 border border-gray-400 rounded-md text-sm'
                        />
                    </label>
                    <label className='w-full text-gray-600 font-normal text-sm'>
                        Device Type
                        <select 
                            name="type" 
                            id="type"
                            className='h-10 px-4 mt-3 block w-full text-gray-600 border border-gray-400 rounded-md text-sm bg-white'
                        >
                            <option value="android">Android Mobile</option>
                            <option value="ios">iOS Mobile</option>
                        </select>
                    </label>
                </div>
                <div className='flex flex-row gap-6'>
                    <label className='w-full text-gray-600 font-normal text-sm'>
                        Device IMEI
                        <input
                            type="text"
                            value=''
                            onChange={() => {}}
                            placeholder='IMEI'
                            className='h-10 px-4 mt-3 block w-full text-gray-600 border border-gray-400 rounded-md text-sm'
                        />
                    </label>
                    <label className='text-gray-600 w-56 font-normal text-sm'>
                        Device Icon
                        <div className='px-5 mt-3 h-10 flex justify-start items-center w-fit border border-gray-400'>
                            <svg width="25" height="25" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#939598" d="M0 34h36v2H0z"/>
                                <path fill="#58595B" d="M10 32a3 3 0 1 0-6 0a3 3 0 0 0 6 0z"/>
                                <path fill="#292F33" d="M9 32a2 2 0 1 0-4 0a2 2 0 0 0 4 0z"/>
                                <circle cx="29" cy="32" r="3" fill="#58595B"/>
                                <circle cx="29" cy="32" r="2" fill="#292F33"/>
                                <path fill="#E6E7E8" d="M34 2H2a1 1 0 0 1 0-2h32a1 1 0 1 1 0 2z"/>
                                <path fill="#66757F" d="M22.998 4.944a1.002 1.002 0 0 0-.373-.726l-3.683-2.945a.98.98 0 0 0-.162-.898a.988.988 0 0 0-1.281-.221a.987.987 0 0 0-1.281.221a.979.979 0 0 0-.162.898l-3.682 2.945a1.001 1.001 0 0 0-.083 1.488l3.835 3.834A.987.987 0 0 0 17 11a.991.991 0 0 0 .5-.155c.156.091.324.155.5.155a.987.987 0 0 0 .872-1.458l3.835-3.835a.998.998 0 0 0 .291-.763zM17.5 8.085l-3.003-3.003L17.5 2.68l3.003 2.403L17.5 8.085z"/>
                                <path fill="#BCBEC0" d="M30 10a2 2 0 0 1-2 2H8a2 2 0 0 1 0-4h20a2 2 0 0 1 2 2z"/>
                                <path fill="#E6E7E8" d="M36 22a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v8zM0 28h36v4H0z"/>
                                <path fill="#BE1931" d="M0 14h36v14H0z"/>
                                <path fill="#DD2E44" d="M36 14H0v10h6v6h7v-6h10v6h7v-6h6z"/>
                                <path fill="#55ACEE" d="M2 16H0v10h2a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm34 0h-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2V16zm-15 6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4zm-9 1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5zm17 0a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5z"/>
                                <path fill="#A0041E" d="M0 28h36v2H0z"/>
                            </svg>
                        </div>
                    </label>
                </div>
                <div className='flex flex-row gap-6'>
                    <label className='w-full text-gray-600 font-normal text-sm'>
                        Vahicle No
                        <input
                            type="text"
                            value=''
                            onChange={() => {}}
                            className='h-10 px-4 mt-3 block w-full text-gray-600 border border-gray-400 rounded-md text-sm'
                        />
                    </label>
                    <label className='w-full text-gray-600 font-normal text-sm'>
                        Connection No
                        <input
                            type="text"
                            value=''
                            onChange={() => {}}
                            className='h-10 px-4 mt-3 block w-full text-gray-600 border border-gray-400 rounded-md text-sm'
                        />
                    </label>
                </div>
                <div className='flex flex-row gap-6'>
                    <label className='text-gray-600 font-normal text-sm w-96'>
                        Renewal Date
                        <input 
                            type="date" 
                            id="renewal" 
                            name="renewal"
                            className='h-10 px-4 mt-3 block w-full text-gray-600 border border-gray-400 rounded-md text-sm'
                        />
                    </label>
                    <label className='w-full text-gray-600 font-normal text-sm'>
                        TopUp Validity
                        <div className='flex flex-row gap-4'>
                            <input
                                type="text"
                                value=''
                                onChange={() => {}}
                                className='h-10 px-4 mt-3 block w-full text-gray-600 border border-gray-400 rounded-md text-sm'
                            />
                            <select 
                                name="type" 
                                id="type"
                                className='h-10 px-4 mt-3 block text-gray-600 border border-gray-400 rounded-md text-sm bg-white'
                            >
                                <option value="day">Days</option>
                                <option value="month">Months</option>
                            </select>
                        </div>
                    </label>
                </div>
                <div className='flex flex-row gap-6'>
                    <label className='w-full text-gray-600 font-normal text-sm'>
                        Speed Limit (km/h)
                        <input
                            type="text"
                            value='0'
                            onChange={() => {}}
                            className='h-10 px-4 mt-3 block w-full text-gray-600 border border-gray-400 rounded-md text-sm'
                        />
                    </label>
                    <label className='w-full text-gray-600 font-normal text-sm'>
                        Avarage Fuel Consumption (km/l)
                        <input
                            type="text"
                            value='0'
                            onChange={() => {}}
                            className='h-10 px-4 mt-3 block w-full text-gray-600 border border-gray-400 rounded-md text-sm'
                        />
                    </label>
                </div>
                <div className='flex flex-row gap-6'>
                    <label className='w-96 text-gray-600 font-normal text-sm'>
                        Level No
                        <select 
                            name="type" 
                            id="type"
                            className='h-10 px-4 mt-3 block w-full text-gray-600 border border-gray-400 rounded-md text-sm bg-white'
                        >
                            <option value="">None</option>
                            <option value="level1">Level 1</option>
                            <option value="level2">Level 2</option>
                        </select>
                    </label>
                    <label className='w-full text-gray-600 font-normal text-sm'>
                        Selected Level
                        <select 
                            name="type" 
                            id="type"
                            className='h-10 px-4 mt-3 block w-full text-gray-600 border border-gray-400 rounded-md text-sm bg-white'
                        >
                            <option value=""></option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advance">Advance</option>
                        </select>
                    </label>
                </div>
                <div className='flex flex-row gap-6'>
                    <label className='w-full text-gray-600 font-normal text-sm'>
                        GPS Data Sync Interval (min)
                        <input
                            type="number"
                            value='30'
                            onChange={() => {}}
                            className='h-10 px-4 mt-3 block w-36 text-gray-600 border border-gray-400 rounded-md text-sm'
                        />
                    </label>
                    <label className='w-full text-gray-600 font-normal text-sm'>
                        Idling Time (min)
                        <input
                            type="number"
                            value='5'
                            onChange={() => {}}
                            className='h-10 px-4 mt-3 block w-36 text-gray-600 border border-gray-400 rounded-md text-sm'
                        />
                    </label>
                </div>
            </div>

            <div className='flex justify-end'>
                <button type='submit' className='flex gap-4 py-2 pl-8 pr-6 mt-10 rounded-md bg-green-600 text-white'>
                    Create New Device
                    <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/>
                    </svg>
                </button>
            </div>
        </form>
    </div>
  )
}

export default DialogForm