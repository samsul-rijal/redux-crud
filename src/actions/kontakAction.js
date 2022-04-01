import axios from 'axios'

export const GET_LIST_KONTAK = "GET_LIST_KONTAK"
export const ADD_KONTAK = "ADD_KONTAK"
export const DELETE_KONTAK = "DELETE_KONTAK"
export const DETAIL_KONTAK = "DETAIL_KONTAK"
export const UPDATE_KONTAK = "UPDATE_KONTAK"

export const getListKontak = () => {
    // console.log("2. Masuk Action");
    return (dispatch) => {
        // loading
        dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: 'http://localhost:3000/kontaks',
            timemout: 120000
        }).then((response) => {
                // console.log("3. berhasil dapet data: ", response);
                // berhasil get api
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            }).catch((error) => {
                // console.log("3. gaga dapet data", error);
                //gagal get api
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

export const addKontak = (data) => {
    // console.log("2. Masuk Action");
    return (dispatch) => {
        // loading
        dispatch({
            type: ADD_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'POST',
            url: 'http://localhost:3000/kontaks',
            timemout: 120000,
            data: data
        }).then((response) => {
                // console.log("3. berhasil dapet data: ", response);
                // berhasil get api
                dispatch({
                    type: ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            }).catch((error) => {
                // console.log("3. gaga dapet data", error);
                //gagal get api
                dispatch({
                    type: ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })

    }
}
export const deleteKontak = (id) => {
    console.log("2. Masuk Action");
    return (dispatch) => {
        // loading
        dispatch({
            type: DELETE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'DELETE',
            url: 'http://localhost:3000/kontaks/'+id,
            timemout: 120000,
        }).then((response) => {
                console.log("3. berhasil dapet data: ", response);
                // berhasil get api
                dispatch({
                    type: DELETE_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            }).catch((error) => {
                console.log("3. gagal dapet data", error);
                //gagal get api
                dispatch({
                    type: DELETE_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

export const detailKontak = (data) => {
    return (dispatch) => {
        dispatch({
            type: DETAIL_KONTAK,
            payload: {
                data: data
            }
        })
    }
}

export const updateKontak = (data) => {
    // console.log("2. Masuk Action");
    return (dispatch) => {
        // loading
        dispatch({
            type: UPDATE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'PUT',
            url: 'http://localhost:3000/kontaks/' + data.id,
            timemout: 120000,
            data: data
        }).then((response) => {
                // console.log("3. berhasil dapet data: ", response);
                // berhasil get api
                dispatch({
                    type: UPDATE_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            }).catch((error) => {
                // console.log("3. gaga dapet data", error);
                //gagal get api
                dispatch({
                    type: UPDATE_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })

    }
}