---
title: "Building R Packages"
date: 2019-09-13T00:14:43+02:00
draft: false
course_date: "13 September 2019"
expiry_date: 2019-09-13 #need to set date in this formate year-month-day
province: "Cape Town"
venue: "Bandwidth Barn"
full_venue: "Bandwidth Barn, Woodstock, Cape Town"
description: Packages make it easier to organise and share code. It sounds complicated but with some help, you'll learn that it’s not. Let us show you the ins and outs of building R packages.
type: "course"
---

## Objectives

In this course you’ll learn how to turn a collection of functions into a package.

## Outcomes 

<p style="margin-bottom: .5rem!important;">After the course participants will be able to</p>

- set up the infrastructure for a package;
- add functions and documentation;
- create unit tests;
- build the package; and
- share the package via GitHub.

## Who should attend?

Anybody who writes their own functions in R will benefit from knowing how to wrap those functions up in a package.

## Course Content

- Why Write R Packages?
    - Listing `installed.packages()`
    - Loading a package: `library()` versus `require()`
    - Installing
        - CRAN
        - GitHub
    - Package Management
        - `{packrat}`
        - `{checkpoint}`
- A Simple Package
    - The anatomy of a package
        - `README.md`
        - Metadata: `DESCRIPTION` and `NAMESPACE`
        - Folders: `R/`, `man/`, `data/` and `tests/`
    - Creating package infrastructure
    - Adding a function
    - Creating documentation
    - Adding data
    - Building
    - Installing
        - Where? Understanding `.Library` and `.libPaths()`.
- Documentation
    - Documenting functions with [{roxygen2}](https://github.com/klutometis/roxygen)
    - Creating a package website with [{pkgdown}](https://pkgdown.r-lib.org/)
- Tests
    - The importance of tests
    - Writing simple tests with [{testthat}](https://github.com/r-lib/testthat)
    - Running tests and interpreting results
    - Test driven development
- Automation
    - Package setup with [{usethis}](https://usethis.r-lib.org/)
        - `create_package()`
        - `use_r()` and `use_test()`
        - `use_git()` and `use_github()`
    - Coding workflow with [{devtools}](https://github.com/r-lib/devtools)
        - `load_all()`
        - `document()`
        - `check()`
        - `build()` and `install()`
- Distribution
    - GitHub
    - Testing revisited: Continuous Integration with [Travis](https://travis-ci.org/)
    - Preparing for CRAN

## Requirements
          
Participants should be familiar with R and comfortable writing their own functions.

#### Interactive course material
          
Our training emphasises practical skills. So, although you'll be learning concepts and theory, you'll see how everything is applied in the real world as we work through examples and exercises based on real datasets.

#### We like questions!
          
Having a firm understanding of the course content will result in you being able to confidently apply your new skills thereafter. So, if at any point you're unsure of something, just ask!

<a class="btn btn-primary register" href="https://qkt.io/kqZNL0" target="_blank" style="text-decoration: none;"> <strong>Purchase a ticket</strong></a>

Contact us at [training@exegetic.biz](mailto:training@exegetic.biz) if you have any questions.
