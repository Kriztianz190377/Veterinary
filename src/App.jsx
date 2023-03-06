
import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"
import { useEffect, useState } from "react"

function App() {
  const [patients, setPatients] = useState(()=>JSON.parse(localStorage.getItem('patients'))??[])
  const [patient, setPatient] = useState({})


  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const deletePatient = id => {
    const patientUpdate = patients.filter(patient => patient.id !== id)
    setPatients(patientUpdate)
  }
  return (
    <div className="container mx-auto justify-between mt-20">
      <Header />
      <div className="md:flex  mt-12">

        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
