import { PermissionStatus, launchCameraAsync, useCameraPermissions } from "expo-image-picker";
import React, { useState } from "react";
import { Text } from "react-native";
import { Alert, Button, Image, StyleSheet, View } from "react-native";
import { Colors } from "../../constants/colors";

export default function ImagePicker() {
  const [pickedImage, setPickedImage] = useState();
  const [cameraPermissonInformation, requestPermisson] = useCameraPermissions();

  async function verifyPermisson() {
    if (cameraPermissonInformation.status === PermissionStatus.UNDETERMINED) {
      const permissonRespone = await requestPermisson();

      return permissonRespone.granted;
    }

    if (cameraPermissonInformation.status === PermissionStatus.DENIED) {
      Alert.alert("Insufficient Permission!", "You need to grant camera permissions to use this app.");
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermisson();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setPickedImage(image.uri);
  }

  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
