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

          <div className="bg-base-200 rounded-2xl text-white overflow-x-auto relative">
            <div data-tip="Copiar Extrato" className="absolute right-2 top-2 tooltip tooltip-left tooltip-primary">
              <button className="btn btn-square btn-sm" onClick={() => handleClipBoard()}>
                <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z">
                  </path>
                </svg>
              </button>
            </div>
            <pre>
              <code id="extract-code" dangerouslySetInnerHTML={{ __html: buildExtract({ operation: id.toLocaleUpperCase(), ...extract }) }}>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </>
  )
}
