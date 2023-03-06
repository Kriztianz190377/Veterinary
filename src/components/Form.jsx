import { useEffect, useState } from "react"
import Error from "./Error";

const Form = ({ patients, setPatients, patient, setPatient }) => {

  const [name, setName] = useState('');
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [symptom, setSymptom] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      const { name, owner, email, date, symptom, } = patient;
      setName(name);
      setOwner(owner);
      setEmail(email);
      setDate(date);
      setSymptom(symptom);
    }

  }, [patient])

  const generate = () => {
    const id = Date.now().toString(36) + Math.random().toString(36).substr(2)
    return id
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, owner, email, date, symptom].includes('')) {
      setError(true);
      return
    }
    setError(false);

    const patientObject = {
      name, owner, email, date, symptom,
    }

    if (patient.id) {
      //Edit patient
      patientObject.id = patient.id
      const patientsUpdates = patients.map(patientState => {
        return patientState.id === patient.id ? patientObject : patientState
      }
      )
      setPatients(patientsUpdates)
      setPatient({})
    } else {
      //New patient
      patientObject.id = generate();
      setPatients([...patients, patientObject]);

    }

    //Reset form
    setName('');
    setOwner('');
    setEmail('');
    setDate('');
    setSymptom('');
    setError('');

  }

  return (
    <div className='md:w-1/2 lg:w-2/5 '>
      <h2 className='font-black text-3xl text-center '>
        Patient Monitoring</h2>
      <p className='capitalize text-lg mt-5 text-center'>Add Patient and {''}
        <span className='text-indigo-600 font-bold  '>
          Manage Them</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className=' m-3 mt-5 py-10 px-5 bg-white shadow-md rounded-lg'>

        {error && <Error message='All fields are required !!!' />}

        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold '
            htmlFor="pet">
            Pet's Name :
          </label>
          <input
            id='pet'
            type="text"
            className='w-full mt-2 p-2 border shadow-md rounded-md'
            placeholder=''
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold '
            htmlFor="owner">
            Owner's Name :
          </label>
          <input
            id='owner'
            type="text"
            className='w-full mt-2 p-2 border shadow-md rounded-md'
            placeholder=''
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold '
            htmlFor="email">
            Email :
          </label>
          <input
            id='email'
            type="email"
            className='w-full mt-2 p-2 border shadow-md rounded-md'
            placeholder=''
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold '
            htmlFor="discharge">
            Medical Discharge :
          </label>
          <input
            id='discharge'
            type="date"
            className='w-full mt-2 p-2 border shadow-md rounded-md'
            placeholder=''
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold '
            htmlFor="symptom">
            Symptoms:
          </label>
          <textarea
            name="symptom"
            id="symptom"
            className='w-full mt-2 p-2 border shadow-md rounded-md'
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value={patient.id ? "Editing" : "Send"}
          className='bg-indigo-600 py-2 w-full uppercase rounded-md text-2xl 
        text-white font-bold hover:bg-indigo-700 transition-colors cursor-pointer'  />

      </form >

    </div>
  )
}

export default Form
