// import { callService } from "../common/webservice-wrapper"
// import { BASE_URL } from "../config/app-config"

// export const plantListing = async (page, selectedValue, searchStr, sort, props) => {
//     let { field, type } = sort;
//     let url = `${BASE_URL}/plants?page=${page}&search=${searchStr}${selectedValue !== "All" ? "&category=" + selectedValue : ""}&sort=${field}&sortType=${type}`
//     console.log(url, "final url")
//     let method = "GET"
//     let result = await callService(url, method, "", props);
//     return result;
// }

// export const categoryListing = async (props) => {
//     let url = `${BASE_URL}/plant_categorys`
//     console.log(url, "final url")
//     let method = "GET"
//     let result = await callService(url, method, "", props);
//     return result;
// }

// export const plantsPictures = async (id, props) => {
//     let url = `${BASE_URL}/getPlantPicturess/${id}`
//     console.log(url, "final url")
//     let method = "GET"
//     let result = await callService(url, method, "", props);
//     return result;
// }

// export const adToCartAPI = async (data, props) => {
//     let url = `${BASE_URL}/addToCart`
//     console.log(url, "final url")
//     let method = "POST"
//     let result = await callService(url, method, data, props);
//     return result;
// }

// export const getAllCartItemsAPI = async (props) => {
//     let id = global.userId;
//     let url = `${BASE_URL}/getAllCartItems/${id}`
//     console.log(url, "final url")
//     let method = "GET"
//     let result = await callService(url, method, "", props);
//     return result;
// }

// export const editQuantityAPI = async (id, data, props) => {
//     let url = `${BASE_URL}/editCartItem/${id}`
//     console.log(url, "final url")
//     let method = "PUT"
//     let result = await callService(url, method, data, props);
//     return result;
// }

// export const deleteCardItemAPI = async (id, props) => {
//     let url = `${BASE_URL}/deleteCartItem/${id}`
//     console.log(url, "final url")
//     let method = "DELETE"
//     let result = await callService(url, method, "", props);
//     return result;
// }
