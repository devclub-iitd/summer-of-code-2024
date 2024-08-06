# Week 5: Building an AI Agentic Chatbot - A Comprehensive Guide

## Table of Contents
1. Introduction
2. Setting Up Your Development Environment
3. Creating Basic Models
4. Implementing Real-time Web Scraping and Sentiment Analysis
5. Developing a RAG (Retrieval Augmented Generation) System
6. Creating an Agentic AI Framework
7. Implementing a Reasoning and Planning System
8. Developing a Comprehensive AI API (Optional)
9. Creating an Interactive Demo (Optional)
10. Deliverables and Submission Guidelines
11. Resources and Further Reading

## 1. Introduction

Welcome to Week 5 of the AI/ML Development Track! This week, you'll be building an advanced AI agent from scratch. This agent will integrate multiple capabilities, including basic prediction models, real-time web scraping, sentiment analysis, and a sophisticated reasoning system using RAG and agentic AI frameworks. This project is designed to be standalone, but you have the option to integrate models from previous weeks if you wish.

## 2. Setting Up Your Development Environment

1. Create a new Google Colab notebook or set up a local Python environment.
2. Install the necessary libraries:
   ```
   !pip install langchain scrapy nltk fastapi uvicorn pinecone-client streamlit scikit-learn
   ```
3. Import the required modules:
   ```python
   import langchain
   import scrapy
   import nltk
   from fastapi import FastAPI
   import pinecone
   import streamlit as st
   from sklearn.ensemble import RandomForestClassifier
   from sklearn.linear_model import LinearRegression
   ```

## 3. Creating Basic Models

For this standalone project, we'll create simple models for demonstration purposes. If you wish to use more sophisticated models from previous weeks, you can replace these with your own implementations.

1. Create a basic fraud detection model:
   ```python
   class FraudDetectionModel:
       def __init__(self):
           self.model = RandomForestClassifier()
   
       def train(self, X, y):
           self.model.fit(X, y)
   
       def predict(self, transaction):
           # Assume transaction is a dict with relevant features
           features = [transaction['amount'], transaction['merchant_id']]
           return self.model.predict([features])[0]

   fraud_model = FraudDetectionModel()
   # You would typically train this with actual data
   ```

2. Create a basic inventory prediction model:
   ```python
   class InventoryPredictionModel:
       def __init__(self):
           self.model = LinearRegression()
   
       def train(self, X, y):
           self.model.fit(X, y)
   
       def predict(self, features):
           return self.model.predict([features])[0]

   inventory_model = InventoryPredictionModel()
   # You would typically train this with actual data
   ```

3. Create a simple recommendation engine:
   ```python
   class RecommendationEngine:
       def __init__(self):
           self.user_preferences = {}
   
       def add_preference(self, user_id, product_id, rating):
           if user_id not in self.user_preferences:
               self.user_preferences[user_id] = {}
           self.user_preferences[user_id][product_id] = rating
   
       def recommend(self, user_id, n=5):
           if user_id not in self.user_preferences:
               return []
           
           # Simple recommendation based on highest rated products
           sorted_prefs = sorted(self.user_preferences[user_id].items(), key=lambda x: x[1], reverse=True)
           return [item[0] for item in sorted_prefs[:n]]

   rec_engine = RecommendationEngine()
   # You would typically populate this with actual user preference data
   ```

4. Create a basic dynamic pricing model:
   ```python
   class DynamicPricingModel:
       def __init__(self):
           self.base_prices = {}
   
       def set_base_price(self, product_id, price):
           self.base_prices[product_id] = price
   
       def get_price(self, product_id, demand_factor=1.0):
           if product_id not in self.base_prices:
               return None
           return self.base_prices[product_id] * demand_factor

   pricing_model = DynamicPricingModel()
   # You would typically set base prices for your products
   ```

5. Create a wrapper class to manage all models:
   ```python
   class IntegratedModel:
       def __init__(self, fraud_model, inventory_model, rec_engine, pricing_model):
           self.fraud_model = fraud_model
           self.inventory_model = inventory_model
           self.rec_engine = rec_engine
           self.pricing_model = pricing_model
   
   integrated_model = IntegratedModel(fraud_model, inventory_model, rec_engine, pricing_model)
   ```

