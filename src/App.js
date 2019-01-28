import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';




class App extends Component {

  state = {
 
    
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title:"어바웃타임",
            poster:"https://recos.io/files/RULdvMePv5ALExtYvzZI7y1dds63BuFr_.jpg"
          },
          {
            title:"너의 결혼식",
            poster:"http://tenasia.hankyung.com/webwp_kr/wp-content/uploads/2018/07/2018071816393569599-540x774.jpg"
          },
          {
            title:"국가 부도의 날",
            poster:"https://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F274291ad9da34893b93fa702335536501540800387124"
          },
          {
            title:"더 킹",
            poster:"https://upload.wikimedia.org/wikipedia/ko/thumb/8/86/%EB%8D%94_%ED%82%B9_2017.jpg/250px-%EB%8D%94_%ED%82%B9_2017.jpg"
          },
          { title:"베테랑",
            poster:"https://upload.wikimedia.org/wikipedia/ko/thumb/1/11/%EB%B2%A0%ED%85%8C%EB%9E%91.jpg/250px-%EB%B2%A0%ED%85%8C%EB%9E%91.jpg"
          }
        ]
      })
    },3000);
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map((movie,index) => {
      return <Movie title ={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
