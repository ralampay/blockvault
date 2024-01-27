import React, {useState, useEffect} from "react";
import detectEthereumProvider from '@metamask/detect-provider';

export default StateHeader = (params) => {
  const [hasProvider, setHasProvider] = useState(false);
  const initialState = { accounts: [] };
  const [wallet, setWallet] = useState(initialState);

  useEffect(() => {
    const refreshAccounts = (accounts) => {
      if (accounts.length > 0) {
        updateWallet(accounts);
      } else {
        setWallet(initialState);
      }
    }

    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      console.log(`provider: ${provider}`);
      setHasProvider(provider);
    }

    getProvider();

    return () => {
      window.ethereum?.removeListener('accountsChanged', refreshAccounts);
    }
  }, []);

  const updateWallet = async (accounts) => {
    setWallet({ accounts });
  }

  const handleConnect = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    updateWallet(accounts);
  }

  return (
    <div>
      <div>Injected Provider {hasProvider ? 'DOES' : 'DOES NOT'} Exist</div>
      { hasProvider &&
        <button
          onClick={handleConnect}
        >
          Connect MetaMask
        </button>
      }

      { wallet.accounts.length > 0 &&
        <div>
          <h1>
            Accounts
          </h1>
          {wallet.accounts.map((account, i) => {
            return (
              <li key={`account-${i}`}>
                {account}
              </li>
            );
          })}
        </div>
      }
    </div>
  );
}
