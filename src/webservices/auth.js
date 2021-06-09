// import { authCallService, authCallService2, callService } from "../common/webservice-wrapper"
// import { BASE_URL } from "../config/app-config"


// // export const getUserAPI = async () => {
// //     let id = global.userId;
// //     let url = `${BASE_URL}/getUser/${id}`
// //     console.log(url, "final url")
// //     let method = "GET"
// //     let result = await callService(url, method, "");
// //     console.log(result,"-=====================0000000")
// //     return result;
// // }

// // export const checkTokenValidityAPI = async (token) => {
// //     let url = `${BASE_URL}/userVerifyToken`
// //     let result = await authCallService2(url, token);
// //     return result;
// // }

// export const loginService = async (body) => {
//     let jsonBody = {
//         email: body.email,
//         password: body.password
//     }
//     let url = `${BASE_URL}/signin`
//     let result = await authCallService(url, jsonBody);
//     return result;
// }


// // export const forgotPassService = async (body) => {
// //     let jsonBody = {
// //         email: body.email
// //     }
// //     let url = `${BASE_URL}/forgotPassword`
// //     let result = await authCallService(url, jsonBody);
// //     return result;
// // }

// // export const signupService = async (body) => {

// //     let formData = new FormData();
// //     formData.append("name", body.name);
// //     formData.append("email", body.email);
// //     formData.append("password", body.password);
// //     formData.append("photo", { uri: body.files.uri, name: body.files.fileName, type: 'image/jpeg' });
// //     let url = `${BASE_URL}/createUser`

// //     let result = await authCallService(url, formData);

// //     return result;
// // }