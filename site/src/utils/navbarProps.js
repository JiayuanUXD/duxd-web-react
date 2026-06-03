import { version, dependencies } from '../../package.json';
let ddmcVersion = dependencies['@ddmc-design/web-react'] || version;
ddmcVersion = ddmcVersion.replace('^', '');

export default {
  joinChats: [
    {
      name: 'DdmcDesign 用户群',
      id: '6659915789467910412',
    },
    {
      name: 'DdmcDesign 设计群',
      id: '6908243256979488771',
    },
  ],
  versions: [
    { version: '1.x', link: `https://${window.ddmcConfig?.internalHostName}/react/1.x/docs/start` },
    { version: ddmcVersion, link: 'https://ddmc.design' },
  ],
  defaultVersion: version,
  loginHref: `/common/login?redirectUrl=${location.href}`,
};
