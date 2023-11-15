import Image from "next/image";
import Index from "../app/module/index";
export default function Home() {
  return (
    <main className="p-10 flex justify-center w-screen">
      <div>
        <Index />
      </div>
    </main>
  );
}
