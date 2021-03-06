interface NetworkState<T> {
  dappProvider: T;
  proxyProvider: T;
}

// It doesn't have to be tracked or persistent, it will init on every hard refresh
const networkState: NetworkState<any> = {
  dappProvider: null,
  proxyProvider: null,
};

export function getNetworkState<T>(
  key: keyof NetworkState<T>
): NetworkState<T>[keyof NetworkState<T>] {
  return networkState[key];
}

export function setNetworkState<T>(key: keyof NetworkState<T>, value: any) {
  networkState[key] = value;
}

export const clearNetworkState = () => {
  networkState.dappProvider = null;
  networkState.proxyProvider = null;
};

export const clearDappProvider = () => {
  networkState['dappProvider'] = networkState.dappProvider;
};
