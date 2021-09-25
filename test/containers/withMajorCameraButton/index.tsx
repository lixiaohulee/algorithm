// import React, { useState, useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import i18n from '@i18n';
// import IconType from '@interface/iconfont';
// import { RtcCamera } from '@interface/api';
// import { CoreState } from '@store/core/reducers';
// import {
//   handleTurnOffCamera,
//   handleTurnOnCamera,
//   handleSelectVideoInputCustomDevice,
//   handleSelectVideoInputDefaultDevice,
// } from '@helpers/handler';

// import DeviceList from '@components/deviceList';
// import MajorCameraButton from '@components/majorCameraButton';

// const WithMajorCameraButton = (): JSX.Element => {
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
//     <MajorCameraButton
//       isCameraOpening={isCameraOpening}
//       onCameraStateChange={handleToggleCamera}
//       deviceListVisible={deviceListVisible}
//       onDeviceListVisible={setDeviceListVisible}
//       overlay={
//         <DeviceList
//           deviceType={i18n.t('Rtc_camera')}
//           deviceIcon={IconType.shipinhuiyi}
//           deviceList={deviceList}
//           usingDefault={usingDefault}
//           usingDeviceId={usingDeviceId}
//           onSelectDevice={handleSelectDevice}
//           onSelectDefault={handleSelectDefaultDevice}
//         />
//       }
//     />
//   );
// };

// export default WithMajorCameraButton;
