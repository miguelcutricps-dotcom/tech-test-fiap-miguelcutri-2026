import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import Marquee from "@/components/Marquee/Marquee";
import Intro from "@/components/Intro/Intro";
import MarqueeScroll from "@/components/MarqueeScroll/MarqueeScroll";
import Courses from "@/components/Courses/Courses";
import FAQ from "@/components/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Marquee />
        <Intro />
        <MarqueeScroll />
        <Courses />
        <FAQ />
      </main>
    </>
  );
}
