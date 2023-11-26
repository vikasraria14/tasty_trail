import Slideshow from "./SlideShow";
import Header from "../Header/Header";
import CategoryBox from "./CategoryBox";
import { useHistory, Link } from "react-router-dom";

const LandingPage = () => {
    const category={
        category:"Boquet"
    }
    const history=useHistory()
    const checkLoggedIn=()=>{
      const username = window.localStorage.getItem("username")
      if(username)
      {

      }
      else
      {
          history.push('/login')
      }
  }
  checkLoggedIn()
  return (
    <div className="qwerty">
      <Header />
      <Slideshow />
      <div className="categories">
        <Link className="categoryBox category1" to={{ pathname: '/', state: { category:"indian" } } }>
          <CategoryBox name={"Indian"} />
        </Link>
        <Link className="categoryBox category2" to={{ pathname: '/', state: { category:"japanese" } }}>
          <CategoryBox name={"Japanese"}/>
        </Link>
        <Link className="categoryBox category3" to={{ pathname: '/', state: { category:"italian" } }}>
          <CategoryBox  name={"Italian"}/>
        </Link>
      </div>
      <div className="categories ">
        <Link className="categoryBox category4" to={{ pathname: '/', state: { category:"chinese" } }}>
          <CategoryBox  name={"Chinese"}/>
        </Link>
        <Link className="categoryBox category5" to={{ pathname: '/', state: { category:"mexican" } }}>
          <CategoryBox  name={"Mexican"}/>
        </Link>
        <Link className="categoryBox category6" to={{ pathname: '/', state: { category:"mediterranean" } }}>
          <CategoryBox  name={"Mediterranean"}/>
        </Link>
      </div>

    </div>
  );
};
export default LandingPage;
