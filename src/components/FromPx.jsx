import { useState, useEffect } from 'react';
import Error from './Error';


const FormPx = ({ patients, setPatients, patient, setPatient }) => {
    const [namePet, setNamePet] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [email, setEmail] = useState("");
    const [discharge, setDischarge] = useState("");
    const [symptoms, setSymptoms] = useState("");

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(patient).length > 0) {
            setNamePet(patient.namePet);
            setOwnerName(patient.ownerName);
            setEmail(patient.email);
            setDischarge(patient.discharge);
            setSymptoms(patient.symptoms);

        }

    }, [patient]);



    const generarId = () => {
        const ramdom = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36);
        return ramdom + date;


    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //form validation;
        if ([namePet, ownerName, email, discharge, symptoms].includes('')) {

            setError(true);
            return;
        }
        setError(false);

        const objectPatients = {
            namePet,
            ownerName,
            email,
            discharge,
            symptoms,            
        }

        if(patient.id){
            //editing record
            objectPatients.id=patient.id;            

            const patientsUpdated = patients.map((patientUpdate) => patientUpdate.id===
                patient.id ? objectPatients : patientUpdate 
            )
            setPatients(patientsUpdated)
            setPatient({})
            
        }else{
            //nuevo registro
            objectPatients.id = generarId();            
            setPatients([...patients, objectPatients]);
        }


        

        //restart the form
        setNamePet("");
        setOwnerName("");
        setEmail("");
        setDischarge("");
        setSymptoms("");
    }
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Patient Monitoring</h2>
            <p className="text-lg mt-5 text-center mb-10">Add Patient  and {' '}
                <span className="text-indigo-600 font-bold">Manage-them</span>
            </p>
            <form
                onSubmit={handleSubmit}
                className="shadow-md rounded-lg py-10 px-5 mb-10 bg-white"
            >
                {error && <Error><p>All fields are required </p> </Error>}

                <div className="mb-5">
                    <label
                        className="block text-gray-700 font-bold uppercase"
                        htmlFor="namePet"> Pet Name : </label>
                    <input
                        className="border-2 rounded-md pl-3 w-full mt-3 placeholder:text-gray-400"
                        type="text"
                        placeholder="Pet's name"
                        name="namePet"
                        id="namePet"
                        value={namePet}
                        onChange={(e) => setNamePet(e.target.value)}
                    />

                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 font-bold uppercase"
                        htmlFor="ownerName">Owner Name : </label>
                    <input
                        className="border-2 rounded-md pl-3 w-full mt-3 placeholder:text-gray-400"
                        type="text"
                        placeholder="Owner's Name"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        name="ownerName"
                        id="ownerName" />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 font-bold uppercase"
                        htmlFor="email">Email : </label>
                    <input
                        className="border-2 rounded-md pl-3 w-full mt-3 placeholder:text-gray-400"
                        type="email"
                        placeholder="Owner Contact Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="email" />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 font-bold uppercase"
                        htmlFor="discharge">Hospital Discharge : </label>
                    <input
                        className="border-2 rounded-md pl-3 w-full mt-3 placeholder:text-gray-400"
                        type="date"
                        value={discharge}
                        onChange={(e) => setDischarge(e.target.value)}
                        name="discharge"
                        id="discharge" />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 font-bold uppercase"
                        htmlFor="symptoms">Symptoms : </label>
                    <textarea
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        name="symptoms"
                        id="symptoms"
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                        placeholder="Describe symptoms">

                    </textarea>
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 border-2 w-full p-3 rounded-md text-white uppercase font-bold tracking-wider cursor-pointer transition-all 
                    hover:bg-indigo-700 hover:text-zinc-50"
                    value={ patient.id ? "Edit Patient" : "Add Patient"}  />


            </form>
        </div>
    );
}

export default FormPx;

