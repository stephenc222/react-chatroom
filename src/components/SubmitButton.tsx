import React from 'react'
import './SubmitButton.css'

const SubmitButton: React.FunctionComponent = () => {
  return (
    <div className='submit-button-container'>
      {/* <button className='submit-button--progress' type='submit'/> */}
      <button className='submit-button' type='submit'/>
    </div>
  )
}

export default SubmitButton