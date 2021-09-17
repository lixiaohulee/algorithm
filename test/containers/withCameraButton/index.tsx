// import React, { useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { RtcCamera } from '@interface/api';
// import { CoreState } from '@store/core/reducers';
// import { handleTurnOffCamera, handleTurnOnCamera } from '@helpers/handler';

// import CameraButton from '@components/cameraButton';

// const WithCameraButton = (): JSX.Element => {
//   const { isCameraOpening } = useSelector((state: CoreState) => ({
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
//   return (
//     <CameraButton
//       isCameraOpening={isCameraOpening}
//       onCameraStateChange={handleToggleCamera}
//     />
//   );
// };

// export default WithCameraButton;
