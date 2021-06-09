// import { callService } from "../common/webservice-wrapper"
// import { BASE_URL } from "../config/app-config"

// export const getAllAddressAPI = async (props) => {
//     let id = global.userId;
//     let url = `${BASE_URL}/getAllAdress/${id}`
//     console.log(url, "final url")
//     let method = "GET"
//     let result = await callService(url, method, "", props);
//     return result;
// }

// export const deleteAddressAPI = async (id, props) => {
//     let url = `${BASE_URL}/deleteAddress/${id}`
//     console.log(url, "final url")
//     let method = "DELETE"
//     let result = await callService(url, method, "", props);
//     return result;
// }

// export const addressSaveAPI = async (body, props) => {
//     let url = `${BASE_URL}/saveUserAddress`
//     console.log(url, "final url")
//     let method = "POST"
//     let result = await callService(url, method, body, props);
//     return result;
// }

// export const addressEditAPI = async (id, body, props) => {
//     let url = `${BASE_URL}/editUserAddress/${id}`
//     console.log(url, "final url")
//     let method = "PUT"
//     let result = await callService(url, method, body, props);
//     return result;
// }

// export const placeAnOrderAPI = async (body, props) => {
//     let url = `${BASE_URL}/placeNewOrder`
//     console.log(url, "final url")
//     console.log(body, "final body")
//     let method = "POST"
//     let result = await callService(url, method, body, props);
//     return result;
// }

// export const getAllOrdersAPI = async (props) => {
//     let id = global.userId;
//     let url = `${BASE_URL}/getAllUserOrders/${id}`
//     console.log(url, "final url")
//     let method = "GET"
//     let result = await callService(url, method, "", props);
//     return result;
// }

// export const cancelOrderAPI = async (id,props) => {
//     let url = `${BASE_URL}/cancelOrder/${id}`
//     console.log(url, "final url")
//     let method = "POST"
//     let result = await callService(url, method, "", props);
//     return result;
// }