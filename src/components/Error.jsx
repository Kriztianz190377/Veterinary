import React from 'react'

const Error = ({children}) => {
    return (
        <div className="bg-red-700 text-white font-semibold uppercase 
                    text-center py-3 mb-5 rounded-md text-xl">
            {children}
        </div>
    )
}

export default Error
