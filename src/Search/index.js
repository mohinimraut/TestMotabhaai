import React, { Component } from "react";
import {
  Button,
  Input,
  Footer,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";

import blankImg from "./blank.gif";

import "./style.css";
import "./cards.min.css";

import countriesList from "./countries.json";

class App extends Component {
  state = {
    search: "",
    items:[],
          isLoaded:false,
          filter:"",
  };

  async componentDidMount(){
    fetch('https://api.jikan.moe/v3/search/anime?q=naruto&amp;limit=16').then(res=>res.json()).then(data=>{
        this.setState({
            isLoaded:true,
            items:data.results,
        })
    })
  }




  renderMovie = movie => {
    const { search } = this.state;
    var title = movie.title.toLowerCase();

   

    return (
      <div className="col-md-3" style={{ marginTop: "20px" }}>
        <Card>
          <CardBody>
            <p className="">
              <img
                src={movie.image_url}
                className={"flag flag-" + title}
                alt={movie.title}
              />
            </p>
            <CardTitle title={movie.title}>
              {movie.title.substring(0, 15)}
              {movie.title.length > 15 && "..."}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  };
  


  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
   

    const filteredMovies =this.state.items.filter(movie => {
        return movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });
  
    return (
      <div className="flyout">
        <main style={{ marginTop: "4rem" }}>
          <div className="container" style={{backgroundColor:"#99ddff"}}>
            <div className="row">
              <div className="col-12">
                <center>
                  <h3>
                    <a
                      href="https://www.youtube.com/watch?v=RM_nXOyHwN0"
                      target="_blank"
                    >
                      List of movies here
                    </a>
                  </h3>
                </center>
              </div>
              <div className="col">
                <Input
                //   label="Search Country"
                  label="Search Movie"
                  icon="search"
                  onChange={this.onchange}
                />
              </div>
              <div className="col" />
            </div>
            <div className="row">
            

{filteredMovies.map(movie => {
                return this.renderMovie(movie);
              })}
            </div>
          </div>
        </main>
      
      </div>
    );
  }
}

export default App;
