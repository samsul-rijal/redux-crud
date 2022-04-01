import {GET_LIST_KONTAK, ADD_KONTAK, DELETE_KONTAK, DETAIL_KONTAK, UPDATE_KONTAK} from '../../actions/kontakAction'

const initialState = {
    getListKontakResult: false,
    getListKontakLoading: false,
    getListKontakError: false,

    addKontakResult: false,
    addKontakLoading: false,
    addKontakError: false,
    
    deleteKontakResult: false,
    deleteKontakLoading: false,
    deleteKontakError: false,

    detailKontakResult: false,

    updateKontakResult: false,
    updateKontakLoading: false,
    updateKontakError: false,
}

const kontak = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_KONTAK:
            // console.log("4. Masuk Reducer", action);
            return {
                ...state,
                getListKontakResult: action.payload.data,
                getListKontakError: action.payload.loading,
                getListKontakError: action.payload.errorMessage
            }

        case ADD_KONTAK:
            // console.log("4. Masuk Reducer", action);
            return {
                ...state,
                addKontakResult: action.payload.data,
                addKontakError: action.payload.loading,
                addKontakError: action.payload.errorMessage
            }

        case DELETE_KONTAK:
            console.log("4. Masuk Reducer", action);
            return {
                ...state,
                deleteKontakResult: action.payload.data,
                deleteKontakError: action.payload.loading,
                deleteKontakError: action.payload.errorMessage
            }

        case DETAIL_KONTAK:
            return {
                ...state,
                detailKontakResult: action.payload.data
            }
        
        case UPDATE_KONTAK:
            // console.log("4. Masuk Reducer", action);
            return {
                ...state,
                updateKontakResult: action.payload.data,
                updateKontakError: action.payload.loading,
                updateKontakError: action.payload.errorMessage
            }
            

        default: return state
    }
}

export default kontak