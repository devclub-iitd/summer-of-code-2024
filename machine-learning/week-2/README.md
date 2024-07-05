# Week 2: Inventory Prediction and Sales Forecasting

## Table of Contents

1. [Introduction](#introduction)
2. [Why Time Series Forecasting for Inventory and Sales?](#why-time-series-forecasting-for-inventory-and-sales)
3. [Workflow Overview](#workflow-overview)
4. [Detailed Task Breakdown](#detailed-task-breakdown)
    - [4.1. Set Up Google Colab](#41-set-up-google-colab)
    - [4.2. Load and Explore the Dataset](#42-load-and-explore-the-dataset)
    - [4.3. Data Preprocessing](#43-data-preprocessing)
    - [4.4. Feature Engineering](#44-feature-engineering)
    - [4.5. Implement Classical Time Series Methods](#45-implement-classical-time-series-methods)
    - [4.6. Apply Machine Learning Approaches](#46-apply-machine-learning-approaches)
    - [4.7. Model Evaluation and Cross-Validation](#47-model-evaluation-and-cross-validation)
    - [4.8. Develop an Ensemble Model (Optional)](#49-develop-an-ensemble-model-optional)
    - [4.9. Hyperparameter Tuning (Optional)](#48-hyperparameter-tuning-optional)
    - [4.10. Create an Interactive Dashboard (Optional)](#410-create-an-interactive-dashboard-optional)
5. [Deliverables](#deliverables)
6. [Submission Guidelines](#submission-guidelines)
7. [Resources](#resources)

## 1. Introduction

Welcome to Week 2 of the AI/ML Development Track. This week, you'll develop time series forecasting models for inventory management and sales prediction. You will use various classical and machine learning approaches to build robust models that can help in accurate forecasting.

## 2. Why Time Series Forecasting for Inventory and Sales?

Effective inventory management and accurate sales forecasting are critical for any business. Traditional methods may fail to capture complex patterns and trends in the data. 

Time series forecasting models, especially when combined with machine learning approaches, can adapt to changes and provide more precise predictions, leading to better decision-making and cost savings.

## 3. Workflow Overview

1. Set up Google Colab for the project.
2. Load and explore a suitable dataset.
3. Preprocess data and engineer features.
4. Implement classical time series methods (ARIMA, SARIMA).
5. Apply machine learning approaches (Prophet, LSTM).
6. Evaluate models using cross-validation.
7. (Optional) Perform hyperparameter tuning using Optuna.
8. (Optional) Develop an ensemble model.
9. (Optional) Create an interactive dashboard using Streamlit or Gradio.

## 4. Detailed Task Breakdown

### 4.1. Set Up Google Colab

- Access Google Colab and create a new notebook.
- Ensure that you enable GPU support if needed.
- [Google Colab Quick Start Guide](https://colab.research.google.com/notebooks/intro.ipynb)

### 4.2. Load and Explore the Dataset

- Search for a suitable time series dataset on platforms like Kaggle.
- You HAVE to get a **time-series dataset**. Example datasets are given below.
- Use `pandas` to load and explore the dataset.
- [Kaggle Datasets](https://www.kaggle.com/datasets)
- [Superstores Dataset](https://www.kaggle.com/datasets/rohitsahoo/sales-forecasting)
- [Ecuador Stores Sales Dataset (This is a more complex, fun dataset)](https://www.kaggle.com/competitions/store-sales-time-series-forecasting/data)

### 4.3. Data Preprocessing

- Handle missing values, encode categorical variables, and normalize numerical features.
- Use `pandas` for data cleaning and transformation.
- [Pandas Data Cleaning Tutorial](https://pandas.pydata.org/pandas-docs/stable/user_guide/missing_data.html)

### 4.4. Feature Engineering

- Create new features based on date-time information (e.g., day of the week, month, etc.).
- Can you incorporate external factors such as holidays or promotions?
- [Pandas for Date-Based Features](https://pandas.pydata.org/pandas-docs/stable/user_guide/timeseries.html)

### 4.5. Implement Classical Time Series Methods

- **ARIMA (Autoregressive Integrated Moving Average)**: ARIMA models explain a given time series based on its own past values (autoregressive part), the difference between values (integrated part), and lagged forecast errors (moving average part). It is denoted as ARIMA(p, d, q), where p is the number of lag observations, d is the number of times that the raw observations are differenced, and q is the size of the moving average window.
- **SARIMA (Seasonal ARIMA)**: SARIMA extends ARIMA by adding support for seasonality in the data. It includes additional seasonal terms denoted as (P, D, Q, S), where P is the seasonal autoregressive order, D is the seasonal differencing order, Q is the seasonal moving average order, and S is the length of the seasonal cycle.
- [ARIMA Tutorial](https://www.influxdata.com/blog/python-ARIMA-tutorial-influxDB/)
- [Cheat Sheet: Time Series Approaches](https://machinelearningmastery.com/time-series-forecasting-methods-in-python-cheat-sheet/)

### 4.6. Apply Machine Learning Approaches

- Try using Prophet for automatic forecasting.
- Implement LSTM networks using Keras for sequence prediction.
- [Prophet Documentation](https://www.kaggle.com/code/prashant111/tutorial-time-series-forecasting-with-prophet)
- [Keras LSTM Tutorial](https://www.kaggle.com/code/kmkarakaya/lstm-time-series-explorations-with-keras)

### 4.7. Model Evaluation and Cross-Validation

- Use Scikit-learn's TimeSeriesSplit for cross-validation.
- Evaluate models using metrics like MAE, RMSE, and MAPE.
- [Scikit-learn TimeSeriesSplit](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.TimeSeriesSplit.html)

### 4.8. Develop an Ensemble Model (Optional)

- Combine multiple forecasting techniques using VotingRegressor. See if this results in better accuracy!
- [Scikit-learn VotingRegressor](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.VotingRegressor.html)

### 4.9. Hyperparameter Tuning (Optional)

- Try using Optuna for automated hyperparameter tuning.
- [Optuna Documentation](https://github.com/optuna/optuna)

### 4.10. Create an Interactive Dashboard (Optional)

- Use Streamlit or Gradio to create a dashboard for visualizing inventory predictions and sales forecasts.
- [Streamlit Documentation](https://docs.streamlit.io/)
- [Gradio Documentation](https://www.gradio.app/)

## 5. Deliverables

- Google Colab notebook with the entire inventory prediction and sales forecasting pipeline.
- A concise Markdown report discussing your approach, challenges, and results.
- (Optional) Python script for the interactive dashboard.

## 6. Submission Guidelines

- Share your Google Colab notebook as a link, or ipynb file.
- Submit your report as a md file.
- (Optional) Submit your dashboard script as a py file.

## 7. Resources

- [Analysing Superstore Dataset using ARIMA](https://github.com/vibhor98/Time-Series-Forecasting-of-Superstore-dataset/blob/master/Analysis.ipynb)
- [Ecuador Sales Forecasting: Comprehensive Guide](https://www.kaggle.com/code/ekrembayar/store-sales-ts-forecasting-a-comprehensive-guide)
