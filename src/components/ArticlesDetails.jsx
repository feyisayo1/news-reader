import { useParams } from "react-router-dom";



const ArticlesDetails = () => {
  const params = useParams().newsId;
  return <div>ArticlesDetails {params}</div>;
};

export default ArticlesDetails;
