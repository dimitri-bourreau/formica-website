import { HtmlHead } from "@/components/common/HtmlHead";
import { Intro } from "@/components/home/Intro";
import { Planning } from "@/components/home/Planning";

export default function Home() {
  return (
    <>
      <HtmlHead />

      <main>
        <div className="flex flex-col gap-6 items-center max-w-xl">
          <Intro />
          <Planning />
        </div>
      </main>
    </>
  );
}
