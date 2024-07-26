# Customer Segmentation and Product Recommendation Engine

## Objective:

The primary goal of this analysis was to segment a dataset of transactional data into meaningful customer groups to inform targeted marketing strategies. Two clustering algorithms, K-Means and DBSCAN, were applied to identify distinct customer segments based on the number of transactions and total spending. 

## Approach:

**Data Preparation**: The dataset was cleaned by removing outliers using the IQR method to ensure that the clustering algorithm's performance was not skewed by extreme values.
**Feature Scaling**: Features were scaled to ensure equal weighting in the clustering process.
**K-Means Clustering**: Applied with an initial assumption of 3 clusters, based on the Elbow Method for determining the optimal number of clusters.
**DBSCAN Clustering**: Applied with initial parameters, followed by adjustments to eps and min_samples based on experimentation and domain knowledge.

## Challenges

**Determining Cluster Number**: The Elbow Method provided a guideline, but the optimal number of clusters required validation against domain knowledge.
**Outliers**: Initial results were sensitive to outliers, necessitating data cleaning.
**Parameter Tuning**: eps and min_samples required careful selection to balance cluster cohesion and noise identification

## Results

**Clusters**: 3 distinct segments were identified, aligning with expected customer behaviors.
**Visualization**: Clear separation was observed, but assumptions about cluster shape and size might limit flexibility.
**Adjusted Parameters**: eps=0.7 and min_samples=10 showed improved cohesion and reduced noise.
**Silhouette Score**: 0.53, indicating moderate-separated clusters.
**Calinski-Harabasz Index**: 12.690, suggesting dense and well-separated clusters.