import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Experience from "@/components/main/Experience";
import Projects from "@/components/main/Projects";
import Form from "@/components/main/Form";
import Education from "@/components/main/Education";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Form />
      </div>
    </main>
  );
}
