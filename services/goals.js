/* eslint-disable no-useless-catch */
/* eslint-disable space-before-function-paren */

const getGoals = async () => {
  try {
    const response = await fetch('https://paradis-recycle.vercel.app/api/goals')
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

export { getGoals }