## 4. Implementing Real-time Web Scraping and Sentiment Analysis

1. Set up a Scrapy spider for web scraping:
   ```python
   import scrapy

   class ProductSpider(scrapy.Spider):
       name = 'product_spider'
       start_urls = ['https://example.com/products']

       def parse(self, response):
           for product in response.css('div.product'):
               yield {
                   'name': product.css('h2::text').get(),
                   'price': product.css('span.price::text').get(),
                   'description': product.css('p.description::text').get(),
               }
   ```

2. Implement VADER sentiment analysis:
   ```python
   from nltk.sentiment import SentimentIntensityAnalyzer

   nltk.download('vader_lexicon')
   sia = SentimentIntensityAnalyzer()

   def analyze_sentiment(text):
       return sia.polarity_scores(text)
   ```

3. Create a function to continuously update the AI agent with new information:
   ```python
   import asyncio

   async def update_agent_info():
       while True:
           # Scrape new data
           process = CrawlerProcess(get_project_settings())
           process.crawl(ProductSpider)
           data = process.start()

           # Analyze sentiment
           for item in data:
               item['sentiment'] = analyze_sentiment(item['description'])

           # Update agent's knowledge base (we'll implement this later)
           update_knowledge_base(data)

           await asyncio.sleep(3600)  # Update every hour
   ```

## 5. Developing a RAG (Retrieval Augmented Generation) System

1. Set up a Pinecone vector database:
   ```python
   import pinecone

   pinecone.init(api_key="your-api-key", environment="your-environment")
   index = pinecone.Index("your-index-name")
   ```

2. Implement document chunking and embedding generation:
   ```python
   from langchain.text_splitter import RecursiveCharacterTextSplitter
   from langchain.embeddings import OpenAIEmbeddings

   text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
   embeddings = OpenAIEmbeddings()

   def process_document(document):
       chunks = text_splitter.split_text(document)
       embeddings_list = embeddings.embed_documents(chunks)
       return list(zip(chunks, embeddings_list))
   ```

3. Create a retrieval system:
   ```python
   def retrieve_relevant_info(query, k=5):
       query_embedding = embeddings.embed_query(query)
       results = index.query(query_embedding, top_k=k, include_metadata=True)
       return [result['metadata']['text'] for result in results['matches']]
   ```

4. Integrate the retrieval system with a language model:
   ```python
   from langchain import OpenAI, PromptTemplate, LLMChain

   llm = OpenAI(temperature=0.7)
   template = """
   Context: {context}
   
   Human: {human_input}
   
   AI: Let me think about that based on the given context and your question.
   """
   prompt = PromptTemplate(template=template, input_variables=["context", "human_input"])
   llm_chain = LLMChain(prompt=prompt, llm=llm)

   def generate_response(human_input):
       context = retrieve_relevant_info(human_input)
       return llm_chain.run(context=context, human_input=human_input)
   ```

## 6. Creating an Agentic AI Framework

1. Define a set of actions and tools:
   ```python
   from langchain.agents import Tool
   from langchain.utilities import GoogleSearchAPIWrapper

   search = GoogleSearchAPIWrapper()
   tools = [
       Tool(
           name="Search",
           func=search.run,
           description="Useful for when you need to answer questions about current events."
       ),
       Tool(
           name="Fraud Detection",
           func=integrated_model.fraud_model.predict,
           description="Use this to detect fraudulent transactions."
       ),
       Tool(
           name="Inventory Prediction",
           func=integrated_model.inventory_model.predict,
           description="Use this to predict future inventory levels."
       ),
       Tool(
           name="Product Recommendation",
           func=integrated_model.rec_engine.recommend,
           description="Use this to get product recommendations for a user."
       ),
       Tool(
           name="Dynamic Pricing",
           func=integrated_model.pricing_model.get_price,
           description="Use this to get the optimal price for a product."
       )
   ]
   ```

2. Implement a goal-oriented architecture:
   ```python
   from langchain.agents import initialize_agent
   from langchain.agents import AgentType

   agent = initialize_agent(
       tools, 
       llm, 
       agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, 
       verbose=True
   )
   ```

