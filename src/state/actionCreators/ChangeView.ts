import { ActionTypes } from "../actionTypes"

export const handleProductView = (view: string) => {
  return {
    type: ActionTypes.SET_PRODUCTS_VIEW,
    payload: view,
  }
}
