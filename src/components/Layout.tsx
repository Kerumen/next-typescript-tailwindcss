import React, { FC } from 'react'
import Head from 'next/head'

interface LayoutProps {
  title?: string
}

const Layout: FC<LayoutProps> = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main>{children}</main>
  </div>
)

export default Layout
