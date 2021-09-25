// import React, { useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { CoreState } from '@store/core/reducers';
// import { handleAcceptRtc } from '@helpers/handler';

// import AcceptButton from '@components/acceptButton';

// export interface IWithAcceptButtonProps {
//   isCameraOpening: boolean;
//   isMicrophoneOpening: boolean;
// }
// const WithAcceptButton = (props: IWithAcceptButtonProps): JSX.Element => {
//   const { isCameraOpening, isMicrophoneOpening } = props;

//   const dispatch = useDispatch();

//   const { sid, microphonePermission, cameraPermission } = useSelector(
//     (state: CoreState) => ({
//       sid: state.basic.sid,
//       microphonePermission: state.permission.microphonePermission,
//       cameraPermission: state.permission.cameraPermission,
//     })
//   );

//   const handleAccept = useCallback(() => {
//     handleAcceptRtc(dispatch, {
//       sid,
//       muteMicrophone: !isMicrophoneOpening || !microphonePermission,
//       turnOnCamera: isCameraOpening && cameraPermission,
//     });
//   }, [
//     dispatch,
//     isMicrophoneOpening,
//     isCameraOpening,
//     sid,
//     microphonePermission,
//     cameraPermission,
//   ]);

//   return <AcceptButton onClickAcceptButton={handleAccept} />;
// };

// export default WithAcceptButton;
