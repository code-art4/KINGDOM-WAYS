import Head from 'next/head'
import Image from 'next/image'


export default function HomePageServices() {
  return (
    <section 
    className="d-flex flex-row justify-content-around pt-3 bg-white pt-5 homepage-services-section"
    >   
        <div 
            className="homepage-service-box homepage-services-liveservice"
            
        >
            live service
        </div>
        <div 
            className="homepage-service-box homepage-service-weddings"
        >
            Church weddings
        </div>
        <div 
            className="homepage-service-box homepage-service-events"
        >
            Special Events
        </div>
    </section>
  )
}
