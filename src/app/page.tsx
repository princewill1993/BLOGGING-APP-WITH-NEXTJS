import NewsList from "@/components/news/NewsList";

export default function Home() {
  return (
    <section className="container mx-auto p-2">
      <div className="text-center my-10 max-w-[900px] mx-auto">
        <h1 className="text-5xl font-bold">
          Find trending news around the globe
        </h1>
        <p className="text-2xl mt-5 font-light text-gray-500">
          Easily find news on sports, business entertainment, tech, agriculture
          and education around the world
        </p>
      </div>
      <NewsList />
    </section>
  );
}
