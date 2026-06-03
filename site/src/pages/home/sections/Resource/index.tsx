// 资源汇集的板块
import React from 'react';
import { Space } from '@ddmc-design/web-react';
import Section from '../../components/Section';
import ResourceCard from './components/Card';
import LogoFigmaBlue from '../../assets/logo_Figma_blue.svg';
import LogoSketchBlue from '../../assets/logo_Sketch_blue.svg';
import LogoIconBoxBlue from '../../assets/logo_IconBox_blue.svg';
import LogoDdmcProBlue from '../../assets/logo_DdmcPro_blue.svg';
import LogoGitHubWhite from '../../assets/logo_Github_white.svg';
import LogoDdmcCliWhite from '../../assets/logo_DdmcCli_white.svg';
import LogoDdmcWebpackPluginWhite from '../../assets/logo_DdmcWebpackPlugin_white.svg';
import LogoReact from '../../assets/logo_react.svg';
import LogoMobile from '../../assets/logo_mobile.svg';
import LogoVue from '../../assets/logo_vue.svg';
import LogoJiShiBlue from '../../assets/logo_JiShi_blue.svg';
import {
  linkDocsDdmcComponent,
  linkDocsComponentUsage,
  linkDesignerDocs,
  linkDocsDesignPrinciples,
  linkFigmaDdmcComponent,
  linkFigmaDdmcPro,
  linkMobileComponent,
  linkFigmaDdmcIcons,
  linkDocksDdmcVueComponent,
  linkGithubCodeRepository,
  linkGithubRepositoryDdmcWebpackPlugin,
  linkGithubRepositoryDdmcCli,
  linkDocsDesignStyleGuideline,
  linkSketchResource,
  linkJiShiResource,
  linkDdmcMobile,
} from '../../constant/links';
import DesignValues from './components/DesignValues';
import useLocale from '../../hooks/useLocale';
import useIsMobile from '../../utils/useIsMobile';

export default function SectionResource() {
  const locale = useLocale();
  const isMobile = useIsMobile();
  return (
    <Section
      headerProps={{
        title: locale['resource.title'],
        subTitle: locale['resource.subTitle'],
      }}
      addTracker
    >
      <Space size={20} direction={isMobile ? 'vertical' : 'horizontal'}>
        <ResourceCard
          title={locale['resource.design.title']}
          description={locale['resource.design.desc']}
          href={linkDesignerDocs}
          bodyResourceList={[
            {
              name: locale['resource.design.ddmcPro'],
              logo: <LogoDdmcProBlue />,
              href: linkFigmaDdmcPro,
            },
            {
              name: locale['resource.design.jishi'],
              logo: <LogoJiShiBlue />,
              href: linkJiShiResource,
            },
            {
              name: locale['resource.design.sketch'],
              logo: <LogoSketchBlue />,
              href: linkSketchResource,
            },
            {
              name: locale['resource.design.iconBox'],
              logo: <LogoIconBoxBlue />,
              href: linkFigmaDdmcIcons,
            },
            {
              name: locale['resource.design.ddmcComponent'],
              logo: <LogoFigmaBlue />,
              href: linkFigmaDdmcComponent,
            },
            {
              name: locale['resource.design.mobileComponent'],
              logo: <LogoFigmaBlue />,
              href: linkMobileComponent,
            },
          ]}
          footerResourceList={[
            {
              name: locale['resource.design.designPrinciples'],
              href: linkDocsDesignPrinciples,
            },
            {
              name: locale['resource.design.styleGuide'],
              href: linkDocsDesignStyleGuideline,
            },
            {
              name: locale['resource.design.ddmcComponentUsage'],
              href: linkDocsComponentUsage,
            },
          ]}
        />
        <ResourceCard
          type="dark"
          title={locale['resource.develop.title']}
          description={locale['resource.develop.desc']}
          href={linkDocsDdmcComponent}
          bodyStyle={{ marginTop: 58 }}
          bodyResourceList={[
            {
              name: locale['resource.develop.ddmcCli'],
              logo: <LogoDdmcCliWhite />,
              href: linkGithubRepositoryDdmcCli,
            },
            {
              name: 'Ddmc Webpack Plugin',
              logo: <LogoDdmcWebpackPluginWhite />,
              href: linkGithubRepositoryDdmcWebpackPlugin,
            },
            {
              name: locale['resource.develop.github'],
              logo: <LogoGitHubWhite />,
              href: linkGithubCodeRepository,
            },
          ]}
          footerResourceList={[
            {
              name: 'Web React',
              logo: <LogoReact />,
              href: linkDocsDdmcComponent,
            },
            {
              name: 'Web Vue',
              logo: <LogoVue />,
              href: linkDocksDdmcVueComponent,
            },
            {
              name: 'Mobile React',
              logo: <LogoMobile />,
              href: linkDdmcMobile,
            },
          ]}
        />
      </Space>
      <DesignValues style={{ marginTop: 20 }} />
    </Section>
  );
}
