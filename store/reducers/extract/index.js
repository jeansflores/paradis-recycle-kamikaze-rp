import { createSlice } from '@reduxjs/toolkit'

export const extractSlice = createSlice({
  name: 'extract',
  initialState: {
    seller: '',
    purchaser: '',
    cardboard: { quantity: 0, value: 0 },
    bottle: { quantity: 0, value: 0 },
    glass: { quantity: 0, value: 0 },
    tin: { quantity: 0, value: 0 },
    wire: { quantity: 0, value: 0 },
    rigidPlastic: { quantity: 0, value: 0 },
    circuit: { quantity: 0, value: 0 },
    antenna: { quantity: 0, value: 0 },
    total: 0,
    loading: false,
    visible: false
  },
  reducers: {
    reset: (state, action) => {
      state.seller = ''
      state.purchaser = ''
      state.cardboard = { quantity: 0, value: 0 }
      state.bottle = { quantity: 0, value: 0 }
      state.glass = { quantity: 0, value: 0 }
      state.tin = { quantity: 0, value: 0 }
      state.wire = { quantity: 0, value: 0 }
      state.rigidPlastic = { quantity: 0, value: 0 }
      state.circuit = { quantity: 0, value: 0 }
      state.antenna = { quantity: 0, value: 0 }
      state.total = 0
      state.loading = false
      state.visible = false
    },
    set: (state, action) => {
      const { payload = {} } = action

      state.seller = payload.seller || ''
      state.purchaser = payload.purchaser || ''
      state.cardboard = payload.cardboard || { quantity: 0, value: 0 }
      state.bottle = payload.bottle || { quantity: 0, value: 0 }
      state.glass = payload.glass || { quantity: 0, value: 0 }
      state.tin = payload.tin || { quantity: 0, value: 0 }
      state.wire = payload.wire || { quantity: 0, value: 0 }
      state.rigidPlastic = payload.rigidPlastic || { quantity: 0, value: 0 }
      state.circuit = payload.circuit || { quantity: 0, value: 0 }
      state.antenna = payload.antenna || { quantity: 0, value: 0 }
      state.total = payload.total || 0
    },
    isLoading: (state, action) => {
      state.loading = action.payload
    },
    isVisible: (state, action) => {
      state.visible = action.payload
    }
  }
})

export const { reset, set, isLoading, isVisible } = extractSlice.actions

export default extractSlice.reducer
