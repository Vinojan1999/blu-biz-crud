import React from 'react'

const DeviceTable = ({ deviceDetails, setDeviceDetails }) => {
    console.log(deviceDetails);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/device/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setDeviceDetails((prevDeviceList) => prevDeviceList.filter((device) => device.id !== id));
                window.alert('Device deleted successfully')
            } else {
                console.error('Failed to delete device');
            }
        } catch (error) {
            console.error("DELETE_ERROR:", error);
        }
    }

  return (
    <div className='bg-white mt-5'>
        <table className='w-full border-collapse overflow-auto'>
            <thead className='bg-gray-200 text-gray-700 py-1 px-2'>
                <tr className=''>
                    <th className='font-semibold'>Vahicle No</th>
                    <th className='font-semibold'>Device IMEI</th>
                    <th className='font-semibold'>Connection No</th>
                    <th className='font-semibold'>Last Updated</th>
                    <th className='font-semibold'>Level</th>
                    <th className='font-semibold'>Renewal Date</th>
                    <th className='font-semibold'>Top-up Date</th>
                    <th className='font-semibold'>Action</th>
                </tr>
            </thead>
            <tbody>
                {deviceDetails && deviceDetails.map((device, index) => (
                    <tr key={index}>
                        <td>{device.name}</td>
                        <td>{device.imei}</td>
                        <td>{device.connection_no}</td>
                        <td>{device.updatedAt}</td>
                        <td>{device.level_no}</td>
                        <td>{device.renewal_at}</td>
                        <td>{device.topup_validity}-{device.topup_validity_option}</td>
                        <td>
                            <button 
                                className='p-1.5 rounded-full hover:bg-gray-200'
                                onClick={() => handleDelete(device.id)}
                            >
                                <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z"/>
                                </svg>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default DeviceTable