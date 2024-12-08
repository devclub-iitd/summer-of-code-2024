# Online-payment fraud detection with Machine learning

## Approach:

1. **Dataset selection**:Using kaggle a found a dataset which fulfill to my requirement.
Link for dataset:https://www.kaggle.com/datasets/jainilcoder/online-payment-fraud-detection

2. **Data Preprocessing**:we first make a copy to save or original data as it is. Then i grab info of various columns. We clean up data ,and  we found ,there was no missing value in our dataset which was a good thing.
we also observe that there was only 0.129% cases related to fraud transaction, which basically involve only CASH_OUT and TRANSFER type ,so we encode them separately and drop other types. nameorig and namedest column were not making any sense related to our search so we drop then ,but one thing which i noticed is that  only nameDest_type :"C" is related with fraud cases, so we will encode that also.

3. **Normalize features**:Feature scaling ensured all features contributed equally to the model, As there was high imbalance in max and min of column like amount ,step and all.

4. **Correlation**:There is a high correlation between newbalanceOrig and oldbalanceOrg.Also, between newbalanceDest and oldbalanceDest.Apart from that, we have a relatively high correlation between amount and newbalanceDest and amount with oldbalanceDest.Isfraud is very much correlated with amount.

5. **Outlier removal**:Outliers were identified and removed to prevent them from skewing the model.

6. **Undersampling**:To address class imbalance, the majority class (non-fraudulent transactions) was undersampled to match the minority class (fraudulent transactions).

7. **Train test split**:The data was divided into training and testing sets for model evaluation.

8. **Model selection and training**:I try 3 different model:

     1. **Logistic Regression**:A baseline model for classification.this give a good understanding of basic patterns in the data.
     2. **Random forest classifier**: It combines the powers of many decision trees (like a whole forest of superheroes) to make extra accurate predictions. It can handle different types of information, like numbers and categories.It give high accuracy .
     3. **XGBoost**: It leads to potentially the most accurate fraud detection. It's also great at avoiding overtraining, which is like a superhero getting too focused on one specific bad guy and missing others.IT also provide the highest accuracy in our test data prediction.
    The evaluation process using metrics like accuracy, precision, recall, and F1-score will ultimately determine the most suitable model for deployment based on the specific business needs.

## Challenges:

1. data searching and quality: after a lot of search I still not able to found a perfect dataset for my task ,that lead me to work with the same dataset that mostly are following.
2. Class imbalance :  the dataset was quite imbalance which can lead to biasness to undersampling was a necessary step to do.
3. outliers: there was many outliers in our data set which can skewed our data.
4. model selection: it was quite tough to select a specific model as a beginner so i experimented 3 models and trained by model and compare the accuracy and clarification table.

## Result:

Based on the results of comparing accuracy, precision, recall and f1 score, XGBoost might be the preferred model in this case due to its higher overall performance.
we can try more algorithms and can compare there results too and can choose the most satisfied one. 