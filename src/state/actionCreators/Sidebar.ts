import { ActionTypes } from "../actionTypes"

export const openSidebar = () => {
  return {
    type: ActionTypes.SIDEBAR_OPEN,
  }
}

export const closeSidebar = () => {
  return {
    type: ActionTypes.SIDEBAR_CLOSE,
  }
}
