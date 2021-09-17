// import React, { useMemo } from 'react';
// import { useSelector } from 'react-redux';

// import useSubStore from '@hooks/useSubStore';
// import { CoreState } from '@store/core/reducers';
// import { SubStoreStateType } from '@interface/state';

// import SpeakingBar from '@components/speakingBar';

// export interface ISpeakingBarProps {
//   extraClassName?: string;
// }

// const WithSpeakingBar = (): JSX.Element => {
//   const users = useSelector((state: CoreState) => state.basic.users);

//   const speakingKwaiUserIds = useSubStore<string[]>(
//     SubStoreStateType.speakingKwaiUserIds,
//     []
//   );

//   const someoneSpeaking = useMemo(() => {
//     if (!speakingKwaiUserIds.length) return '';

//     const speakingUsers = users
//       .filter((user) => speakingKwaiUserIds.includes(user.kwaiUserId))
//       .map((user) => user.displayName);

//     if (speakingUsers.length <= 2) {
//       return speakingUsers.join('、');
//     }

//     return `${speakingUsers.slice(0, 2).join('、')}
//       …(${speakingUsers.length})`;
//   }, [users, speakingKwaiUserIds]);

//   return <SpeakingBar someoneSpeaking={someoneSpeaking} />;
// };

// export default WithSpeakingBar;
