import Head from 'next/head'
import Image from 'next/image'
import HomePageDonations from './homepageDonantions.page'
import HomePageFooter from './homepageFooter.page'
import HomePageJoinUs from './homepageJoinUs.page'
import HomePageLeadIntro from './homepageLeadIntro.page'
import HomePageLiveService from './homepageLiveService.page'
import HomePageServices from './homepageServices.page'
import HomePageWhereLocation from './homepageWhereLocation.page'
import HomePageWorshipWithUs from './homepageWorshipWithUs.page'
import Slider from './slider.page'
// import styles from './../../styles/Home.module.css'


export default function Home() {
  return (
    <>
    <div className="homepage-body">
      <Slider />
      <HomePageLiveService />
      <HomePageServices />
      <HomePageLeadIntro />
      <HomePageWorshipWithUs />
      <HomePageDonations />
      <HomePageJoinUs />
      <HomePageWhereLocation />
      <HomePageFooter />
    </div>
    </>
  )
}
