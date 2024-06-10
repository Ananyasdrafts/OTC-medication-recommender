from flask import Flask, request, jsonify
import pandas as pd
import joblib
import os
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split

app = Flask(__name__)

# Load the dataset
dp = r"C:\Users\anany\OneDrive\Desktop\combined_file_otc.csv"
df = pd.read_csv(dp)

# Split dataset into features and target variable
X = df[['symptom1', 'symptom2', 'symptom3', 'symptom4']]
y = df['OTC Medicine']

# Encode target variable to numerical labels
label_encoder = LabelEncoder()
y = label_encoder.fit_transform(y)

X = pd.get_dummies(X, columns=['symptom1', 'symptom2', 'symptom3', 'symptom4'])

# Split dataset into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Ensure one-hot encoding is consistent between training and testing datasets
missing_cols_train = set(X_train.columns) - set(X_test.columns)
missing_cols_test = set(X_test.columns) - set(X_train.columns)

for col in missing_cols_train:
    X_test[col] = 0

for col in missing_cols_test:
    X_train[col] = 0

# Ensure the order of columns is the same
X_test = X_test[X_train.columns]

# Get the absolute path of the current directory
current_directory = os.path.dirname(os.path.abspath(__file__))

# Define the path to the model file
model_path = os.path.join(current_directory, 'best_otc_recommendation_model.pkl')

# Load the trained model
best_rf = joblib.load(model_path)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    
    # Extract symptoms from JSON data
    symptoms = data['symptoms']
    
    # Create a DataFrame from symptoms
    df = pd.DataFrame([symptoms], columns=['symptom1', 'symptom2', 'symptom3', 'symptom4'])
    
    # One-hot encode the symptoms
    df = pd.get_dummies(df, columns=['symptom1', 'symptom2', 'symptom3', 'symptom4'])
    
    # Align columns with training data
    df = df.reindex(columns=X_train.columns, fill_value=0)
    
    # Predict the medicine
    y_pred = best_rf.predict(df)
    
    # Convert the prediction to original categorical label
    medicine = label_encoder.inverse_transform(y_pred)[0]
    
    return jsonify({'medicine': medicine})

if __name__ == '__main__':
    app.run(debug=True)

