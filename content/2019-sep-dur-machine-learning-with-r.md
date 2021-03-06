---
title: "Machine Learning with R"
date: 2019-09-17T00:14:43+02:00
draft: false
course_date: "16 - 17 September 2019"
expiry_date: 2019-09-17  #need to set date in this format year-month-day
province: "Durban"
venue: "The Sett"
full_venue: "The Sett, La Lucia, Durban"
description: Machine Learning is a big (and rather hot!) topic. Although Machine Learning models are often treated as black boxes, you’ll learn (in an unthreatening, low-math way) how these models work.
type: "course"
---

## Objectives

Machine Learning is a big (and rather hot!) topic. In this course you’ll learn how to apply Machine Learning to two types of problems: Classification and Regression. Although Machine Learning models are often treated as black boxes, you’ll learn (in an unthreatening, low-math way) how these models work. You’ll also learn how to appropriately prepare your data, how to build and test a model, and how to generate predictions.
          
## Outcomes

Participants will be able to build Classification and Regression models on real world data. They will understand how the models work and how to interpret model predictions.

## Who should attend?

The course is aimed at students, academics and professionals who want to use Machine Learning to build models and make predictions.

## Course Content
### Day 1: Classification
- Introduction
	- What is Machine Learning?
	- Regression and Classification
		- Concepts of Accuracy
		- Residuals
		- Best fit and least squares
	- Model Optimisation (Underfitting and Overfitting)
- Classification
    - k-Nearest Neighbours (kNN)
        - How it works
        - Finding a good value for k
        - Importance of normalising data
    - Naive Bayes
        - Background on Bayesian Methods
        - Probabilistic model
        - Flavours of Naive Bayes
        - Laplace smoothing
        - Document Classifier
    - Model Evaluation
        * Confusion Matrix
        * Accuracy
        * Recall / Sensitivity
        * Precision
        * Specificity
        * Positive/Negative Predictive Value
        * F Measure
        * ROC and AUC
    - Costs of Errors
	- Data Preparation
		- Transformations (`log()`, `sqrt()` and Box-Cox)
		- [`{recipes}`](https://github.com/tidymodels/recipes)
    - Decision Trees
        - Recursive Partitioning algorithm
        - Pruning
        - Model parameters (preventing underfitting and overfitting)
        - A variation: Conditional Inference Trees
    - Linear Discriminant Analysis
    - Unbalanced Data
        * Oversampling
        * Undersampling
        * Synthetic Data Generation
- Validation
    - Why Validation?
    - k-Fold Cross-Validation
    - Repeated Cross-Validation
    - Leave-One-Out Cross-Validation
    - Bootstrap
    - Model Tuning / Parameter Selection
- Using [`{caret}`](http://topepo.github.io/caret/index.html)
    * Pre-processing
    * Train/test splitting
    * Feature importance and feature selection
    * Model evaluation (using cross validation and bootstrapping)
    * Model tuning

### Day 2: Linear Models & Dimension Reduction
- Linear Models
    - Motivating Example
    - k-Nearest Neighbours
    - Background
        - Residuals
        - Best fit and least squares
    - Linear Regression
        * Assumptions 
        * Multiple regression
        * Model evaluation (RMSE, [MAE](https://en.wikipedia.org/wiki/Mean_absolute_error) and [MPE](https://en.wikipedia.org/wiki/Mean_percentage_error))
        * Categorical and dummy variables
        * Formulae
            * Simple Formulae
            * Interactions
        * Example: Prostate Cancer with Interactions
        * Polynomial regression
        * LOESS
    - Validating Model Assumptions
        * Fit Diagnostics
    - Using [`{broom}`](https://github.com/tidyverse/broom)
    - Logistic Regression
        * Odds, Log Odds and the Logit Function
        * Example: Synthetic Data
        * Thresholding and classification
        * Principle of Parsimony
        * Multicollinearity
        * Example: Myopia Data
        * Beyond binary: One-versus-rest models
    - Feature Importance
    - Feature Selection
        * Stepwise (forward selection and backward elimination)
- Dimension Reduction
	- PCA
          
## Requirements
          
Participants are assumed to have prior exposure to R, or at least to programming of some variety. Ideally participants should have completed the [Data Wrangling](https://www.exegetic.biz/training/r-data-wrangling/) and [Visualisation](https://www.exegetic.biz/training/r-visualisation/) modules. 

## Interactive course material
          
Our training emphasises practical skills. So, although you'll be learning concepts and theory, you'll see how everything is applied in the real world as we work through examples and exercises based on real datasets.

## We like questions!
          
Having a firm understanding of the course content will result in you being able to confidently apply your new skills. So, if at any point you're unsure of something, just ask!

<a class="btn btn-primary register" href="https://qkt.io/7RKVjR" target="_blank" style="text-decoration: none;"> <strong>Purchase a ticket</strong></a>

Contact us at [training@exegetic.biz](mailto:training@exegetic.biz) if you have any questions.
