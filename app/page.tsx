import Header from "@/components/Header";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <section className="bg-[#10011C] min-h-svh lg:min-h-dvh">
      <div className="py-2 px-1 h-full">
        <Header />
        <Hero />
      </div>
    </section>
  );
}
