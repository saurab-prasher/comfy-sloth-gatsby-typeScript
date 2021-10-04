import axios from "axios"
import { ActionTypes } from "../actionTypes"
import { Dispatch } from "redux"

export const fetchProducts = (allProducts: any) => {
  console.log(allProducts)
  return {
    type: ActionTypes.SET_LOGIN_SUCCESS,
    payload: allProducts,
  }
}

export const fetchSingleProduct =
  (url: string) => async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.GET_SINGLE_PRODUCT_BEGIN })

    try {
      const response = await axios.get(url)
      const singleProduct = response.data
      dispatch({
        type: ActionTypes.GET_SINGLE_PRODUCT_SUCCESS,
        payload: singleProduct,
      })
    } catch (error) {
      dispatch({ type: ActionTypes.GET_SINGLE_PRODUCT_ERROR })
    }
  }
