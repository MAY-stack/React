// import { useState, useCallback } from "react";
// // import axios from 'axios';
// import NewsList from "./components/NewsList";
// import Categories from "./components/Categories";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";


const App = () => {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), []);
  // // const [data, setData] = useState(null);
  // // const onClick = () => {
  // //   axios.get('https://jsonplaceholder.typicode.com/todos/1')
  // //         .then(response => {
  // //           setData(response.data);
  // //         });
  // // };
  // // const onClick = async () => {
  // //   try{
  // //     const response =await axios.get(
  // //       'https://newsapi.org/v2/top-headlines?country=kr&apiKey=37a16c2c9cbb4211adcfa126c1e9b26f',
  // //     );
  // //     setData(response.data);
  // //   }catch (e) {
  // //     console.log(e);
  // //   }
  // // };
  return (
    // <div>
    //     <Categories category={category} onSelect={onSelect}/>
    //     <NewsList category={category}/>
    // {/*//   <div>
    // //     <button onClick={onClick}>불러오기</button>
    // //   </div>
    // //   {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readonly={true}/>} */}
    // </div>
      <Routes>
        <Route path='/' element={<NewsPage/>}/>
        <Route path='/:category' element={<NewsPage/>}/>
      </Routes>

  );
};

export default App;