import * as React from 'react';
import Head from 'next/head';
import { LayoutProps } from "../../../types/appTypes";
import NavBar from './navbar';
import HomePageFooter from './footer';


const Layout: React.FC<LayoutProps> = ({ children, externalStyles, navbar, title="KWLC", withFooter=false }: LayoutProps) => {
  console.log(navbar);
  return (
      <>
        <Head>
            <title>
              {title}
            </title>
            
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            {
              externalStyles.length > 0 && externalStyles.map((x, index) => {
                  return (<link 
                    key={index} 
                    href={x} 
                    rel="stylesheet" 
                  />)
              })
            }
        </Head>
        {navbar == "web" && <NavBar />} 
        {children}
        {withFooter && <HomePageFooter />}
      </>
  );
}

export default Layout;