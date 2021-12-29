import { Props } from './walletConnectButton.container';
import Image from 'next/image';

export const WalletConnectButtonComponent: React.FC<Props> = ({
  walletName,
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center p-2 text-xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  border-blue-500 hover:border-transparent rounded"
    >
      <Image src={icon} alt="metamask-icon" width="50" height="50" />
      <p className="ml-5">{walletName}</p>
    </button>
  );
};
