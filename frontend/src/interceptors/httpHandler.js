import { appStatusFetching, appStatusFailed, appStatusReset, appStatusSuccess } from "../redux/actions/statusAction";

import Axios from "./axiosInstance";

const http_request = (url, method = "GET", body = {}, header = null, message = { success: "", failure: "" }) => {

    let data = null;

    return async (dispatch, getState) => {
        try {
            // Set status to fetching
            dispatch(appStatusFetching("Fetching Data..."));

            switch (method) {
                case "GET":
                    data = await Axios.get(url);
                    break;
                case "POST":
                    data = await Axios.post(url, body);
                    break;
                case "PUT":
                    data = await Axios.put(url, body);
                    break;
                case "DELETE":
                    data = await Axios.delete(url);
                    break;
                default:
                    data = await Axios.get(url);
                    break;
            }
        } catch (err) {
            // reset status after sometime
            setTimeout(() => {
                dispatch(appStatusReset());
            }, 2500);

            dispatch(appStatusFailed("Some error occured"));

            console.warn(`An error occured while requesting a url : ${url} \n Error: ${err}`,);

        } finally {

            // reset status after sometime
            setTimeout(() => {
                dispatch(appStatusReset());
            }, 2500);

            if (data && data.data.statusCode > 0) {
                dispatch(appStatusFailed((message && message.failure) || "Request failed"));
            }
            else {

                dispatch(appStatusSuccess(((message && message.success) || "Request Successfull")));

            }
        }
    }
}
export default http_request;