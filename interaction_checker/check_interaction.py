import pandas as pd


dataset = pd.read_csv('drugInteractions.csv')

def check_medication_interaction(med_list_a, med_list_b):

    interactions = dataset[(dataset['drugA'].isin(med_list_a) & dataset['drugB'].isin(med_list_b)) |
                            (dataset['drugA'].isin(med_list_b) & dataset['drugB'].isin(med_list_a))]

    if not interactions.empty:
        return "Clashes"
    else:
        return "No clashes"

#Checking the code

med_list_a = ['Bivalirudin', 'MedA2']
med_list_b = ['Apixaban', 'MedB2']

result = check_medication_interaction(med_list_a, med_list_b)
print(result)