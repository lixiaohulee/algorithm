// import React, { useState, useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { RtcCamera } from '@interface/api';
// import { CoreState } from '@store/core/reducers';
// import {
//   handleTurnOffCamera,
//   handleTurnOnCamera,
//   handleSelectVideoInputCustomDevice,
//   handleSelectVideoInputDefaultDevice,
// } from '@helpers/handler';

// import ShareCameraButton from '@components/shareCameraButton';

// export interface IWithShareCameraButtonProps {
//   container: Element;
// }

// const WithShareCameraButton = (
//   props: IWithShareCameraButtonProps
// ): JSX.Element => {
//   const { container } = props;
//   const [deviceListVisible, setDeviceListVisible] = useState(false);

//   const {
//     deviceList,
//     usingDefault,
//     usingDeviceId,
//     isCameraOpening,
//   } = useSelector((state: CoreState) => ({
//     deviceList: state.ioDevice.videoInputList,
//     usingDefault: state.ioDevice.videoInputUsingDefault,
//     usingDeviceId: state.ioDevice.videoInputUsingId,
//     isCameraOpening: state.camera.status === RtcCamera.on,
//   }));
//   const dispatch = useDispatch();

//   const handleToggleCamera = useCallback(
//     (toTurnOnCamera) => {
//       if (toTurnOnCamera) {
//         handleTurnOnCamera(dispatch);
//       } else {
//         handleTurnOffCamera(dispatch);
//       }
//     },
//     [dispatch]
//   );

//   const handleSelectDevice = useCallback(
//     (deviceId) => {
//       if (usingDefault || usingDeviceId !== deviceId) {
//         handleSelectVideoInputCustomDevice(dispatch, { deviceId });
//       }
//     },
//     [dispatch, usingDefault, usingDeviceId]
//   );

//   const handleSelectDefaultDevice = useCallback(() => {
//     if (!usingDefault) {
//       handleSelectVideoInputDefaultDevice(dispatch);
//     }
//   }, [dispatch, usingDefault]);

//   return (
//     <ShareCameraButton
//       isCameraOpening={isCameraOpening}
//       onCameraStateChange={handleToggleCamera}
//       deviceListVisible={deviceListVisible}
//       onDeviceListVisible={setDeviceListVisible}
//       deviceListContainer={container}
//       deviceList={deviceList}
//       usingDefault={usingDefault}
//       usingDeviceId={usingDeviceId}
//       onSelectDevice={handleSelectDevice}
//       onSelectDefault={handleSelectDefaultDevice}
//     />
//   );
// };

// export default WithShareCameraButton;
