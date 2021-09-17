// import React, { useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { CoreState } from '@store/core/reducers';
// import { StreamRecordStatus } from '@interface/state';

// import { handleSetStreamRecordStatus } from '@helpers/handler';

// import RecordBar from '@components/recordBar';

// const WithRecordBar = (): JSX.Element => {
//   const { recordStatus } = useSelector((state: CoreState) => ({
//     recordStatus: state.streamRecord.recordStatus,
//   }));
//   const dispatch = useDispatch();

//   const handleStopRecord = useCallback(() => {
//     handleSetStreamRecordStatus(dispatch, StreamRecordStatus.stop);
//   }, [dispatch]);

//   const handlePauseRecord = useCallback(() => {
//     handleSetStreamRecordStatus(dispatch, StreamRecordStatus.pause);
//   }, [dispatch]);

//   const handleResumeRecord = useCallback(() => {
//     handleSetStreamRecordStatus(dispatch, StreamRecordStatus.start);
//   }, [dispatch]);

//   return (
//     <RecordBar
//       recordStatus={recordStatus}
//       onStopRecord={handleStopRecord}
//       onPauseRecord={handlePauseRecord}
//       onResumeRecord={handleResumeRecord}
//     />
//   );
// };

// export default WithRecordBar;
