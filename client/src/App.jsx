import { useState } from 'react';
import DialogForm from './components/DialogForm';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButton = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <h1 className='text-red-500 text-3xl font-semibold'>
        Hello Vinojan
      </h1>

      <button 
        className='py-3 px-8 bg-blue-800 text-white' 
        onClick={handleButton}
      >
        Add New
      </button>

      {isOpen && (
        <DialogForm 
          onClose={handleClose}
        />
      )}
    </>
  )
}

export default App
