import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAddress } from "../../../services/apiGeocoding"

const USER_INIT_STATE = {
  name: "",
  address: "",
  position: {},
  status: "idle",
  error: ""
}

/** reducer RTK syntax inc. Async THUNK extraReducers */
const userSlice = createSlice({
  name: "user",
  initialState: USER_INIT_STATE,
  reducers: {
    createName(state, action) {
      state.name = action.payload
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = "idle"
        state.position = action.payload.position
        state.address = action.payload.address
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.status = "error"
        state.error = "We could not get your adress. Please fill this field."
      })
})

export const { createName } = userSlice.actions
export default userSlice.reducer

/** async thunk */
export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition()
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude
    }

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position)
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`

    // 3) Then we return an object with the data that we are interested in
    return { position, address }
  }
)

/** helpers */
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}
