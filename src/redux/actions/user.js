import fetchDataAPI from "../../api/configApi";
import openNotificationWithIcon from "../../components/notification/notification";
import { LOGIN } from "../types";

export const login = (data) => async (dispatch) => {
  const response = await fetchDataAPI("user/signin", "POST", data)
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", JSON.stringify(res.data.token));
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.response);
      openNotificationWithIcon("error", err.response.data.message);
    });
};
export const get_info_user = (id) => async (dispatch) => {
  const response = await fetchDataAPI(`user/getOne/${id}`)
    .then((res) => {
      console.log(res);
      return dispatch({
        type: LOGIN,
        payload: res.data.result,
      });
    })
    .catch((err) => {
      console.log(err.response);
      openNotificationWithIcon("error", err.response.data.message);
      return false;
    });
  return response;
};
