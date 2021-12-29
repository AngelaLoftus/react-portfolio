//PROJECT CARDS 

import React, { Component } from "react";
import projects from "./projects.json";
import Project from "../../Project";
import Wrapper from "../Wrapper";

class MyPortfolio extends React.Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects
  };

  render() {
    return (
      <Wrapper>
        {this.state.projects.map(project => (
          <Project
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            occupation={project.occupation}
            location={project.location}
          />
        ))}
        </Wrapper>
    );
  }
}

export default MyPortfolio;
