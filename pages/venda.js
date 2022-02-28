/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
import { useFormik } from 'formik'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

import { ExtracModal } from '../components/ExtractModal'
import LayoutPage from '../components/Layout'
import { getScraps } from '../services/scraps'
import { isLoading, isVisible, reset, set } from '../store/reducers/extract'

const formSchema = Yup.object().shape({
  seller: Yup.string().required('Campo obrigatório.'),
  purchaser: Yup.string().required('Campo obrigatório.'),
  cardboard: Yup.number().moreThan(-1, 'Valor deve ser maior ou igual a zero.'),
  bottle: Yup.number().moreThan(-1, 'Valor deve ser maior ou igual a zero.'),
  glass: Yup.number().moreThan(-1, 'Valor deve ser maior ou igual a zero.'),
  tin: Yup.number().moreThan(-1, 'Valor deve ser maior ou igual a zero.'),
  wire: Yup.number().moreThan(-1, 'Valor deve ser maior ou igual a zero.'),
  rigidPlastic: Yup.number().moreThan(-1, 'Valor deve ser maior ou igual a zero.'),
  circuit: Yup.number().moreThan(-1, 'Valor deve ser maior ou igual a zero.'),
  antenna: Yup.number().moreThan(-1, 'Valor deve ser maior ou igual a zero.')
})

const initialForm = {
  seller: '',
  purchaser: '',
  cardboard: '',
  bottle: '',
  glass: '',
  tin: '',
  wire: '',
  rigidPlastic: '',
  circuit: '',
  antenna: ''
}

const Venda = ({ scraps }) => {
  const extract = useSelector((state) => state.extract)
  const dispatch = useDispatch()

  const [totalSale, setTotalSale] = useState({
    cardboard: 0,
    bottle: 0,
    glass: 0,
    tin: 0,
    wire: 0,
    rigidPlastic: 0,
    circuit: 0,
    antenna: 0,
    total: 0
  })

  const formik = useFormik({
    initialValues: initialForm,
    validationSchema: formSchema,
    onSubmit: ({ seller, purchaser, ...rest }) => {
      const extractResume = {}

      dispatch(isLoading(true))

      Object.keys(rest).forEach((key) => {
        extractResume[key] = {
          quantity: Number(rest[key]),
          value: totalSale[key]
        }
      })

      setTimeout(() => {
        dispatch(set({
          ...extractResume,
          total: totalSale.total,
          seller,
          purchaser
        }))

        dispatch(isLoading(false))
        dispatch(isVisible(true))
      }, 1000)
    }
  })

  const recalculate = () => {
    const prices = {}
    scraps.forEach(scrap => {
      prices[scrap.key] = formik.values[scrap.key] >= 0 ? scrap.sale_price * formik.values[scrap.key] : 0
    })

    const total = Object.values(prices).reduce((acc, current) => {
      return acc + current
    }, 0)

    setTotalSale({ ...prices, total })
  }

  useEffect(() => { recalculate() }, [formik.values])

  return (
    <LayoutPage>
      <Head>
        <title>Venda | Paradis Recycle</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="normal-case px-6">
        <h1 className="font-medium text-3xl text-center mb-4">Calculadora de <span className="text-primary font-bold">Venda</span></h1>
        <p className="text-lg text-center mb-2">Está tabela irá auxiliar no cálculo para a venda de itens recicláveis, disponíveis com o funcionário da Paradis Recycle.</p>
        <p className="text-lg text-center mb-10">Após o preencimento dos dados poderá ser gerado um extrado da venda realizada.</p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col md:flex-row px-4 md:px-0 w-full mx-auto mb-6 max-w-[700px] gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Insira o nome do Vendedor</span>
            </label>
            <input
              type="text"
              id="seller"
              name="seller"
              placeholder="Insira o nome"
              className="input input-bordered w-full"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.seller}
            />
            {formik.errors.seller && formik.touched.seller
              ? (
                <label className="label mb-0">
                  <span className="text-xs text-red-300">{formik.errors.seller}</span>
                </label>
              )
              : null}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Insira o nome do Comprador</span>
            </label>
            <input
              type="text"
              id="purchaser"
              name="purchaser"
              placeholder="Insira o nome"
              className="input input-bordered w-full"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.purchaser}
            />
            {formik.errors.purchaser && formik.touched.purchaser
              ? (
                <label className="label mb-0">
                  <span className="text-xs text-red-300">{formik.errors.purchaser}</span>
                </label>
              )
              : null}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full mx-auto max-w-[700px]">
            <thead>
              <tr>
                <th colSpan="2" className="text-xs md:text-base text-center bg-base-300 p-2 md:p-4 relative">Venda para cliente</th>
                <th className="text-xs md:text-base text-center bg-base-300 p-2 md:p-4">Quantidade</th>
                <th className="text-xs md:text-base text-center bg-base-300 p-2 md:p-4">Valor</th>
              </tr>
            </thead>
            <tbody >
              {scraps.map(scrap => (
                <tr key={scrap.id}>
                  <td className="text-xs md:text-base py-2 px-2 md:px-4">{scrap.name}</td>
                  <td className="text-xs md:text-base py-2 px-2 md:px-4">$ {scrap.sale_price.toFixed(2)}</td>
                  <td className="text-center py-2 px-2 md:px-4">
                    <div className="form-control">
                      <input
                        type="number"
                        min="0"
                        id={scrap.key}
                        name={scrap.key}
                        placeholder="Insira a quantidade"
                        className="input input-bordered w-full max-w-xs"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values[scrap.key]}
                      />
                      {formik.errors[scrap.key] && formik.touched[scrap.key]
                        ? (
                          <label className="label mb-0">
                            <span className="text-xs text-red-300">{formik.errors[scrap.key]}</span>
                          </label>
                        )
                        : null}
                    </div>
                  </td>
                  <td className="text-xs md:text-base text-center py-2 px-2 md:px-4">$ {totalSale[scrap.key].toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td className="bg-base-200"></td>
                <td className="bg-base-200"></td>
                <td className="text-xs md:text-base text-center py-2 px-2 md:px-4 bg-base-300">VALOR DA VENDA</td>
                <td className="text-xs md:text-base text-center py-2 px-2 md:px-4 bg-base-300 font-bold">$ {totalSale.total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex mt-10 w-full mx-auto max-w-[700px] justify-between">
          <label
            className='btn modal-button bg-secundary'
            onClick={() => {
              formik.resetForm()
              dispatch(reset())
            }}
          >
            Resetar Venda
          </label>
          <button
            type="submit"
            className={`btn modal-button bg-primary ${extract.loading ? 'loading' : ''}`}
            disabled={extract.loading || !formik.dirty || (!formik.isValidating && !formik.isValid)}
          >
            Gerar extrato
          </button>
        </div>
      </form>

      <ExtracModal id="venda" />
    </LayoutPage>
  )
}

export async function getServerSideProps() {
  const scraps = await getScraps()
  return { props: { scraps } }
}

export default Venda
