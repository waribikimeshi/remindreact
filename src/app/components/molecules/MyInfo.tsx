import React  from 'react'

interface IMyInfoProps{
    info: string;
}

const MyInfo = ({info}:IMyInfoProps) => {
  return (
    <>
      <div style={{ color: 'green', marginBottom: '20px' }}>
          {info}
      </div>      
    </>
  )
}

export default MyInfo
