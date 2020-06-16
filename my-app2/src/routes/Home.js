import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // 구조분해할당
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false }); //축약해서 사용 가능?
  };

  componentDidMount() {
    this.getMovies();
  }

  /* 
    React에서는 class -> className
    <label />태그의  for 속성도 htmlFor 로 써야한다
  */
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.poster}
                  genres={movie.genres}
                />
              ); //alt키 누르면 됨
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
