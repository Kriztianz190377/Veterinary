import { useState, useEffect } from 'react';

import FormPx from "./components/FromPx";
import Header from "./components/Header"
import PatientList from "./components/PatientList";

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getLS=()=>{
      const patientsLS=JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatients(patientsLS);
    }
    getLS();

  }, [])

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
    
  }, [patients])

  const removePatient = id => {
    const patientsUpdate = patients.filter(patient => patient.id !== id);
    setPatients(patientsUpdate);
  }

  return (
    <div className="container mx-auto mt-20 " >
      <Header />

      <div className="mt-12 md:flex">
        <FormPx
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          removePatient={removePatient}


        />
      </div>
    </div>
  )
}

export default App;
