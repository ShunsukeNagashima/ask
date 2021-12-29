import { WalletConnectButtonComponent } from './walletConnectButton';

const onClick = () => {};

export type Props = {
  walletName: string;
  icon: string;
  onClick: () => Promise<void>;
};

export const WalletConnectButton: React.FC<Props> = (props) => {
  const { icon, walletName, onClick } = props;
  return (
    <WalletConnectButtonComponent
      icon={icon}
      walletName={walletName}
      onClick={onClick}
    />
  );
};
