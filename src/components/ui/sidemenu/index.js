
// import React from "react";
// import Navigation from "";
// import { View,Text } from "react-native";
// class SideMenu extends React.Component {
//   static options() {
//     return {
//       topBar: {
//         leftButtons: {
//           id: 'sideMenu',
//           icon: require('./menuIcon.png')
//         }
//       }
//     };
//   }

//   constructor(props) {
//     super(props);
//     Navigation.events().bindComponent(this);
//   }

//   render() {
//     return (
//       <View>
//         <Text>Click the hamburger icon to open the side menu</Text>
//       </View>
//     );
//   }

//   navigationButtonPressed({ buttonId }) {
//     if (buttonId === 'sideMenu') {
//       Navigation.mergeOptions(this, {
//         sideMenu: {
//           left: {
//             visible: true
//           }
//         }
//       });
//     }
//   }
// }
// export default SideMenu;