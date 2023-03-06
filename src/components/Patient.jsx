import React from 'react'

const Patient = ({ patient, setPatient, deletePatient }) => {


    const { name, owner, email, date, symptom } = patient;


    const handleDelete=()=>{

        const erasePatient=confirm('You Want Delete this patient')        
        if(erasePatient){
            deletePatient(patient.id)
        }
    }
    return (
        <div className='m-3 mt-5 py-10 px-5 bg-white shadow-md rounded-lg'>
            <p className='font-bold mb-3 text-gray-700 uppercase '>name:{' '}
                <span className='font-normal capitalize'>
                    {name}
                </span></p>

            <p className='font-bold mb-3 text-gray-700 uppercase '>owner:{' '}
                <span className='font-normal capitalize'>
                    {owner}
                </span></p>

            <p className='font-bold mb-3 text-gray-700 uppercase '>email:{' '}
                <span className='font-normal capitalize'>
                    {email}
                </span></p>

            <p className='font-bold mb-3 text-gray-700 uppercase '>Medical Discharge :{' '}
                <span className='font-normal capitalize'>
                    {date}
                </span></p>

            <p className='font-bold mb-3 text-gray-700 uppercase '>symptoms:{' '}
                <span className='font-normal capitalize'>
                    {symptom}
                </span></p>
            <div className='flex justify-between mt-10'>
                <button
                    type="button"
                    className='py-2 px-10 rounded-md bg-indigo-600 hover:bg-indigo-700 
                    text-white font-bold uppercase'
                    onClick={() => setPatient(patient)}
                >
                    Edit</button>

                <button
                    type="button"
                    className='py-2 px-10 rounded-md bg-red-600 hover:bg-red-700  
                    text-white font-bold uppercase '
                    onClick={handleDelete}

                >Delete</button>

            </div>


        </div>
    )
}

export default Patient
