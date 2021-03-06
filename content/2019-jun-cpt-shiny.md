---
title: "Building Shiny Apps"
date: 2019-06-27T12:32:05+02:00
draft: false
course_date: "27 June 2019"
expiry_date: 2019-06-27 #need to set date in this formate year-month-day
province: "Cape Town"
venue:  "Bandwidth Barn"
full_venue: "Bandwidth Barn, Woodstock, Cape Town"
description: 
type: "course"
---

## Objectives

An interactive web application is a great way to allow people to interact with data. The conventional approach to developing such an application requires knowledge of a range of web development tools. However, the Shiny package makes it possible to easily build a web application using only R. This allows you to focus on the data and user experience.
          
## Outcomes

Participants will:
<ul style="margin-top: -5%;">
  <li>understand the structure of a Shiny application (UI and server);</li>
  <li>be able to assemble an attractive UI;</li>
  <li>understand reactivity and how the UI and server communicate with each other; and</li>
  <li>know how to deploy a Shiny application.</li>
</ul>

## Who should attend?

The course is aimed at students, academics and professionals who want to build interactive web applications.

## Course Content

- What is Shiny?
  - Samples from App Gallery
- Components of a Shiny app
  - Simple example
- User Interface (UI)
  - Layouts
  - HTML formatting
  - Input controls
  - Panels and tabsets
- Server
  - Rendering output: text, plots and tables
  - `uiOutput()` for dynamic UI elements
- Reactivity
  - `reactive()`
  - `isolate()`
  - `eventReactive()`
  - `reactiveValues()`
- Interactive Components
  - [DataTable](https://datatables.net/)
  - [Leaflet](https://leafletjs.com/)
- Deploying
  - [shinyapps.io](https://www.shinyapps.io/)
  - Shiny Server
          
## Requirements
          
Participants are assumed to have prior exposure to R, or at least to programming of some variety. Some familiarity with HTML and CSS will be an advantage but not mandatory. We'll be using an online development environment. This means that you can focus on learning without having to worry about solving technical problems.

## Setup
  ```r
install.packages(
    c("shiny", "rmarkdown", "DT", "devtools", "flexdashboard",
      "gapminder", "rticles", "shinydashboard", "shinythemes",
      "tidyverse", "tufte", "xaringan"),
    repos = "http://cran.rstudio.com"
)
  ```
  
## Interactive course material
          
Our training emphasises practical skills. So, although you'll be learning concepts and theory, you'll see how everything is applied in the real world as we work through examples and exercises based on real datasets.

## We like questions!
          
Having a firm understanding of the course content will result in you being able to confidently apply your new skills. So, if at any point you're unsure of something, just ask!

Contact us at training@exegetic.biz if you have any questions.
