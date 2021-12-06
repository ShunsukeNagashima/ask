import { ConnectWalletModalComponent } from './connectWalletModal';
import { useMetamask } from '../../hooks/useMetamask';

export type Props = {
  onClose: () => void;
};

export const ConnectWalletModal: React.FC<Props> = ({ onClose }) => {
  const { connectMetamask } = useMetamask();

  return (
    <ConnectWalletModalComponent
      connectMetamask={connectMetamask}
      onClose={onClose}
    />
  );
};
