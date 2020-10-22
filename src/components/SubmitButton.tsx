import React from 'react'
import './SubmitButton.css'

const SubmitButton: React.FunctionComponent<{pending: boolean}> = ({pending}) => {
  return (
    <div className='submit-button-container'>
      <button className={pending ? 'submit-button--progress' : 'submit-button'} type='submit'/>
    </div>
  )
}

export default SubmitButton