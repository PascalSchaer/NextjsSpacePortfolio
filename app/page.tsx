import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Experience from "@/components/main/Experience";
import Projects from "@/components/main/Projects";
import Form from "@/components/main/Form";
import Education from "@/components/main/Education";
import CopyEmailButton from "@/components/main/CopyEmailButton";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        {/* <CopyEmailButton /> */}
        <Projects />
        <Form />
      </div>
    </main>
  );
}
