import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon, TypeList } from '../../models/Pokemon.model';

interface UserState {
    username: string;
    pokemon: Pokemon | null;
    secrets: TypeList[];
}

const initialState: UserState = {
    username: '',
    pokemon: null,
    secrets: [],
};

const loadStateFromLocalStorage = (): UserState => {
    try {
      const storedState = localStorage.getItem('userState');
      return storedState ? JSON.parse(storedState) : initialState;
    } catch (error) {
      console.error('Error loading state from localStorage', error);
      return initialState;
    }
  };
  
const initialStateLoaded: UserState = loadStateFromLocalStorage();

const saveStateToLocalStorage = (state: UserState) => {
    try {
        localStorage.setItem('userState', JSON.stringify(state));
    } catch (error) {
        console.error('Error saving state to localStorage', error);
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialStateLoaded,
    reducers: {
      setUsername: (state, action: PayloadAction<string>) => {
        state.username = action.payload;
        saveStateToLocalStorage(state);
      },
      setPokemon: (state, action: PayloadAction<Pokemon | null>) => {
        state.pokemon = action.payload;
        saveStateToLocalStorage(state);
      },
      setSecrets: (state, action: PayloadAction<TypeList[]>) => {
        state.secrets = action.payload;
        saveStateToLocalStorage(state);
      },
      addSecret: (state, action: PayloadAction<TypeList>) => {
        state.secrets.push(action.payload);
        saveStateToLocalStorage(state);
      },
      clearUser: (state) => {
        state.username = '';
        state.pokemon = null;
        state.secrets = [];
        saveStateToLocalStorage(state);
      },
    },
  });

export const { setUsername, setPokemon, addSecret, setSecrets, clearUser } = userSlice.actions;
export default userSlice.reducer;