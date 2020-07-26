import INFLUENCER from "../../data/influencer";
import provincie from "../../data/posizioni";

import {
  SET_POSITION,
  SET_CATEGORY,
  RESET_FILTER,
  SET_INFLUENCER,
} from "../actions/influencer";

const initialState = {
  influencer: INFLUENCER,
  filteredInfluencer: INFLUENCER,
  category: "",
  position: {
    name: "",
    sigla: "",
  },
  actualInfluencer: "unset",
};

const influencerReducer = (state = initialState, action) => {
  //in base ai casi ritorna lo stato aggiornato ->  return { ...state, campoDiInitialState: valore modificato }; =>IMMUTABILITA -> OBBLIGATORIO lavorare sempre sulle copie
  switch (action.type) {
    case SET_POSITION:
      const newSigla = action.posSigla;
      const newName = provincie.filter(
        (posizione) => posizione.sigla === newSigla
      )[0].nome;
      const newFilteredInfluencer = state.filteredInfluencer.filter(
        (p) => p.posizione === newSigla
      );

      return {
        ...state,
        filteredInfluencer: newFilteredInfluencer,
        position: { name: newName, sigla: newSigla },
      };
    case SET_CATEGORY:
      const newCategory = action.cat;
      const newFilteredInfluencer2 = state.filteredInfluencer.filter((p) => {
        for (let i = 0; i < p.categorie.length; i++) {
          //console.log(`1: ${p.categorie[i]} , 2: ${newCategory}`);
          if (p.categorie[i] === newCategory) return true;
        }
        return false;
      });
      return {
        ...state,
        category: newCategory,
        filteredInfluencer: newFilteredInfluencer2,
      };
    case RESET_FILTER:
      return initialState;
    case SET_INFLUENCER:
      return { ...state, actualInfluencer: action.data };
    default:
      return state;
  }
};

export default influencerReducer;
// SELECT: import { useSelector } from "react-redux"; -> ES: const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
/* DISPACTH: import { useDispatch } from "react-redux"; -> ES: import { setFilters } from "../store/actions/meals"; -> const dispatch = useDispatch();
   ->  dispatch(setFilters(applieadFilters))      
*/
