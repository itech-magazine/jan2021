Saurabh Jain
Assistant Director (Systems), Project Insight

Unsupervised Machine Learning
========================

![](https://i.ibb.co/R0GYnQJ/image.png)

In Supervised machine learning, input data is labelled with the correct answer. The input data is split into two parts namely training data and test data. However, imagine a situation when the data is not labelled with correct answer. Suppose you are given Income Tax Returns of huge numbers of users and you wish to find the anomalous return filers or outliers. Or let say you wish to map the users into different clusters as per their demographic attributes. In such situation, data scientists opt for Unsupervised machine learning.  

Unsupervised machine learning (UML) helps in discovering hidden patterns in the data. For instance, let’s assume you have images of a set of animals. UML model can help you in partitioning and clustering different animals in different buckets without being explicitly trained about their attributes and features. Let us understand how this magic happens.

Whenever a huge amount of unlabeled data is passed to model. Model finds certain common features in the data. On basis of these common features, all the data points are clustered, partitioned and categorized into different sets. For example, suppose you have 1000 points with X and Y coordinates and you wish to divide them into K (consider k = 2) clusters. In a primitive setup, one can take following 5 steps:

1.	Initialize two hypothetical (X, Y) tuples m1 and m2 as centroid of two empty buckets C1, C2.
2.	For each point, find its distance from the two centroids.
3.	If distance to C1 is less than distance to C2 then put the point in bucket C1, else put the point in bucket C2. 
4.	Recalculate the mean points of the two buckets C1 and C2 and take them as new centroids m1 and m2. 
5.	Repeat step 2-3 till the time values in the buckets are not stabilized.

At the end, you will have all the points in the data space categorized in the two buckets C1 and C2. However, a fine reader can spot the devils in the details in above five steps. There are four devils sitting in these five steps.

1.	How do you decide the value of K? The number of clusters/buckets could be 2, or 3, or even N.
2.	How do you define the distance function to calculate distance between data points in a complex scenario?
3.	When do you say that C1 and C2 are stabilized? How do you calculate loss or distortion which has to be minimized for accurate estimation of stabilization?
4.	Who is going to validate the results?

This is where the role of techno-functional experts become important. As they deal with the data over the years and understand its characteristics, they are well placed to answer these systemic questions. One should be careful in applying unsupervised machine learning to a problem space due to following challenges:

1.	As the data is unlabeled, one can never be sure about the accuracy or precision of the outcome.
2.	There is no definitive outcome. For instance, if you use K value as 2, you get two clusters. If you use k value as 5, you can get five clusters. Every algorithm listed above has its own share of pitfalls. 
3.	It requires a better domain knowledge (expert) so that one should be able to see the outcome and validate the results of unsupervised machine learning.

Despite above challenges, Unsupervised machine learning has proved to be pathbreaking and revolutionary in the field of Data sciences due to its widespread application. It can be useful in many scenarios.

1.	Clustering: It is useful in clustering the data into different clusters. For instance, looking at the ITR profiles of people, one can cluster tax payers into obedient and non-obedient tax payers.
2.	Anomaly detection: It can identify outliers in the data. Any anomalous input can be spotted using this. For instance, any unusual hike in refund claims or exemption claims can be spotted. Or it could be used to detect signals from an alien planet or intrusion detection in the network
3.	Association mining: It can be used to identify set of items which occur together in the dataset. For example, if people have a tendency of buying bread-butter more frequently then bread-spices so a shopkeeper can decide whether to put bread with butter or with spices.
4.	Dimensionality-reduction: If a data point contains 1000s of attribute then it is difficult to analyze and study it. Dimensionality reduction helps in reducing the dimensions of analysis. For instance, out of 1000 attributes/features, 10 important features could be drawn and studied. 

Some of the common algorithms/ models for achieving these objectives are listed below.

 - **Clustering:** A common approach for clustering is K-MEANS clustering. The 5-steps process explained above is example of a K-means clustering algorithm where value of K is 2. Other prominent approaches are DBSCAN and OPTICS.
 - **Anomaly detection:** Isolation forest, Local outlier factors are commonly used for discovering anomalous patterns. 
 - **Association mining:** Apriori algorithm, and FP-growth algorithm are prominently used in mining patterns from the unlabeled data.
 - **Dimensionality reduction:** Principal component analysis and Singular value decomposition are most commonly used dimensionality reduction approaches.

In recent years, unsupervised learning has been used vigorously in neural networks. This has revolutionized the research and application of Machine Learning and Artificial Intelligence. However, this requires a dedicated article on its own. In the next article, we will talk about Neural networks. 



