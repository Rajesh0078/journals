import Home_component from "@/components/Home_component";

export default async function Home() {
  const res = await fetch('http://api.crossref.org/works')
  const data = await res.json()
  return (
    <main className="h-dvh w-full pt-[50px] px-[10%]">
      <div className="w-full flex flex-col items-center p-4 md:p-6 text-center">
        <p className="text-[27px] md:text-[32px] font-medium leading-[28px] mb-2"><span className="hidden md:inline">Welcome to the </span>World of Journals</p>
        <p className="text-sm text-black/80 xl:w-[50%] text-center leading-[18px] md:leading-[20px]">
          Easily find scholarly articles and journals. Use the search option below to discover research papers, review articles, case studies, and more across various fields of study. <span className="hidden md:inline">Our platform provides access to a vast collection of academic publications to support your research and educational needs.</span>
        </p>
      </div>
      <Home_component data={data?.message?.items} />
    </main>
  );
}
