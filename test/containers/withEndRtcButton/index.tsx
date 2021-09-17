// import React, { useState, useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import useCustomEvent from '@hooks/useCustomEvent';

// import { CustomEventType } from '@interface/common';
// import { RtcType, RtcUserRole } from '@interface/api';
// import { CoreState } from '@store/core/reducers';
// import { handleEndRtc, handleConfirmDisbandRtc } from '@helpers/handler';

// import EndRtcButton from '@components/endRtcButton';

// const WithEndRtcButton = (): JSX.Element => {
//   const { users, rtcType, myUserId } = useSelector((state: CoreState) => ({
//     users: state.basic.users,
//     rtcType: state.basic.rtcType,
//     myUserId: state.auth.userId,
//   }));
//   const me = users.find((user) => user.userId === myUserId);
//   const dispatch = useDispatch();

//   const [needConfirm, setNeedConfirm] = useState(false);

//   const handleLeaveRtcAlone = useCallback(() => {
//     handleEndRtc(dispatch, { disbandRtc: false });
//   }, [dispatch]);

//   const handleDisbandRtc = useCallback(() => {
//     handleConfirmDisbandRtc(dispatch);
//   }, [dispatch]);

//   const handleClickEndButton = useCallback(() => {
//     if (
//       rtcType === RtcType.direct ||
//       users.length === 1 ||
//       me?.role === RtcUserRole.member
//     ) {
//       handleLeaveRtcAlone();
//       return;
//     }

//     setNeedConfirm(true);
//   }, [rtcType, users, me, handleLeaveRtcAlone]);

//   const showClosePanelEventCallback = useCallback(() => {
//     setNeedConfirm(true);
//   }, []);

//   useCustomEvent(
//     CustomEventType.showMajorWindowClosePanel,
//     showClosePanelEventCallback
//   );

//   return (
//     <EndRtcButton
//       needConfirm={needConfirm}
//       onVisibleChange={setNeedConfirm}
//       onClickRtcButton={handleClickEndButton}
//       onDisbandRtc={handleDisbandRtc}
//       onLeaveRtcAlone={handleLeaveRtcAlone}
//     />
//   );
// };

// export default WithEndRtcButton;
