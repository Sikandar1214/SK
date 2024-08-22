import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import webb from "../../Assets/Projects/web.jpeg";
import bro from "../../Assets/Projects/kahf.jpeg";

import ticc from "../../Assets/Projects/tic.png";
import blog from "../../Assets/Projects/download.png";
import scrapper from "../../Assets/Projects/scrap.jpeg";
import learn from "../../Assets/Projects/elarn.jpeg";


function Projects() {
    return ( <
        Container fluid className = "project-section" >
        <
        Particle / >
        <
        Container >
        <
        h1 className = "project-heading" >
        My Recent < strong className = "purple" > Works < /strong> < /
        h1 > <
        p style = {
            { color: "white" }
        } >
        Here are a few projects I 've worked on recently. < /
        p > <
        Row style = {
            { justifyContent: "center", paddingBottom: "10px" }
        } >
        <
        Col md = { 4 }
        className = "project-card" >
        <
        ProjectCard imgPath = { scrapper }
        isBlog = { false }
        title = "Scrapper"
        description = "Amazon Web Scrapper. It fetch the required items and then save it into Excel File."
        ghLink = "https://github.com/Sikandar1214/Amazon-Web-Scrapper"
        // demoLink="https://chatify-49.web.app/"
        /
        >
        <
        /Col>

        <
        Col md = { 4 }
        className = "project-card" >
        <
        ProjectCard imgPath = { learn }
        isBlog = { false }
        title = "E-Learning System"
        description = "E-Learning System it is developed with the help of Java. It has three panels Admin,Student and Teacher"
        ghLink = "https://github.com/Sikandar1214/Learning-Management-System"
        // demoLink="https://blogs.soumya-jit.tech/"
        /
        >
        <
        /Col>

        <
        Col md = { 4 }
        className = "project-card" >
        <
        ProjectCard imgPath = { ticc }
        isBlog = { false }
        title = "Game"
        description = "The game is developed in Java Language."
        ghLink = "https://github.com/Sikandar1214/Tic-Tac-Toe-Game"
        // demoLink="https://editor.soumya-jit.tech/"              
        /
        >
        <
        /Col>

        <
        Col md = { 4 }
        className = "project-card" >
        <
        ProjectCard imgPath = { blog }
        isBlog = { false }
        title = "Blog"
        description = "The Bloging Website is Developed In Django"
        ghLink = "https://github.com/Sikandar1214/Django-Website"
        // demoLink="https://plant49-ai.herokuapp.com/"
        /
        >
        <
        /Col>

        <
        Col md = { 4 }
        className = "project-card" >
        <
        ProjectCard imgPath = { bro }
        isBlog = { false }
        title = "Browser Development"
        description = "Recently we have worked on Kahf Browser"
        ghLink = "https://github.com/AsilHQ"
        demoLink = "https://kahf.co/" /
        >
        <
        /Col>

        <
        Col md = { 4 }
        className = "project-card" >
        <
        ProjectCard imgPath = { webb }
        isBlog = { false }
        title = "Web Development"
        description = "We also make website with Python Backend."
        ghLink = "https://github.com/Sikandar1214/Django-Website"
        // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
        /
        >
        <
        /Col> < /
        Row > <
        /Container> < /
        Container >
    );
}

export default Projects;