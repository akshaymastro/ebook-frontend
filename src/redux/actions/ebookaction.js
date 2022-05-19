import * as EbookServices from "../../services/ebook";
import * as EbookActionTypes from "../actionTypes/ebookActionType";

export const CreateEbookAction = (params) => async (dispatch) => {
  try {
    const response = await EbookServices.CreateEbook(params);
    dispatch({
      type: "CREATE_EBOOK",
      payload: response.data,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
export const GetEbookAction = (params) => async (dispatch) => {
  try {
    const response = await EbookServices.GetEbook();
    dispatch({
      type: EbookActionTypes.GET_EBOOK,
      payload: response.data,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
export const UpdateEbookAction = (id, params) => async (dispatch) => {
  try {
    const response = await EbookServices.UpdateEbook(id, params);
    dispatch({
      type: EbookActionTypes.UPDATE_EBOOK,
      payload: response.data,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
export const DeleteEbookAction = (id) => async (dispatch) => {
  try {
    const response = await EbookServices.DeleteEbook(id);
    dispatch({
      type: EbookActionTypes.DELETE_EBOOK,
      payload: id,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
