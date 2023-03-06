
import Patient from './Patient';

const PatientList = ({ patients, setPatient,deletePatient }) => {



    return (
        <div className='md:w-1/2 lg:w-3/5  md:h-screen overflow-y-scroll'>

            {patients && patients.length ? (
                <>
                    <h2 className='font-black text-3xl text-center'>
                        Patient List</h2>
                    <p className='capitalize text-lg mt-5 text-center'>manage your {''}
                        <span className='text-indigo-600 font-bold'>patients and appointments</span></p>
                    {patients.map((patient) => {                       
                        return (
                            <Patient
                                key={patient.id}
                                patient={patient}
                                setPatient={setPatient}
                                deletePatient={deletePatient}
                            />)
                    })}
                </>
            ) : (

                <>
                <h2 className='font-black text-3xl text-center'>
                No Patients</h2>
                    <p className='capitalize text-lg mt-5 text-center'>enter your {''}
                        <span className='text-indigo-600 font-bold'>patients and appointments</span></p>
                </>
                
            )}

        </div>

    )
}

export default PatientList;
