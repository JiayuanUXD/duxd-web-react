const ddmcConfig = window.ddmcConfig || {};

export const hostname =
  location.hostname !== ddmcConfig.externalHostName &&
  location.hostname !== ddmcConfig.internalHostName
    ? ddmcConfig.externalHostName
    : location.hostname;

export const isExternal = location.hostname === ddmcConfig.externalHostName;
export const apiBasename = `https://${hostname || 'ddmc.design'}`;
