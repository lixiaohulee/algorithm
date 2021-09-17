// import React, { useState, useEffect, useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { clipboard } from 'electron';

// import i18n from '@i18n';
// import { RtcUserRole } from '@interface/api';
// import { CoreState } from '@store/core/reducers';
// import { handleSetRtcName } from '@helpers/handler';

// import { Toast } from '@widgets/toast';

// import RtcInfoTooltip from '@components/rtcInfoTooltip';

// const WithRtcInfoTooltip = (): JSX.Element => {
//   const { rtcName, number, memberCount, memberLimit, host } = useSelector(
//     (state: CoreState) => ({
//       number: state.basic.number,
//       rtcName: state.basic.rtcName,
//       memberCount: state.basic.users.length,
//       memberLimit: state.basic.memberLimit,
//       host: state.basic.users.find((u) => u.role === RtcUserRole.master)
//         ?.displayName,
//     })
//   );
//   const dispatch = useDispatch();

//   const [trigger, setTrigger] = useState('hover');
//   const [localRtcName, setLocalRtcName] = useState(rtcName);

//   useEffect(() => {
//     setLocalRtcName(rtcName);
//   }, [rtcName]);

//   const handleCopyRtcNum = useCallback(() => {
//     clipboard.writeText(number);
//     Toast({ text: i18n.t('Copied') });
//   }, [number]);

//   const handleRtcNameChange = useCallback(
//     (value) => {
//       setLocalRtcName(value);
//     },
//     [setLocalRtcName]
//   );

//   const hanldeBlur = useCallback(() => {
//     handleSetRtcName(dispatch, { rtcName: localRtcName });
//     setTrigger('hover');
//   }, [dispatch, localRtcName]);

//   const handleFocus = useCallback(() => {
//     setTrigger('click');
//   }, [setTrigger]);

//   return (
//     <RtcInfoTooltip
//       host={host}
//       trigger={trigger}
//       rtcName={localRtcName}
//       rtcNumber={number}
//       capacity={`${memberCount} / ${memberLimit}`}
//       onValueChanged={handleRtcNameChange}
//       onBlur={hanldeBlur}
//       onFocus={handleFocus}
//       onClickCopyIcon={handleCopyRtcNum}
//     />
//   );
// };

// export default WithRtcInfoTooltip;
