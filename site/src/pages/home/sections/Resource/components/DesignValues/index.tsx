import React, { CSSProperties } from 'react';
import { Space } from '@ddmc-design/web-react';
import styles from './index.module.less';
import IconDdmcA from '../../../../assets/ddmc_a.svg';
import IconDdmcR from '../../../../assets/ddmc_r.svg';
import IconDdmcC from '../../../../assets/ddmc_c.svg';
import IconDdmcO from '../../../../assets/ddmc_o.svg';
import useLocale from '../../../../hooks/useLocale';
import useIsMobile from '../../../../utils/useIsMobile';

interface DesignValuesProps {
  style?: CSSProperties;
}

export default function DesignValues({ style }: DesignValuesProps) {
  const locale = useLocale();
  const isMobile = useIsMobile();
  const designValueList = [
    {
      icon: <IconDdmcA />,
      title: locale['resource.designValue.title.a'],
      description: locale['resource.designValue.desc.a'],
    },
    {
      icon: <IconDdmcR />,
      title: locale['resource.designValue.title.r'],
      description: locale['resource.designValue.desc.r'],
    },
    {
      icon: <IconDdmcC />,
      title: locale['resource.designValue.title.c'],
      description: locale['resource.designValue.desc.c'],
    },
    {
      icon: <IconDdmcO />,
      title: locale['resource.designValue.title.o'],
      description: locale['resource.designValue.desc.o'],
    },
  ];
  return (
    <div className={styles.wrapper} style={style}>
      <Space
        size={20}
        style={{ display: 'flex', justifyContent: 'space-between' }}
        direction={isMobile ? 'vertical' : 'horizontal'}
      >
        {designValueList.map(({ icon, title, description }) => (
          <Space size={20} key={title}>
            <div>{icon}</div>
            <div>
              <div className={styles.title}>{title}</div>
              <div className={styles.desc}>{description}</div>
            </div>
          </Space>
        ))}
      </Space>
    </div>
  );
}
