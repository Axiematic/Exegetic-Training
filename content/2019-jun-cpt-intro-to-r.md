---
title: "Introduction to R | Data Wrangling"
date: 2019-06-24T12:31:30+02:00
draft: false
course_date: "24 June 2019"
expiry_date: 2019-06-24 #need to set date in this formate year-month-day
province: "Cape Town"
venue: "Bandwidth Barn"
full_venue: "Bandwidth Barn, Woodstock, Cape Town"
description:
type: "course"
---

## Objectives

R is a phenomenal tool for working with data. Being able to lay out the steps in an analysis as a script means that the analysis is repeatable and can also be version controlled. One of the first steps in any analysis is the preparation of the data. Three R packages (dplyr, tidyr and purrr) expose an wide range of functionality to aid in the data preparation process.
          
## Outcomes

Participants will be able to apply a selection of “tidy” operations on data using the dplyr, tidyr and purrr packages.

## Who should attend?

The course is aimed at students, academics and professionals who conduct data analysis using other tools like Excel. It’s assumed that participants already have some familiarity with R.

## Course Content

### Introduction to R

- Introduction
	* Background: Why use R rather than Excel?
	* Features of R
	* Finding your way around RStudio
	* Working in the Console
	* Creating and running scripts
	* Getting help
- Loading Data
	* How to get data into R?
	* Working with CSV, XLS and XLSX files
- Manipulating Data
	* Selecting columns
	* Manipulating columns
	* Filtering rows
	* Generating summary statistics
- Visualisation
	* Scatter, line and bar plots
	* Styling plots
- Markdown
	* Creating beautiful automated reports
	* Adding tables and plots

### Data Wrangling
          
- Loading data from files
	- CSV using base and [readr](https://github.com/tidyverse/readr)
	- XLSX using [readxl](https://github.com/tidyverse/readxl)
	- JSON
- Manipulating Data Frames with [dplyr](https://github.com/tidyverse/dplyr)
	- Selecting columns with `select()`
	- Filtering rows with `filter()`
	- Sorting with `arrange()`
	- Adding and changing columns with `mutate()` and `transmute()`
	- Aggregation with `group_by()` and `summarise()`
	- Assorted other functions from dplyr
- Pivoting with [tidyr](https://github.com/tidyverse/tidyr)
	- Long versus wide data formats
	- Going wide with `spread()`
	- Getting long with `gather()`
	- Splitting compound columns using `separate()` and `extract()`
	- Explicit missing values with `complete()`
	- Handling columns of data frames with `nest()` and `unnest()`
- Functional programming with [purrr](https://github.com/tidyverse/purrr)
	- Mapping functions of a single variable with `map()`
	- Mapping to a specific data type
	- Mapping functions of two variables with `map2()`
	- Mapping functions with many variables using `pmap()`
	- Leveraging side effects with `walk()`, `walk2()` and `pwalk()`
	- Repeating with delays using `insistently()` and `slowly()`
    
## Requirements
          
Participants are assumed to have prior exposure to R, or at least to programming of some variety. Some familiarity with HTML and CSS will be an advantage but not mandatory. We'll be using an online development environment. This means that you can focus on learning without having to worry about solving technical problems.

## Interactive course material
          
Our training emphasises practical skills. So, although you'll be learning concepts and theory, you'll see how everything is applied in the real world as we work through examples and exercises based on real datasets.

## We like questions!
          
Having a firm understanding of the course content will result in you being able to confidently apply your new skills. So, if at any point you're unsure of something, just ask!

Contact us at training@exegetic.biz if you have any questions.
