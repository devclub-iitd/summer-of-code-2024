from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import tensorflow as tf
import numpy as np
from tensorflow.keras.metrics import AUC
app = FastAPI()

model = tf.keras.models.load_model('model.h5')
model.compile(loss='binary_crossentropy', optimizer='adam', metrics=[AUC(curve='PR')])

class InputData(BaseModel):
    V1 : float
    V2 : float
    V3 : float
    V4 : float
    V5 : float
    V6 : float
    V7 : float
    V8 : float
    V9 : float
    V10 : float
    V11 : float
    V12 : float
    V13 : float
    V14 : float
    V15 : float
    V16 : float
    V17 : float
    V18 : float
    V19 : float
    V20 : float
    V21 : float
    V22 : float
    V23 : float
    V24 : float
    V25 : float
    V26: float
    V27 : float
    V28 : float
    Amount: float
    Time : int
@app.get("/")
def read_root():
    return {"message": "Welcome to the ML model API"}

# Define an endpoint for predictions
@app.post("/predict")
def predict(data: InputData):
    try:
        # Convert the input data to a format that your model expects
        input_data = np.array([[data.V1, data.V2,data.V3,data.V4,data.V5,data.V6,data.V7,data.V8,data.V9,data.V10,data.V11,data.V12,data.V13,data.V14,data.V15,data.V16,data.V17,data.V18,data.V19,data.V20,data.V21,data.V22,data.V23,data.V24,data.V25,data.V26,data.V27,data.V28,data.Amount,data.Time]])
        # Make prediction
        prediction = model.predict(input_data)
        return {"prediction": prediction.tolist()}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
