import { auth } from '@/lib/firebase/firebaseconfig';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const loginwithEmail = createAsyncThunk('user/loginwithEmail', async (creadentials, { rejectWithValue }) => {
  try {
    const response = await signInWithEmailAndPassword(auth, creadentials.email, creadentials.password);
    return response.user;
  } catch (error) {
    console.error(error);
    if (error.code === 'auth/invalid-credential') {
      return rejectWithValue('Invaild email and pasword try again.');
    }
  }
});

export const logout = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
  try {
    const response = await signOut(auth);
    return null;
  } catch (error) {
    // console.error(error);
    return rejectWithValue(error.message);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginwithEmail.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginwithEmail.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(loginwithEmail.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(logout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.loading = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { setUser, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;
