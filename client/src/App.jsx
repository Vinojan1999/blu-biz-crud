import { useState, useEffect } from 'react';
import DialogForm from './components/DialogForm';
import DeviceTable from './components/DeviceTable';

function App() {
  const [deviceDetails, setDeviceDetails] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const fetchData = async () => {
    try {
      const data = await fetch('http://localhost:8080/api/device/', { 
        method: 'GET' 
      });
      const jsonResult = await data.json();

      setDeviceDetails(jsonResult);
    } catch (error) {
      console.error("DATA_FETCH_ERROR:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  

  const handleButton = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <main>
      <section className='w-full min-h-screen flex justify-center items-center bg-white'>
        <div className='w-[95%] md:p-6 p-3 drop-shadow-2xl bg-white rounded-md'>
          <div className='flex max-md:px-2 max-md:mt-2 justify-between items-start'>
            <h1 className='text-gray-800 font-normal text-2xl'>Devices</h1>
            <button 
              className='py-1.5 px-4 drop-shadow-2xl bg-white border border-gray-600 rounded-md flex gap-1' 
              onClick={handleButton}
            >
              <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/>
              </svg>
              Add New Device
            </button>
          </div>

          <DeviceTable deviceDetails={deviceDetails} setDeviceDetails={setDeviceDetails} />
        </div>
      </section>

      {isOpen && (
        <DialogForm 
          onClose={handleClose}
        />
      )}
    </main>
  )
}

export default App
