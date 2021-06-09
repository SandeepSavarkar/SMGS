import React, { Component } from 'react'
import { Text, View, TextInput, Image, Button, Modal, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { COLOR, IMAGES } from '../../config/constants';

import { heightPercentageToDP, showSnacBar, widthPercentageToDP } from '../../common/function';
// import { Br, CustomButton, CustomLink } from '../../components/button';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class ImageModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
          
            modalVisible: false,
           
        }
    }
    // signupProcess = () => {
    //     let name = this.state.name;
    //     let email = this.state.email;
    //     let password = this.state.password;
    //     let confirmPassword = this.state.confirmPassword;
    //     let selectedImageFile = this.state.selectedImageFile;

    //     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    //     if (!selectedImageFile?.uri) {
    //         showSnacBar("Profile pic is required.")
    //         return
    //     }
    //     if (name.trim() == "") {
    //         showSnacBar("Name is required.")
    //         return
    //     }
    //     else if (email.trim() == "") {
    //         showSnacBar("Email is required.")
    //         return
    //     }
    //     else if (reg.test(email) === false) {
    //         showSnacBar("Email is not valid.")
    //         return
    //     }
    //     else if ((password.trim()).length < 6 || (password.trim()).length > 12) {
    //         if ((password.trim()).length == 0)
    //             showSnacBar("Password can not be empty.")
    //         else
    //             showSnacBar("Password length should be in 6 to 12 character.")
    //         return
    //     }
    //     else if (password != confirmPassword) {
    //         showSnacBar("Confirm password did not match.")
    //         return
    //     }
    //     else {
    //         let obj = {}
    //         obj.name = name;
    //         obj.email = email;
    //         obj.password = password;
    //         obj.files = selectedImageFile;
    //         this.signupServiceCall(obj);
    //     }

    // }

    // signupServiceCall = async (d) => {
    //     this.setState({ loading: true });
    //     let result = await signupService(d);
    //     this.setState({ loading: false });

    //     setTimeout(() => {
    //         showSnacBar(result.message)
    //         if (result.isSucess) {
    //             this.props.navigation.navigate("Login")
    //         }
    //     }, 1000);

    // }

    // changePassVisibilty = () => {
    //     this.setState({ isVisible: !this.state.isVisible })
    // }

    getPic = (type) => {
        switch (type) {
            case "camera":
                launchCamera(
                    {
                        mediaType: 'photo',
                        includeBase64: false,
                        maxHeight: 200,
                        maxWidth: 200,
                    },
                    (response) => {
                        this.imageResponse(response);
                    },
                )
                break;

            default:
                launchImageLibrary(
                    {
                        mediaType: 'photo',
                        includeBase64: false,
                        maxHeight: 200,
                        maxWidth: 200,
                    },
                    (response) => {
                        this.imageResponse(response);
                    },
                )
                break;
        }
    }

    imageResponse = (response) => {
        if (response.didCancel) {
            console.log("you cancelled")

        } else if (response.error) {
            console.log("error is occured")

        } else if (response.customButton) {
            console.log("cutome button")
        } else {
            var imgUrl = response.uri;
            this.setState({ selectedImage: imgUrl, selectedImageFile: response })
            this.setModalVisible(false);
        }
    }

    

    setModalVisible = (status) => {
        this.setState({ modalVisible: status })
    }

    componentDidMount(){
        this.ImageUploadModal()
    }
    render() {
        console.log(this.state.selectedImage + "  ,  " + this.state.selectedImageFile)
        return <View>

        </View>        
        
    }
}


export default ImageModal;