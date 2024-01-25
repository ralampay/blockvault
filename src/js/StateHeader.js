import React from "react";

export default StateHeader = (params) => {
  const {
    isConnected,
    setIsConnected,
  } = params;

  return (
    <div>
      {(() => {
        if (isConnected) {
          return (
            <div>
              [Wallet Address]
            </div>
          );
        } else {
          return (
            <div>
              <button>
                Connect Wallet
              </button>
            </div>
          );
        }
      })()}
    </div>
  );
}
