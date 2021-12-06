import Head from 'next/head'
import Image from 'next/image'
import HomePageFooter from '../../homepageFooter.page'
import WebNavBar from './web.navbar'


export default function WebDashboard(props) {
  return (
    <section 
    className="d-flex flex-column justify-content-around bg-white box-shadow w-100">
        <WebNavBar />
        {props.children}
        <HomePageFooter />
    </section>
  )
}
