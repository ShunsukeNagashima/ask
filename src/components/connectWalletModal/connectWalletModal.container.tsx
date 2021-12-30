import { ConnectWalletModalComponent } from './connectWalletModal';
import { useMetamask } from '../../hooks/useMetamask';

export type Props = {
  onClose: () => void;
};

export const ConnectWalletModal: React.FC<Props> = ({ onClose }) => {
  const { connectMetamask } = useMetamask();

  const connectWallet = async () => {
    await connectMetamask();
    onClose();
  };

  return (
    <ConnectWalletModalComponent
      connectMetamask={connectWallet}
      onClose={onClose}
    />
  );
};