## 7. Implementing a Reasoning and Planning System

1. Develop a multi-step reasoning process:
   ```python
   from langchain.chains import SequentialChain

   # Define individual chains
   analyze_chain = LLMChain(llm=llm, prompt=PromptTemplate(template="Analyze the following situation: {input}"))
   plan_chain = LLMChain(llm=llm, prompt=PromptTemplate(template="Based on the analysis, create a plan: {input}"))
   execute_chain = LLMChain(llm=llm, prompt=PromptTemplate(template="Execute the plan: {input}"))

   # Combine chains
   reasoning_chain = SequentialChain(
       chains=[analyze_chain, plan_chain, execute_chain],
       input_variables=["input"],
       output_variables=["output"]
   )
   ```

2. Implement a planning system:
   ```python
   def break_down_task(task):
       prompt = f"Break down the following task into smaller steps: {task}"
       return llm(prompt)

   def execute_plan(plan):
       steps = plan.split("\n")
       results = []
       for step in steps:
           results.append(agent.run(step))
       return results
   ```

3. Create a memory module:
   ```python
   from langchain.memory import ConversationBufferMemory

   memory = ConversationBufferMemory(return_messages=True)
   agent = initialize_agent(tools, llm, agent=AgentType.CHAT_CONVERSATIONAL_REACT_DESCRIPTION, memory=memory)
   ```

## 8. Developing a Comprehensive AI API (Optional)

1. Set up a FastAPI application:
   ```python
   from fastapi import FastAPI

   app = FastAPI()

   @app.post("/analyze")
   async def analyze_data(data: dict):
       result = agent.run(f"Analyze this data: {data}")
       return {"analysis": result}

   @app.post("/recommend")
   async def recommend_product(user_id: int):
       result = integrated_model.rec_engine.recommend(user_id)
       return {"recommendations": result}

   @app.post("/detect_fraud")
   async def detect_fraud(transaction: dict):
       result = integrated_model.fraud_model.predict(transaction)
       return {"is_fraudulent": result}

   # Add more endpoints as needed
   ```

## 9. Creating an Interactive Demo (Optional)

1. Set up a Streamlit application:
   ```python
   import streamlit as st

   st.title("AI Agent Demo")

   user_input = st.text_input("Enter your query:")
   if user_input:
       result = agent.run(user_input)
       st.write("AI Agent Response:", result)

   st.sidebar.title("Model Outputs")
   if st.sidebar.button("Detect Fraud"):
       fraud_result = integrated_model.fraud_model.predict({"amount": 1000, "merchant_id": 123})
       st.sidebar.write("Fraud Detection Result:", fraud_result)

   # Add more interactive elements as needed
   ```

## 10. Deliverables and Submission Guidelines

1. Jupyter notebook or Python scripts containing the implementation of the AI agent
2. A comprehensive Markdown report discussing your approach, challenges, and results
3. (Optional) Python script for the AI API
4. (Optional) Python script for the interactive demo

Submit your files as follows:
- Notebook: `week5_ai_agent.ipynb` or Python scripts: `week5_ai_agent.py`, `week5_models.py`, `week5_utils.py`, etc.
- Report: `week5_report.md`
- (Optional) API script: `week5_api.py`
- (Optional) Demo script: `week5_demo.py`

## 11. Resources and Further Reading

- LangChain Documentation: https://python.langchain.com/en/latest/
- Scrapy Tutorial: https://docs.scrapy.org/en/latest/intro/tutorial.html
- NLTK VADER Sentiment Analysis: https://www.nltk.org/howto/sentiment.html
- FastAPI Tutorial: https://fastapi.tiangolo.com/tutorial/
- Pinecone Vector Database: https://www.pinecone.io/docs/
- Streamlit Documentation: https://docs.streamlit.io/
- RAG Paper: https://arxiv.org/abs/2005.11401
- RAG Course Taught by Dhruv and Shourya in collaboration with Pathways: https://tryst-iit-delhi.gitbook.io/llm-course/basics-of-llms

Refer to the RAG Course for step-by-step guides on building RAG and a much more in-depth understanding of the same.