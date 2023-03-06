
const Error = ({message}) => {
  return (
    <div className="bg-red-800 rounded-md mb-3">
            <p className="text-white font-bold text-2xl text-center py-2  uppercase">
            {message}</p>
          </div>
  )
}

export default Error
