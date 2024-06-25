export const requestMotionPermission = async (): Promise<boolean> => {
  try {
    //@ts-ignore
    const status = await window.DeviceMotionEvent.requestPermission();
    if (status === "granted") {
      console.log("DeviceMotion permission granted");
      return true;
    } else {
      console.error("DeviceMotion permission denied");
      return false;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const requestCameraPermission = async (): Promise<boolean> => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    stream.getTracks().forEach((track) => track.stop());
    console.log("Camera permission granted");
    return true;
  } catch (error: any) {
    console.error("Camera permission denied", error);
    return false;
  }
};
