// import React, { useMemo } from 'react';

// import i18n from '@i18n';
// import useSubStore from '@hooks/useSubStore';
// import { SubStoreStateType } from '@interface/state';

// import NetworkSignal from '@components/networkSignal';

// export interface IWithNetworkSignalProps {
//   from?: string;
//   container?: Element;
// }

// const WithNetworkSignal = (props: IWithNetworkSignalProps): JSX.Element => {
//   const { from, container } = props;
//   const {
//     uplinkIsGood,
//     uplinkLostRate,
//     uplinkBandwidth,
//     downlinkIsGood,
//     downlinkLostRate,
//     downlinkBandwidth,
//     rtt,
//   } = useSubStore<{
//     uplinkIsGood: boolean;
//     uplinkLostRate: number;
//     uplinkBandwidth: number;
//     downlinkIsGood: boolean;
//     downlinkLostRate: number;
//     downlinkBandwidth: number;
//     rtt: number;
//   }>(SubStoreStateType.sdkNetworkQuality, {
//     uplinkIsGood: true,
//     uplinkLostRate: 0,
//     uplinkBandwidth: 0,
//     downlinkIsGood: true,
//     downlinkLostRate: 0,
//     downlinkBandwidth: 0,
//     rtt: 0,
//   });

//   const connectionState = useMemo(() => {
//     if (uplinkIsGood && downlinkIsGood) return i18n.t('Connection_Normal');
//     if (!uplinkIsGood && !downlinkIsGood) return i18n.t('Connection_Very_Bad');
//     return i18n.t('Connection_Bad');
//   }, [uplinkIsGood, downlinkIsGood]);

//   return (
//     <NetworkSignal
//       rtt={rtt}
//       uplinkBandwidth={uplinkBandwidth}
//       downlinkBandwidth={downlinkBandwidth}
//       uplinkLostRate={uplinkLostRate}
//       downlinkLostRate={downlinkLostRate}
//       connectionState={connectionState}
//       container={container}
//       from={from}
//     />
//   );
// };

// export default WithNetworkSignal;
