import React from 'react'

import LayoutPage from '../components/Layout'

const Compra = () => {
  return (
    <LayoutPage>
      <div className="normal-case px-6">
        <h1 className="font-medium text-3xl text-center mb-4">Calculadora de Compra</h1>
        <p className="text-lg text-center mb-2">Está tabela irá auxiliar no cálculo para a compra dos itens recicláveis, coletados pelos clientes da Paradis Recycle na cidade.</p>
        <p className="text-lg text-center mb-10">Após o preencimento dos dados poderá ser gerado um extrado da compra realizada.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full mx-auto max-w-[900px]">
          <thead>
            <tr>
              <th colSpan="2" className="text-center bg-base-300 relative">Compra com cliente</th>
              <th className="text-center bg-base-300">Quantidade</th>
              <th className="text-center bg-base-300">Valor</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td>Papelão</td>
              <td>$ 3.00</td>
              <td className="text-center"><input type="number" placeholder="Insira a quantidade" className="input input-bordered w-full max-w-xs" /></td>
              <td className="text-center">$ 3.00</td>
            </tr>
            <tr>
              <td>Garrafa</td>
              <td>$ 3.00</td>
              <td className="text-center"><input type="number" placeholder="Insira a quantidade" className="input input-bordered w-full max-w-xs" /></td>
              <td className="text-center">$ 3.00</td>
            </tr>
            <tr>
              <td>Vidro</td>
              <td>$ 3.00</td>
              <td className="text-center"><input type="number" placeholder="Insira a quantidade" className="input input-bordered w-full max-w-xs" /></td>
              <td className="text-center">$ 3.00</td>
            </tr>
            <tr>
              <td>Latinha</td>
              <td>$ 4.00</td>
              <td className="text-center"><input type="number" placeholder="Insira a quantidade" className="input input-bordered w-full max-w-xs" /></td>
              <td className="text-center">$ 4.00</td>
            </tr>
            <tr>
              <td>Fio</td>
              <td>$ 6.00</td>
              <td className="text-center"><input type="number" placeholder="Insira a quantidade" className="input input-bordered w-full max-w-xs" /></td>
              <td className="text-center">$ 6.00</td>
            </tr>
            <tr>
              <td>Plástico Duro</td>
              <td>$ 6.00</td>
              <td className="text-center"><input type="number" placeholder="Insira a quantidade" className="input input-bordered w-full max-w-xs" /></td>
              <td className="text-center">$ 6.00</td>
            </tr>
            <tr>
              <td>Circuito</td>
              <td>$ 6.00</td>
              <td className="text-center"><input type="number" placeholder="Insira a quantidade" className="input input-bordered w-full max-w-xs" /></td>
              <td className="text-center">$ 6.00</td>
            </tr>
            <tr>
              <td>Antena</td>
              <td>$ 6.00</td>
              <td className="text-center"><input type="number" placeholder="Insira a quantidade" className="input input-bordered w-full max-w-xs" /></td>
              <td className="text-center">$ 6.00</td>
            </tr>
            <tr>
              <td className="bg-base-200"></td>
              <td className="bg-base-200"></td>
              <td className="text-center bg-base-300">VALOR DA COMPRA</td>
              <td className="text-center bg-base-300 font-bold">$ 6.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-10 text-center">
        <label htmlFor="extract" className="btn modal-button bg-primary">Gerar extrato</label>
      </div>

      <input type="checkbox" id="extract" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
          <p className="py-4">You`ve been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div className="modal-action">
            <label htmlFor="extract" className="btn">Yay!</label>
          </div>
        </div>
      </div >
    </LayoutPage >
  )
}

export default Compra
