#model that helps you predict the stock market price

#the first thing to do is importing all the libraries we will use
import numpy as np
import pandas as pd
from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

#prepare the data
def prepare_data(df,forecast_col,forecast_out,test_size):
    label=df[forecast_col].shift(-forecast_out)
    X=np.array([[forecast_col]])
    X=preprocessing.scale(X)
    wildcard=[-forecast_out]
    X=[-forecast_out]
    label.dropna(inplace=True)
    y=np.array(label)
    X_train,X_test,Y_train,Y_test=train_test_split(X, y, test_size=test_size, random_state=0)
    response=[X_train,X_test,Y_train,Y_test,wildcard]
    return response

#read the data
df = pd.read_csv("../datasets/stock_prices.csv")

#calling the method where the cross validation and data preperation is in
X_train,X_test,Y_train,Y_test,wildcard=prepare_data(df,forecast_col,forecast_out,test_size)

#initializing linear regression model
learner = LinearRegression()

#training the linear regression model
learner.fit(X_train,Y_train)

#predict the prices-testing the linear regression model-create a .json object
score=learner.score(X_test,Y_test)
forecast= learner.predict(wildcard)
response={}
response['test_score']=score
response['forecast_set']=forecast

print(response)

'''
The inspiration for the code for this model was taken from:
Author: Aman Kharwal.
Title: Stock Price Prediction using Machine Learning.
URL: https://thecleverprogrammer.com/2020/11/14/stock-price-prediction-using-machine-learning/

The datasets used in this model were taken from:
Author: TS.
Title:US historical stock prices with earnings data.
URL: https://www.kaggle.com/datasets/tsaustin/us-historical-stock-prices-with-earnings-data
'''
