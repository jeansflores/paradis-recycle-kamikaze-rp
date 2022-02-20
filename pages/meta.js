/* eslint-disable indent */
import Head from 'next/head'
import React from 'react'

import LayoutPage from '../components/Layout'
import { getGoals } from '../services/goals'

const Meta = ({ goals }) => {
  return (
    <LayoutPage>
      <Head>
        <title>Meta | Paradis Recycle</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="normal-case px-6">
        <h1 className="font-medium text-3xl text-center mb-4">Tabela de <span className="text-primary font-bold">Metas</span></h1>
        <p className="text-lg text-center mb-10">Na tabela a baixo consta as quantidades necessárias para cada item reciclável, que compõem as metas diárias para coleta dos funcionários da Paradis Recycle.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full mx-auto table-zebra max-w-[700px]">
          <thead>
            <tr>
              <th className="text-xs md:text-base text-center bg-base-300 p-2 md:p-4 relative">Reciclável</th>
              <th className="text-xs md:text-base text-center bg-base-300 p-2 md:p-4">Quantidade</th>
            </tr>
          </thead>
          <tbody >
            {goals.map(goal => (
              <tr key={goal.id}>
                <td className="text-xs md:text-base text-center py-2 px-2 md:px-4">{goal.name}</td>
                <td className="text-xs md:text-base text-center py-2 px-2 md:px-4">{goal.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LayoutPage>
  )
}

export async function getServerSideProps() {
  const goals = await getGoals()
  return { props: { goals } }
}

export default Meta
