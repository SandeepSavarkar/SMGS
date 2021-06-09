import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { Color } from "../../../utils";

const ToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View >
      <Switch
        trackColor={{ false: "#767577", true: Color.PRIMARY_DARK }}
        thumbColor={isEnabled ? Color.PRIMARY : Color.PRIMARY}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ToggleSwitch;