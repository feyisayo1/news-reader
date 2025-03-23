import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import formatDate from "../functions/formatDate";

const ArticlesDetails = () => {
  const params = Number ( useParams().newsId );
  const { data, error, isLoading } = useFetch( "https://newsapi.org/v2/everything?q=apple&from=2025-03-19&to=2025-03-19&sortBy=popularity&pageSize=10&apiKey=6eea67bca3884f1ab90372ac184ac945" );
  if(isLoading) return<>loading</>

  const article = data.find((item) => item.id === params); 
  const newDate = formatDate(article.publishedAt)

  const bgStyle = {
    backgroundImage: `url(${article.urlToImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat"
  }

  return (
    <main className="flex h-full relative gap-10 min-h-screen px-[5%] flex-col py-10 md:py-20 bg-gray-100 leading-none">

      <div className="flex gap-2 w-full flex-wrap sm:flex-nowrap">
        <div className="profile min-h-14 min-w-14 rounded-full md:min-h-16 md:min-w-16 lg:min-h-20 lg:min-w-20"></div>

        <div className="flex flex-col justify-center gap-2">
          <h2 className="text-[16px] font-normal author md:text-[20px]">{article.author}</h2>
          <p className="text-[12px] ">Published: {newDate}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-[20px] md:text-[25px] lg:text-[30px]">{article.title}</h1>
        <p className="text-[12px] md:text-[14px] leading-normal"> {article.description}</p>
      </div>

      <div className="w-full relative max-w-[700px] aspect-[16/9]">
        <img src={article.urlToImage} alt={article.title} className="rounded object-contain"/>
      </div>

      <div className="flex flex-col gap-5 sm:pt-10 text-[14px] leading-normal">
        <p>{article.content}</p>
        <a  href={article.url} className="bg-gray-300 w-fit py-2 px-5 rounded-full text-[12px] font-medium text-white"><p>Visit Mian Blog</p></a>
      </div>
    </main>
  );
};

export default ArticlesDetails;
