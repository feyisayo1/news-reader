import "./App.css"
import useFetch from "./functions/useFetch";
import NewsCard from "./components/NewsCard";

const demo = {
  author: "Grace Ikpang",
  publishedAt: new Date(),
  title: "Starting out as a Product designer",
  urlToImage: "https://gizmodo.com/app/uploads/2024/10/Meta-Quest-7-e1742394570642.jpg",
  description: "Embarking on a journey as a product designer can be an exhilarating and fulfilling experience",
};

//prettier-ignore
const App = () => {
  const { data, error, isLoading } = useFetch( "https://newsapi.org/v2/everything?q=apple&from=2025-03-19&to=2025-03-19&sortBy=popularity&pageSize=10&apiKey=6eea67bca3884f1ab90372ac184ac945" );

  if (isLoading){ return <p>Loading news...</p>};
  if (error) return <p>Error: {error}</p>;

  console.log(data);
  

  if (data) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[5%]">
          {data.map((demo) => (
            <NewsCard key={Math.random()} title={demo.title} author={demo.author} urlToImage={demo.urlToImage} description={demo.description} publishedAt={demo.publishedAt} />
          ))}
        </div>
      </main>
    )
  }


  return (
    <main className="flex px-[5%] pt-10">
      
      <NewsCard title={demo.title} author={demo.author} urlToImage={demo.urlToImage} description={demo.description} publishedAt={demo.publishedAt} />
    </main>
  );
};

export default App;
