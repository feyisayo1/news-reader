import "./App.css"
import useFetch from "./functions/useFetch";
import NewsCard from "./components/NewsCard";
import LoadingState from "./components/LoadingState";

//prettier-ignore
const App = () => {
  const { data, error, isLoading } = useFetch( "https://newsapi.org/v2/everything?q=apple&from=2025-03-19&to=2025-03-19&sortBy=popularity&pageSize=10&apiKey=6eea67bca3884f1ab90372ac184ac945" );

  if (isLoading){ 
    const arr = [1,1,1,1,1,1,]
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
        <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[5%]">
          {arr.map(()=> <LoadingState key={Math.random()}/>)}
        </section>
      </main>
    )
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
      <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[5%]">
        {data.map((demo) => (
          <NewsCard key={Math.random()} title={demo.title} author={demo.author} urlToImage={demo.urlToImage} description={demo.description} publishedAt={demo.publishedAt} />
        ))}
      </section>
    </main>
  );
};

export default App;
