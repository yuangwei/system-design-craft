import React from 'react'
import { useRouter } from "next/router"
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <h1 className='nx-font-bold'>System Design Craft</h1>,
  project: {
    link: 'https://github.com/yuangwei/system-design-craft',
  },
  docsRepositoryBase: 'https://github.com/yuangwei/system-design-craft',
  footer: {
    text: `${new Date().getFullYear()} © Yuang Wei`,
  },
  head(props) {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </>
    )
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath === "/") {
      return {
        titleTemplate: "System Design Craft",
      };
    }

    return {
      titleTemplate: "%s - System Design Craft",
    };
  },
}

export default config
