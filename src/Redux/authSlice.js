import { createSlice } from "@reduxjs/toolkit";

const safeGetItem = (k) => {
  try {
    return typeof window !== "undefined" ? localStorage.getItem(k) : null;
  } catch {
    return null;
  }
};

const storedUser = safeGetItem("user") ? JSON.parse(safeGetItem("user")) : null;
const storedToken = safeGetItem("token") || null;

const initialState = {
  user: storedUser,
  token: storedToken,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload.user ?? null;
      state.token = action.payload.token ?? null;
      state.error = null;

      try {
        localStorage.setItem("user", JSON.stringify(state.user));
        if (state.token) {
          localStorage.setItem("token", state.token);
        } else {
          localStorage.removeItem("token");
        }
      } catch {}
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      try {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      } catch {}
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
