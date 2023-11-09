---
title: Titanic Survival Prediction
author: Ekhfa Hossain
pubDatetime: 2023-06-20T10:11:06.130Z
projectSlug: titanic-survival-prediction
featured: true
draft: false

description: This machine learning project utilizes various classifiers to predict passenger survival on the Titanic based on features like age, gender, and class.
---

## Table of contents

## Project Overview

<p style='text-align: justify;'>
This machine learning project's goal is to predict whether a passenger on the Titanic will survive or not. The project utilizes the Titanic dataset, obtained from Kaggle, which includes three CSV files: train, test, and gender_submission. The implementation involves training various classification models on the train dataset, considering features such as age, gender, and class. The trained models are then used to predict survival outcomes for passengers in the test dataset. The primary focus is on employing models like Support Vector Machines, K-Nearest Neighbors, Gaussian Naive Bayes, Decision Trees, Random Forests, XGBoost, and a Voting Classifier. The models are fine-tuned using grid search to optimize their hyperparameters, and performance metrics such as cross-validation scores are used to evaluate their effectiveness. The best-performing model, based on the XGBoost Classifier, is identified through grid search, achieving a cross-validation mean accuracy of approximately 0.808. This project demonstrates a comprehensive approach to predicting survival outcomes on the Titanic using machine learning techniques.
</p>

## Codebase

[Hosted on Github](https://github.com/ekhfa/Titanic_Disaster_Survivability_Prediction_using_ML)
