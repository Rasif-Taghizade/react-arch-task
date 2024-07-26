import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IState, IUser, IWorker } from './store';

export const initialState: IState = {
    user: {
        id: 0,
        username: '',
        email: '',
        password: '',
    },
    workers: [
    ],
};


export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setUser: (state: IState, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
        setWorkers: (state: IState, action: PayloadAction<IWorker[]>) => {
            state.workers = action.payload;
        },
    },
});

export const { setUser, setWorkers } = rootSlice.actions;

export default rootSlice.reducer;