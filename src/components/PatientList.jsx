
import Patient from './Patient'


const PatientList = ({ patients, setPatient, removePatient }) => {
    
    
    return (
        <div className=" md:w-1/2  lg:w-3/5  md:h-screen overflow-y-scroll">

            {patients && patients.length ? (

                <>
                    <h2 className="font-black text-3xl text-center">
                        List of patients
                    </h2>
                    <p className="text-lg mt-5 text-center mb-10">Manage Your {' '}
                        <span className="text-indigo-600 font-bold">Patients And Appointments</span>
                    </p>

                    {patients.map((patient) => {
                        return <Patient
                            key={patient.id}
                            patient={patient}
                            setPatient={setPatient}
                            removePatient={removePatient}
                        />

                    })}
                </>

            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">
                            No Patients
                    </h2>
                        <p className="text-lg mt-5 text-center mb-10">Add {' '}
                        <span className="text-indigo-600 font-bold">Patients And Appointments</span>
                    </p>

                </>

            )

            }




        </div>
    )
}

export default PatientList;
