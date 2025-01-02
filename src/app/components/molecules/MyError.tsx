import React, { MouseEventHandler } from 'react'

interface IMyErrorProps{
    error: string;
    handleRetry?: MouseEventHandler<HTMLButtonElement>;
}

const MyError = ({error,handleRetry}:IMyErrorProps) => {
  return (
    <>
    <div style={{ color: 'red', marginBottom: '20px' }}>
        {error}
        {handleRetry && (
            <button onClick={handleRetry} style={{ marginLeft: '10px' }}>再試行</button>
        )}
    </div>

      
    </>
  )
}

export default MyError
