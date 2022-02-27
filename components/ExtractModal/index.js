import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { isVisible } from '../../store/reducers/extract'
import { buildExtract } from '../../utils/formatExtract'

export const ExtracModal = ({ id }) => {
  const extract = useSelector((state) => state.extract)
  const dispatch = useDispatch()

  const handleModal = () => {
    document.querySelector(`input#${id}`).click()
    dispatch(isVisible(false))
  }

  const handleClipBoard = () => {
    const copyText = document.getElementById('extract-code')

    navigator.clipboard.writeText('```' + copyText.innerHTML + '```')

    toast('Extrato copiado!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }

  useEffect(() => {
    if (extract.visible) {
      handleModal()
    }
  }, [extract.visible])

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="flex w-full align-center relative">
            <h3 className=" w-full font-bold text-lg text-center mb-6">Este é o extrato da <span className="text-primary">{id.toLocaleUpperCase()}</span></h3>
            <button className="btn btn-circle btn-ghost absolute right-[-10px] top-[-10px]" onClick={() => handleModal()}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="mockup-code text-white">
            <pre><code id="extract-code" dangerouslySetInnerHTML={{ __html: buildExtract({ operation: id.toLocaleUpperCase(), ...extract }) }}></code></pre>
          </div>

          <div className="modal-action">
            <label className="btn" onClick={() => handleClipBoard()}>Copiar Extrato</label>
          </div>
        </div>
      </div>
    </>
  )
}
