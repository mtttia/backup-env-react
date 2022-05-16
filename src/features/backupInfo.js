import { createSlice } from '@reduxjs/toolkit'

export const backup = createSlice({
  name: 'backup',
  initialState: null,
  reducers: {
    setBackup: (state, action) => {
      state = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setBackup } = backup.actions

export default backup.reducer