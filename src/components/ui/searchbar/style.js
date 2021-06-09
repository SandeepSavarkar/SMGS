import { StyleSheet } from 'react-native'
import {ThemeUtils,CommonStyle,Color } from '../../../utils/';

import { COLOR } from '../../config/constants';

export const styles = StyleSheet.create({
    container: {
        // marginTop:100,
        width:"80%",
        flexDirection: "row",
        alignItems:"center",
        backgroundColor:"white",
        borderRadius:ThemeUtils.relativeHeight(2),
        paddingLeft:ThemeUtils.relativeWidth(1),
        height:ThemeUtils.relativeHeight(3)
    },
    textinput: {
        width:"90%"
    }
});