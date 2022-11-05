import { createContext } from "react";
import { initialState } from "./reducers/favorites";

const FavoritesContext = createContext([initialState, () => {}]);

export default FavoritesContext;
