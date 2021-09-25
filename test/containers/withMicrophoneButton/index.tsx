// import React, { useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// // import useSubStore from '@hooks/useSubStore';
// import { CoreState } from '@store/core/reducers';
// // import { SubStoreStateType } from '@interface/state';

// import {
//   handleTurnOffMicrophone,
//   handleTurnOnMicrophone,
// } from '@helpers/handler';

// import MicrophoneButton from '@components/microphoneButton';

// const WithMicrophoneButton = (): JSX.Element => {
//   const { isMicrophoneOpening } = useSelector((state: CoreState) => ({
//     isMicrophoneOpening: !state.microphone.mute,
//   }));

//   // const microphoneInputEnergy = useSubStore<number>(
//   //   SubStoreStateType.microphoneInputEnergy,
//   //   0
//   // );

//   const dispatch = useDispatch();

//   const handleToggleMicrophone = useCallback(
//     (toTurnOnMicrophone) => {
//       if (toTurnOnMicrophone) {
//         handleTurnOnMicrophone(dispatch);
//       } else {
//         handleTurnOffMicrophone(dispatch);
//       }
//     },
//     [dispatch]
//   );
//   return (
//     <MicrophoneButton
//       isMicrophoneOpening={isMicrophoneOpening}
//       onMicrophoneStateChange={handleToggleMicrophone}
//     />
//   );
// };

// export default WithMicrophoneButton;
