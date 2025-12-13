import About from "@/components/app/landing/About";
import OurProjects from "@/components/app/landing/OurProjects";
import Footer from "@/components/app/landing/Footer";
import Hero from "@/components/app/landing/Hero";
import NavHeader from "@/components/app/landing/nav/NavHeader";
import Events from "@/components/app/landing/Events";
import WhatWeDo from "@/components/app/landing/WhatWeDo";
import OurMission from "@/components/app/landing/OurMission";
import Stats from "@/components/app/landing/Stats";
import CallToAction from "@/components/app/landing/CallToAction";
import Map from "@/components/app/landing/Map";

export default function App() {
  return (
    <>
      <NavHeader />
      <Hero />
      <About />
      <WhatWeDo />
      <OurMission />
      <OurProjects />
      <Stats />
      <CallToAction />
      <Events />
      <Map />
      <Footer />
    </>
  );
}
