/* eslint-disable no-useless-catch */
/* eslint-disable space-before-function-paren */

const getScraps = async () => {
  try {
    const response = await fetch('https://paradis-recycle-kamikaze-rp-jeansflores.vercel.app/api/scraps')
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

export { getScraps }
