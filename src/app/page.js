import About from "@/components/Sections/About";
import Agenda from "@/components/Sections/Agenda";
import FAQ from "@/components/Sections/FAQ";
import Hero from "@/components/Sections/Hero";
import Leaderboard from "@/components/Sections/Leaderboard";

export default function Home() {
  return (
    <main className="my-[200px] flex flex-col gap-[30vh]">
      <Hero />
      <About />
      <Agenda />
      <Leaderboard />
      <FAQ />
    </main>
  );
}
