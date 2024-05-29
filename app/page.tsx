import { Hero, SearchResults } from "@/components";
import Image from "next/image";
import { HomeProps } from "@/types";
import { getFootballPlayers } from "@/utils";

export default async function Home({ searchParams }: HomeProps) {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
    </main>
  );
}
