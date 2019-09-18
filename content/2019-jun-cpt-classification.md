---
title: "Machine Learning: Classificaion | Linear Models"
date: 2019-06-26T12:32:01+02:00
draft: false
course_date: "26 June 2019"
expiry_date: 2019-06-26 #need to set date in this formate year-month-day
province: "Cape Town"
venue: "Bandwidth Barn"
full_venue: "Bandwidth Barn, Woodstock, Cape Town"
description: 
type: "course"
---

## Objectives

Machine Learning is a big (and rather hot!) topic. In this course you’ll learn how to apply Machine Learning to two types of problems: Classification and Regression. Although Machine Learning models are often treated as black boxes, you’ll learn (in an unthreatening, low-math way) how these models work. You’ll also learn how to appropriately prepare your data, how to build and test a model, and how to generate predictions.
          
## Outcomes

Participants will be able to build Classification and Regression models on real world data. They will understand how the models work and how to interpret model predictions.

## Who should attend?

The course is aimed at students, academics and professionals who want to use Machine Learning to build models and make predictions.

## Course Content

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
		- Missing Data
		- Unbalanced Data
			* Oversampling
			* Undersampling
			* Synthetic Data Generation
		- [`{recipes}`](https://github.com/tidymodels/recipes)
	- Decision Trees
		- Recursive Partitioning algorithm
		- Pruning
		- Model parameters (preventing underfitting and overfitting)
		- A variation: Conditional Inference Trees
	- Support Vector Machine
		- Maximum Margin Classifiers
		- Support Vector Classifiers
		- The Kernel Trick
		- Non-Linear Boundaries
			* Polynomial Kernel
			* Radial Kernel
- Linear Models
	- Motivating Example
	- k-Nearest Neighbours
	- Linear Regression
		* Assumptions 
		* Multiple regression
		* Model evaluation (RMSE, [MAE](https://en.wikipedia.org/wiki/Mean_absolute_error) and [MPE](https://en.wikipedia.org/wiki/Mean_percentage_error))
		* Categorical variables
			* One-Hot Encoding (low-cardinality variables)
			* Target Encoding (high-cardinality variables)
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
          
## Requirements
          
Participants are assumed to have prior exposure to R, or at least to programming of some variety. Some familiarity with HTML and CSS will be an advantage but not mandatory. We'll be using an online development environment. This means that you can focus on learning without having to worry about solving technical problems.

## Interactive course material
          
Our training emphasises practical skills. So, although you'll be learning concepts and theory, you'll see how everything is applied in the real world as we work through examples and exercises based on real datasets.

## We like questions!
          
Having a firm understanding of the course content will result in you being able to confidently apply your new skills. So, if at any point you're unsure of something, just ask!

Contact us at training@exegetic.biz if you have any questions.
