# -*- coding: utf-8 -*-
"""
Created on Fri Jul  5 14:44:40 2024

@author: Kenny
"""
import joblib
import streamlit as st

linear_model = joblib.load('linear_model.pkl')
xgbmodel = joblib.load('xgb.pkl')
encoder = joblib.load('labelencoder.pkl')
st.title("poopoo")
Ship_Mode = st.sidebar.selectbox("Select Ship Mode",options = ['Standard Class','First Class','Second Class','Same Day'])
Category = st.sidebar.selectbox("Select Category",options = ['Office Supplies', 'Technology', 'Furniture'])
State = st.sidebar.selectbox("Select state",options = ['Texas', 'Illinois', 'Pennsylvania', 'Kentucky', 'California',
       'Georgia', 'Virginia', 'Delaware', 'Louisiana', 'Ohio',
       'South Carolina', 'Oregon', 'Arizona', 'Arkansas', 'Michigan',
       'Tennessee', 'Nevada', 'South Dakota', 'New York', 'Wisconsin',
       'Florida', 'Washington', 'New Jersey', 'Missouri', 'Indiana',
       'North Carolina', 'Colorado', 'Utah', 'Mississippi', 'Minnesota',
       'Iowa', 'New Mexico', 'Massachusetts', 'Alabama', 'Montana',
       'Idaho', 'Maryland', 'Connecticut', 'New Hampshire', 'Oklahoma',
       'Nebraska', 'Maine', 'Kansas', 'Rhode Island',
       'District of Columbia', 'Vermont', 'Wyoming', 'North Dakota',
       'West Virginia'])
Segment = st.sidebar.selectbox("Select Segment",options = ['Consumer', 'Home Office', 'Corporate'])
Sub_Category = st.sidebar.selectbox("Select Sub Category",options = ['Paper', 'Binders', 'Storage', 'Labels', 'Art', 'Phones', 'Chairs',
       'Fasteners', 'Furnishings', 'Accessories', 'Envelopes',
       'Bookcases', 'Appliances', 'Tables', 'Supplies', 'Machines',
       'Copiers'])
City = st.slider("Select City", 1,529)
Customer_Name = st.slider("Select NameIndex",1,793)