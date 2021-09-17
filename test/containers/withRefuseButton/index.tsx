// import React, { useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { CoreState } from '@store/core/reducers';
// import { handleRefuseRtc } from '@helpers/handler';

// import RefuseButton from '@components/refuseButton';

// const WithRefuseButton = (): JSX.Element => {
//   const { sid } = useSelector((state: CoreState) => ({
//     sid: state.basic.sid,
//   }));
//   const dispatch = useDispatch();

//   const handleRefuse = useCallback(() => {
//     handleRefuseRtc(dispatch, { sid });
//   }, [dispatch, sid]);

//   return <RefuseButton onClickRefuseButton={handleRefuse} />;
// };

// export default WithRefuseButton;
