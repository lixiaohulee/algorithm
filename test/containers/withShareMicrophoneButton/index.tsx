// import React, { useState, useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import i18n from '@i18n';
// import IconType from '@interface/iconfont';
// import useSubStore from '@hooks/useSubStore';
// import { CoreState } from '@store/core/reducers';
// import { SubStoreStateType } from '@interface/state';

// import {
//   handleTurnOffMicrophone,
//   handleTurnOnMicrophone,
//   handleSelectAudioInputCustomDevice,
//   handleSelectAudioInputDefaultDevice,
//   handleSelectAudioOutputCustomDevice,
//   handleSelectAudioOutputDefaultDevice,
// } from '@helpers/handler';

// import DeviceList from '@components/deviceList';
// import ShareMicrophoneButton from '@components/shareMicrophoneButton';

// import style from './index.less';

// export interface IWithShareMicrophoneButtonProps {
//   container: Element;
// }
// const WithShareMicrophoneButton = (
//   props: IWithShareMicrophoneButtonProps
// ): JSX.Element => {
//   const { container } = props;
//   const [deviceListVisible, setDeviceListVisible] = useState(false);

//   const {
//     audioInputDeviceList,
//     audioInputUsingDefault,
//     audioInputUsingDeviceId,
//     audioOutputDeviceList,
//     audioOutputUsingDefault,
//     audioOutputUsingDeviceId,
//     isMicrophoneOpening,
//   } = useSelector((state: CoreState) => ({
//     audioInputDeviceList: state.ioDevice.audioInputList,
//     audioInputUsingDefault: state.ioDevice.audioInputUsingDefault,
//     audioInputUsingDeviceId: state.ioDevice.audioInputUsingId,
//     audioOutputDeviceList: state.ioDevice.audioOutputList,
//     audioOutputUsingDefault: state.ioDevice.audioOutputUsingDefault,
//     audioOutputUsingDeviceId: state.ioDevice.audioOutputUsingId,
//     isMicrophoneOpening: !state.microphone.mute,
//   }));

//   const microphoneInputEnergy = useSubStore<number>(
//     SubStoreStateType.microphoneInputEnergy,
//     0
//   );

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

//   const handleSelectAudioInput = useCallback(
//     (deviceId) => {
//       if (audioInputUsingDefault || audioInputUsingDeviceId !== deviceId) {
//         handleSelectAudioInputCustomDevice(dispatch, { deviceId });
//       }
//     },
//     [dispatch, audioInputUsingDefault, audioInputUsingDeviceId]
//   );

//   const handleSelectAudioInputDefault = useCallback(() => {
//     if (!audioInputUsingDefault) {
//       handleSelectAudioInputDefaultDevice(dispatch);
//     }
//   }, [dispatch, audioInputUsingDefault]);

//   const handleSelectAudioOutput = useCallback(
//     (deviceId) => {
//       if (audioOutputUsingDefault || audioOutputUsingDeviceId !== deviceId) {
//         handleSelectAudioOutputCustomDevice(dispatch, { deviceId });
//       }
//     },
//     [dispatch, audioOutputUsingDefault, audioOutputUsingDeviceId]
//   );

//   const handleSelectAudioOutputDefault = useCallback(() => {
//     if (!audioOutputUsingDefault) {
//       handleSelectAudioOutputDefaultDevice(dispatch);
//     }
//   }, [dispatch, audioOutputUsingDefault]);

//   return (
//     <ShareMicrophoneButton
//       isMicrophoneOpening={isMicrophoneOpening}
//       onMicrophoneStateChange={handleToggleMicrophone}
//       deviceListVisible={deviceListVisible}
//       onDeviceListVisible={setDeviceListVisible}
//       microphoneInputEnergy={microphoneInputEnergy}
//       deviceListContainer={container}
//       deviceList={
//         <div>
//           <DeviceList
//             deviceType={i18n.t('Rtc_microphone')}
//             deviceIcon={IconType.yuyin}
//             deviceList={audioInputDeviceList}
//             usingDefault={audioInputUsingDefault}
//             usingDeviceId={audioInputUsingDeviceId}
//             onSelectDevice={handleSelectAudioInput}
//             onSelectDefault={handleSelectAudioInputDefault}
//             extraClassName={style.extraInputDeviceListClass}
//           />
//           <DeviceList
//             deviceType={i18n.t('Audio_Play')}
//             deviceIcon={IconType.yinliang}
//             deviceList={audioOutputDeviceList}
//             usingDefault={audioOutputUsingDefault}
//             usingDeviceId={audioOutputUsingDeviceId}
//             onSelectDevice={handleSelectAudioOutput}
//             onSelectDefault={handleSelectAudioOutputDefault}
//             extraClassName={style.extraOutputDeviceListClass}
//           />
//         </div>
//       }
//     />
//   );
// };

// export default WithShareMicrophoneButton;
