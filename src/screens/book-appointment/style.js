import {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Color, ThemeUtils} from '../../utils';
export const styles = StyleSheet.create({
  detContainer: {
    flex: 4,
    backgroundColor: Color.WHITE,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
  container: {
    marginHorizontal: ThemeUtils.relativeWidth(4),
    paddingVertical: ThemeUtils.relativeHeight(2),
  },
  serviceContainer: {
    width: ThemeUtils.relativeWidth(96),
  },
  tryOnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: ThemeUtils.relativeWidth(96),
    marginVertical: ThemeUtils.relativeHeight(2),
  },
  dtContainer: {
    marginHorizontal: ThemeUtils.relativeWidth(2),
  },
  genContainer: {
    height: ThemeUtils.relativeHeight(10),
    //  marginTop:ThemeUtils.responsiveHeight(30),
    justifyContent: 'space-around',
    width: ThemeUtils.relativeWidth(96),
  },
  headings: {
    marginVertical: ThemeUtils.relativeHeight(2),
  },

  fieldContainer: {
    alignContent: 'center',
    width: ThemeUtils.relativeWidth(85),
  },

  btnContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: ThemeUtils.relativeHeight(3),
    width: ThemeUtils.relativeWidth(85),
  },

  lblContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: ThemeUtils.relativeHeight(5),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInnerContainer: {
    height: ThemeUtils.relativeHeight(45),
    width: ThemeUtils.relativeWidth(90),
    backgroundColor: Color.WHITE,
    padding: ThemeUtils.relativeWidth(2),
    borderRadius: ThemeUtils.relativeWidth(3),
  },
  modalInnerButton: {
    height: '90%',
    width: '100%',
    // backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camereImage: {
    height: ThemeUtils.relativeHeight(7),
    flexDirection: 'row',
    marginBottom: ThemeUtils.relativeHeight(2),
    borderWidth: 1,
    borderColor: Color.PRIMARY,
    alignItems: 'center',
    padding: ThemeUtils.relativeWidth(3),
    width: ThemeUtils.relativeWidth(75),
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cameraText: {
    fontSize: 15,
    color: Color.PRIMARY,
    marginLeft: ThemeUtils.relativeWidth(1),
  },
  uploadImageContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: ThemeUtils.relativeHeight(2),
   // marginTop: ThemeUtils.relativeHeight(1),
    alignItems: 'center',
  },
  uploadImageButton: {
    alignItems: 'center',
    marginLeft: ThemeUtils.relativeWidth(1),
  },
  uploadText: {
    color: Color.PRIMARY,
    fontSize: 16,
  },
  uploadedImage: {
    height: ThemeUtils.relativeHeight(4),
    width: ThemeUtils.relativeHeight(4),
    borderRadius: ThemeUtils.relativeWidth(2),
    marginLeft: ThemeUtils.relativeWidth(2),
  },
});
