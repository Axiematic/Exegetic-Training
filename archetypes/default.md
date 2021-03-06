---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
course_date:
expiry_date: #need to set date in this formate year-month-day
province:
venue: 
full_venue:
description: 
type: "course"
---

## Objectives

In this course you’ll learn how to use R to selectively scrape content from static & dynamic websites.
          
## Outcomes

Participants will be able to isolate the relevant portions of a website and write scripts to automatically extract the required information. Furthermore they’ll know how to apply these techniques to both static and dynamic websites.

## Who should attend?

Students, academics or professionals who need to harvest data from the internet.

## Course Content
### Day 1

- Motivating Example <!-- Private Property -->
- Review of the Tidyverse
	- Highlights from [Data Wrangling] (https://www.exegetic.biz/training/r-data-wrangling/)
- Introduction to Scraping
	- The components of an HTML document
	- Building a simple HTML document
	- DOM
	- CSS (summary of [CSS](https://www.exegetic.biz/training/web-css/))
	- XPath (summary of [XPath](https://www.exegetic.biz/training/web-xpath/))
	- Developer Tools
	- Important files: `robots.txt` and `sitemap.xml`
	- Ethics
- HTTP
	- How HTTP works
	- Diagnosing requests with `curl` and <https://httpbin.org/>
- Manual Scraping
	- Using [RCurl](https://cran.r-project.org/web/packages/RCurl/index.html) and [XML](https://cran.r-project.org/web/packages/XML/index.html).
- Scraping a Static Website using [rvest](https://github.com/hadley/rvest)
	- Retrieving page content
	- Navigation
	- Extracting text
	- Extracting attributes
	- Working with tables
	- Storing data as CSV or JSON.
	- Case Study
- Assisted Assignment <!-- IMDB -->

### Day 2

- Case Study <!-- drug tests using rvest -->
- Interacting with APIs
	- Using XHR to find an API
	- Building wrappers around APIs
- Dynamic Websites and JavaScript
	- Using [splashr](https://github.com/hrbrmstr/splashr) for JavaScript.
- Driving a Browser using [RSelenium](https://github.com/ropensci/RSelenium)
	- Why is RSelenium needed?
	- Navigation
	- Interacting with elements
	- Combining RSelenium with rvest
	- Useful JavaScript tools
	- Going headless
	- Case Study
- Building Robust Scrapers
	- Handling errors using `tryCatch()`
	- Functional tools from purrr: mapping, walking, `insistently()` and `slowly()`
- Deploying a Scraper in the Cloud
	- Launching and connecting to an EC2 instance
	- Headless browsers
	- Automation with cron
          
## Requirements
          
Participants are assumed to have prior exposure to R, or at least to programming of some variety. Some familiarity with HTML and CSS will be an advantage but not mandatory. We'll be using an online development environment. This means that you can focus on learning without having to worry about solving technical problems.

## Interactive course material
          
Our training emphasises practical skills. So, although you'll be learning concepts and theory, you'll see how everything is applied in the real world as we work through examples and exercises based on real datasets.

## We like questions!
          
Having a firm understanding of the course content will result in you being able to confidently apply your new skills. So, if at any point you're unsure of something, just ask!

<a class="btn btn-primary register" href="https://qkt.io/vGS277" target="_blank" style="text-decoration: none;"> Purchase a ticket</a>

Contact us at training@exegetic.biz if you have any questions.
