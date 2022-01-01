


const Patient = ({ patient, setPatient, removePatient }) => {
    

    const { namePet, ownerName, email, discharge, symptoms, id } = patient;

    const handleRemove=()=>{

        const answer = confirm('You want to delete this patient')
        
        if (answer){
            removePatient(id);
        }

    }

    return (
        <div>
            <div className="bg-white shadow-md mx-5 px-5 py-10 rounded-xl mb-20">
                <p className="font-bold text-gray-700 mb-3 uppercase ">Name:{' '}
                    <span className="normal-case font-normal ">{namePet}</span>
                </p>
                <p className="font-bold text-gray-700 mb-3 uppercase ">owner:{' '}
                    <span className="normal-case font-normal ">{ownerName}</span>
                </p>
                <p className="font-bold text-gray-700 mb-3 uppercase ">Email:{' '}
                    <span className="normal-case font-normal ">{email}</span>
                </p>
                <p className="font-bold text-gray-700 mb-3 uppercase ">HOSPITAL DISCHARGE:{' '}
                    <span className="normal-case font-normal ">{discharge}</span>
                </p>
                <p className="font-bold text-gray-700 mb-3 uppercase ">SYMPTOMS:{' '}
                    <span className="normal-case font-normal ">{symptoms}</span>
                </p>
                <p className="font-bold text-gray-700 mb-3 uppercase ">id : {id}

                </p>

                <div className="flex justify-between">
                    <button
                        type="button"
                        className="bg-indigo-600 border-2 mt-10 w-1/3 py-2 px-10  rounded-md text-white uppercase font-bold tracking-wider cursor-pointer transition-all 
                    hover:bg-indigo-700 hover:text-zinc-50"
                    onClick={()=> setPatient(patient)}
                    >Edit</button>


                    <button
                        type="submit"
                        className="bg-red-600 border-2 w-1/3 py-2 px-10 mt-10 rounded-md text-white uppercase font-bold tracking-wider cursor-pointer transition-all 
                            hover:bg-indigo-700 hover:text-zinc-50"
                        onClick={handleRemove}
                        
                    >Remove</button>

                </div>

            </div>


        </div>
    )
}

export default Patient;
