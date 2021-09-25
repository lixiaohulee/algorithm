// import React, { useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { CoreState } from '@store/core/reducers';
// import {
//   handleSetPinnedKwaiUserId,
//   handleClearPinnedKwaiUserId,
// } from '@helpers/handler';

// import PingButton from '@components/pingButton';

// export interface IWithPingButtonProps {
//   kwaiUserId: string;
// }
// const WithPingButton = (props: IWithPingButtonProps): JSX.Element => {
//   const { kwaiUserId } = props;
//   const { pinnedKwaiUserId } = useSelector((state: CoreState) => ({
//     pinnedKwaiUserId: state.extra.pinnedKwaiUserId,
//   }));

//   const dispatch = useDispatch();

//   const handleIsPingChanged = useCallback(
//     (willPing: boolean) => {
//       if (willPing) {
//         handleSetPinnedKwaiUserId(dispatch, kwaiUserId);
//       } else {
//         handleClearPinnedKwaiUserId(dispatch);
//       }
//     },
//     [dispatch, kwaiUserId]
//   );

//   return (
//     <PingButton
//       isPing={pinnedKwaiUserId === kwaiUserId}
//       onIsPingChange={handleIsPingChanged}
//     />
//   );
// };

// export default WithPingButton;
