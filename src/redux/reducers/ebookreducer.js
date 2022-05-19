import * as EbookActionTypes from "../actionTypes/ebookActionType";

export default function EbookReducer(state = {}, action) {
  switch (action.type) {
    case EbookActionTypes.GET_EBOOK:
      return {
        ...state,
        ebookList: action.payload.message,
      };
    case EbookActionTypes.UPDATE_EBOOK:
      return {
        ...state,
        updatedEbook: action.payload,
      };
    case EbookActionTypes.DELETE_EBOOK:
      console.log(action.payload);
      const data = state.ebookList.filter(
        (ebook) => ebook.e_id !== action.payload
      );
      console.log(data, "daa");
      return {
        ...state,
        ebookList: data,
      };
    default:
      return state;
  }
}
