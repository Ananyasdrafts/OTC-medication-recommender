# OTC Medication Recommendation App

Welcome to the OTC Medication Recommendation App repository! This project is designed to help users find suitable over-the-counter (OTC) medications based on their symptoms. Additionally, it includes a feature to check for potential drug-drug interactions between two medications. The app utilizes a Random Forest Classifier for medication recommendations and provides a user-friendly interface for seamless interaction.

## Features

1. **Symptom-Based Medication Recommendation**:
   - Input: User-provided symptoms.
   - Output: Recommended OTC medications.
   - Model: Random Forest Classifier.

2. **Drug-Drug Interaction Checker**:
   - Input: Two medication names.
   - Output: Information on potential interactions and side effects.

## Repository Structure

- `model/`: Contains the code for training and utilizing the Random Forest Classifier for medication recommendations.
- `train_model.py`: Script for training the Random Forest Classifier.
- `predict.ipynb`: Script for making medication predictions based on user input symptoms.
- `frontend/`: Contains the code for the user interface of the app.
- `saved_model/`: Contains the downloaded pickle files for the Random Forest Classifier model and its Label Encoder.
- `Datasets\`: Folder containing relevant datasets.

- `API.py`: API endpoint for the model and the interaction checker .
- `interaction_checker/`: Contains the code for the drug-drug interaction checker.
- `check_interaction.py`: Script for checking interactions between two medications.



### Prerequisites

- Python 3.x
- Required libraries in `requirements.txt`

### Contributing

We welcome contributions to enhance the functionality and features of this app. To contribute, please fork the repository, create a new branch, make your changes, and submit a pull request.

### Contact

For any questions or suggestions, please open an issue in this repository or contact the project maintainer at ananyag1019@gmail.com.


Thank you for using the OTC Medication Recommendation App! We hope it helps you find the right medication safely and effectively.
