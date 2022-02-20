/* eslint-disable indent */
import { useFormik } from 'formik'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'

import LayoutPage from '../components/Layout'
import { getScraps } from '../services/scraps'

const formSchema = Yup.object().shape({
  seller: Yup.string().required('Campo obrigatório.'),
  purchaser: Yup.string().required('Campo obrigatório.'),
  cardboard: Yup.number().positive('Apenas números positivos.').required('Campo obrigatório.').nullable('Campo obrigatório.'),
  bottle: Yup.number().positive('Apenas números positivos.').required('Campo obrigatório.').nullable('Campo obrigatório.'),
  glass: Yup.number().positive('Apenas números positivos.').required('Campo obrigatório.').nullable('Campo obrigatório.'),
  tin: Yup.number().positive('Apenas números positivos.').required('Campo obrigatório.').nullable('Campo obrigatório.'),
  wire: Yup.number().positive('Apenas números positivos.').required('Campo obrigatório.').nullable('Campo obrigatório.'),
  rigid_plastic: Yup.number().positive('Apenas números positivos.').required('Campo obrigatório.').nullable('Campo obrigatório.'),
  circuit: Yup.number().positive('Apenas números positivos.').required('Campo obrigatório.').nullable('Campo obrigatório.'),
  antenna: Yup.number().positive('Apenas números positivos.').required('Campo obrigatório.').nullable('Campo obrigatório.')
})

const initialForm = {
  seller: '',
  purchaser: '',
  cardboard: null,
  bottle: null,
  glass: null,
  tin: null,
  wire: null,
  rigid_plastic: null,
  circuit: null,
  antenna: null
}

const Compra = ({ scraps }) => {
  const [totalPurchase, setTotalPurchase] = useState({
    cardboard: 0,
    bottle: 0,
    glass: 0,
    tin: 0,
    wire: 0,
    rigid_plastic: 0,
    circuit: 0,
    antenna: 0,
    total: 0
  })

  const formik = useFormik({
    initialValues: initialForm,
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log({ values })
    }
  })

  const recalculate = () => {
    const prices = {}
    scraps.forEach(scrap => {
      prices[scrap.key] = scrap.purchase_price * formik.values[scrap.key]
    })

    const total = Object.values(prices).reduce((acc, current) => {
      return acc + current
    }, 0)

    setTotalPurchase({ ...prices, total })
  }

  useEffect(() => { recalculate() }, [formik.values])

  return (
    <LayoutPage>
      <Head>
        <title>Compra | Paradis Recycle</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="normal-case px-6">
        <h1 className="font-medium text-3xl text-center mb-4">Calculadora de Compra</h1>
        <p className="text-lg text-center mb-2">Está tabela irá auxiliar no cálculo para a compra dos itens recicláveis, coletados pelos clientes da Paradis Recycle na cidade.</p>
        <p className="text-lg text-center mb-10">Após o preencimento dos dados poderá ser gerado um extrado da compra realizada.</p>
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
                <th colSpan="2" className="text-xs md:text-base text-center bg-base-300 p-2 md:p-4 relative">Compra com cliente</th>
                <th className="text-xs md:text-base text-center bg-base-300 p-2 md:p-4">Quantidade</th>
                <th className="text-xs md:text-base text-center bg-base-300 p-2 md:p-4">Valor</th>
              </tr>
            </thead>
            <tbody >
              {scraps.map(scrap => (
                <tr key={scrap.id}>
                  <td className="text-xs md:text-base py-2 px-2 md:px-4">{scrap.name}</td>
                  <td className="text-xs md:text-base py-2 px-2 md:px-4">$ {scrap.purchase_price.toFixed(2)}</td>
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
                  <td className="text-xs md:text-base text-center py-2 px-2 md:px-4">$ {totalPurchase[scrap.key].toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td className="bg-base-200"></td>
                <td className="bg-base-200"></td>
                <td className="text-xs md:text-base text-center py-2 px-2 md:px-4 bg-base-300">VALOR DA COMPRA</td>
                <td className="text-xs md:text-base text-center py-2 px-2 md:px-4 bg-base-300 font-bold">$ {totalPurchase.total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <button
            type="submit"
            htmlFor="2extract"
            disabled={!formik.dirty || (!formik.isValidating && !formik.isValid)}
            className="btn modal-button bg-primary"
          >
            Gerar extrato
          </button>
        </div>
      </form>

      <input type="checkbox" id="extract" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
          <p className="py-4">You`ve been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div className="modal-action">
            <label htmlFor="extract" className="btn">Yay!</label>
          </div>
        </div>
      </div>
    </LayoutPage>
  )
}

export async function getServerSideProps() {
  const scraps = await getScraps()
  return { props: { scraps } }
}

export default Compra
