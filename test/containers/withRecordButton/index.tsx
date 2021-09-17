// import React, { useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { CoreState } from '@store/core/reducers';

// import { StreamRecordStatus } from '@interface/state';

// import { handleSetStreamRecordStatus } from '@helpers/handler';

// import RecordButton from '@components/recordButton';

// const WithRecordButton = (): JSX.Element => {
//   const { recordStatus } = useSelector((state: CoreState) => ({
//     recordStatus: state.streamRecord.recordStatus,
//   }));

//   const dispatch = useDispatch();

//   const handleStopRecord = useCallback(() => {
//     handleSetStreamRecordStatus(dispatch, StreamRecordStatus.stop);
//   }, [dispatch]);

//   const handleStartRecord = useCallback(() => {
//     handleSetStreamRecordStatus(dispatch, StreamRecordStatus.start);
//   }, [dispatch]);

//   const handlePauseRecord = useCallback(() => {
//     handleSetStreamRecordStatus(dispatch, StreamRecordStatus.pause);
//   }, [dispatch]);

//   const handleResumeRecord = useCallback(() => {
//     handleSetStreamRecordStatus(dispatch, StreamRecordStatus.start);
//   }, [dispatch]);

//   return (
//     <RecordButton
//       recordStatus={recordStatus}
//       onStopRecord={handleStopRecord}
//       onStartRecord={handleStartRecord}
//       onPauseRecord={handlePauseRecord}
//       onResumeRecord={handleResumeRecord}
//     />
//   );
// };

// export default WithRecordButton;
