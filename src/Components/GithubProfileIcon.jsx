import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Space } from 'antd';
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ prefixCls, css }) => ({
    linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

const GithubProfileIcon = () => {
    const { styles } = useStyle();

    const openGitHub = () => {
        window.open('https://github.com/RudrakshDev', '_blank'); // Change to your GitHub URL
    };

    return (
        <ConfigProvider
            button={{
                className: styles.linearGradientButton,
            }}
        >
            <Space>
                <Button type="primary" size="large" icon={<GithubOutlined />} onClick={openGitHub} >
                    Visit My GitHub
                </Button>
            </Space>
        </ConfigProvider>
    );
};
export default GithubProfileIcon;