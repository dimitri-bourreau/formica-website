import { HtmlHead } from "@/components/common/HtmlHead";
import { Intro } from "@/components/home/Intro";
import { Planning } from "@/components/home/Planning";
import { HebdoPosts } from "@/components/home/HebdoPosts";

export default function Home() {
  return (
    <>
      <HtmlHead />

      <main>
        <div className="flex flex-col gap-6 items-center max-w-xl">
          <Intro />
          <Planning />
          <HebdoPosts />
        </div>
      </main>
    </>
  );
}
