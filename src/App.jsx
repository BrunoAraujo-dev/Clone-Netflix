import { useEffect, useState } from "react";
import "./App.css";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import MovieRow from "./components/MovieRow";
import { getHomeList, getMovieInfo } from "./tmdb";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturaData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const list = await getHomeList();
      setMovieList(list);

      const originals = list.filter((i) => i.slug === "originals");
      const randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      const chosen = originals[0].items.results[randomChosen];
      const choseInfo = await getMovieInfo(chosen.id, "tv");
      setFeaturaData(choseInfo);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    // return () => {
    //   window.removeEventListener("scroll", scrollListener);
    // };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="listas">
        {movieList.map((item, i) => (
          <MovieRow key={i} title={item.title} items={item.items} />
        ))}
      </section>
      <footer style={{ margin: "20px 0", textAlign: "center" }}>
        Feito com{" "}
        <span role="img" aria-label="coração">
          ❤️
        </span>{" "}
        por Bruno
      </footer>
    </div>
  );
};

export default App;
