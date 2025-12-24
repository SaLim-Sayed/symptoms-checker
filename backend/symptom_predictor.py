"""
Symptom Predictor - AI-powered symptom analysis
This module provides symptom-based condition prediction using rule-based logic
that can be replaced with a trained ML model.
"""

from typing import List, Dict
import random

class SymptomPredictor:
    def __init__(self):
        # Symptom to condition mapping (simplified knowledge base)
        # In production, this would be replaced with a trained ML model
        self.condition_symptoms = {
            "Common Cold": {
                "symptoms": ["Cough", "Runny Nose", "Stuffy Nose", "Sore Throat", "Sneezing", "Headache", "Fatigue", "Watery Eyes"],
                "description": "A viral infection of the upper respiratory tract.",
                "recommendations": [
                    "Get plenty of rest",
                    "Stay hydrated",
                    "Use over-the-counter cold medications",
                    "Gargle with warm salt water",
                    "Use a humidifier"
                ]
            },
            "Influenza (Flu)": {
                "symptoms": ["Fever", "Cough", "Fatigue", "Muscle Aches", "Chills", "Headache", "Weakness", "Sweating"],
                "description": "A contagious respiratory illness caused by influenza viruses.",
                "recommendations": [
                    "Rest and stay home",
                    "Drink plenty of fluids",
                    "Take antiviral medications if prescribed",
                    "Use fever reducers",
                    "Seek medical attention if symptoms worsen"
                ]
            },
            "COVID-19": {
                "symptoms": ["Fever", "Cough", "Dry Cough", "Shortness of Breath", "Fatigue", "Loss of Appetite", "Muscle Aches", "Chills", "Headache"],
                "description": "A respiratory illness caused by the SARS-CoV-2 virus.",
                "recommendations": [
                    "Isolate yourself from others",
                    "Monitor your symptoms closely",
                    "Seek medical attention if breathing difficulties occur",
                    "Get tested for COVID-19",
                    "Follow public health guidelines"
                ]
            },
            "Migraine": {
                "symptoms": ["Headache", "Migraine", "Nausea", "Dizziness", "Vertigo", "Sensitivity to Light", "Sensitivity to Sound", "Fatigue", "Blurred Vision"],
                "description": "A neurological condition characterized by severe headaches.",
                "recommendations": [
                    "Rest in a dark, quiet room",
                    "Apply cold or warm compresses",
                    "Take prescribed migraine medications",
                    "Identify and avoid triggers",
                    "Practice stress management"
                ]
            },
            "Gastroenteritis": {
                "symptoms": ["Nausea", "Vomiting", "Diarrhea", "Abdominal Pain", "Stomach Cramps", "Fever", "Loss of Appetite", "Bloating"],
                "description": "Inflammation of the stomach and intestines, often caused by infection.",
                "recommendations": [
                    "Stay hydrated with clear fluids",
                    "Avoid solid foods initially",
                    "Gradually reintroduce bland foods",
                    "Rest and avoid strenuous activity",
                    "Seek medical attention if dehydration occurs"
                ]
            },
            "Allergic Reaction": {
                "symptoms": ["Rash", "Itching", "Hives", "Swelling", "Runny Nose", "Stuffy Nose", "Eye Irritation", "Red Eyes", "Watery Eyes", "Sneezing"],
                "description": "An immune system response to a foreign substance.",
                "recommendations": [
                    "Identify and avoid the allergen",
                    "Take antihistamines",
                    "Apply cool compresses for skin reactions",
                    "Use eye drops for eye irritation",
                    "Seek emergency care for severe reactions"
                ]
            },
            "Bronchitis": {
                "symptoms": ["Cough", "Dry Cough", "Wet Cough", "Chest Pain", "Chest Tightness", "Shortness of Breath", "Fatigue", "Fever", "Chills", "Wheezing"],
                "description": "Inflammation of the bronchial tubes in the lungs.",
                "recommendations": [
                    "Rest and avoid irritants",
                    "Stay hydrated",
                    "Use a humidifier",
                    "Take cough suppressants if needed",
                    "See a doctor if symptoms persist"
                ]
            },
            "Strep Throat": {
                "symptoms": ["Sore Throat", "Fever", "Headache", "Difficulty Swallowing", "Swelling", "Fatigue", "Swollen Lymph Nodes"],
                "description": "A bacterial infection causing inflammation of the throat.",
                "recommendations": [
                    "See a doctor for antibiotic treatment",
                    "Gargle with warm salt water",
                    "Rest your voice",
                    "Stay hydrated",
                    "Take pain relievers as needed"
                ]
            },
            "Anxiety": {
                "symptoms": ["Anxiety", "Insomnia", "Fatigue", "Dizziness", "Chest Pain", "Chest Tightness", "Shortness of Breath", "Rapid Breathing", "Panic Attacks", "Irritability", "Sweating"],
                "description": "A mental health condition characterized by excessive worry and fear.",
                "recommendations": [
                    "Practice deep breathing exercises",
                    "Consider therapy or counseling",
                    "Maintain a regular sleep schedule",
                    "Limit caffeine and alcohol",
                    "Engage in regular physical activity"
                ]
            },
            "Depression": {
                "symptoms": ["Depression", "Fatigue", "Insomnia", "Difficulty Sleeping", "Loss of Appetite", "Anxiety", "Headache", "Loss of Interest", "Mood Swings"],
                "description": "A mood disorder causing persistent sadness and loss of interest.",
                "recommendations": [
                    "Seek professional help",
                    "Maintain social connections",
                    "Engage in regular exercise",
                    "Establish a routine",
                    "Consider medication if recommended by a doctor"
                ]
            },
            "Urinary Tract Infection (UTI)": {
                "symptoms": ["Abdominal Pain", "Frequent Urination", "Painful Urination", "Blood in Urine", "Cloudy Urine", "Urgency to Urinate", "Fever", "Chills", "Nausea", "Fatigue"],
                "description": "An infection in any part of the urinary system.",
                "recommendations": [
                    "Drink plenty of water",
                    "See a doctor for antibiotics",
                    "Avoid irritants like caffeine",
                    "Use heating pads for pain",
                    "Complete the full course of antibiotics"
                ]
            },
            "Sinusitis": {
                "symptoms": ["Headache", "Runny Nose", "Stuffy Nose", "Cough", "Fever", "Fatigue", "Ear Pain", "Facial Pain", "Tooth Pain"],
                "description": "Inflammation of the sinuses, often due to infection.",
                "recommendations": [
                    "Use nasal decongestants",
                    "Apply warm compresses",
                    "Use a saline nasal spray",
                    "Stay hydrated",
                    "See a doctor if symptoms persist"
                ]
            },
            "Pneumonia": {
                "symptoms": ["Cough", "Wet Cough", "Fever", "Chills", "Shortness of Breath", "Chest Pain", "Fatigue", "Sweating", "Rapid Breathing", "Shallow Breathing"],
                "description": "Infection that inflames air sacs in one or both lungs.",
                "recommendations": [
                    "Seek immediate medical attention",
                    "Get plenty of rest",
                    "Stay hydrated",
                    "Take prescribed antibiotics",
                    "Monitor breathing closely"
                ]
            },
            "Asthma": {
                "symptoms": ["Cough", "Shortness of Breath", "Wheezing", "Chest Tightness", "Rapid Breathing", "Shallow Breathing", "Fatigue"],
                "description": "A condition in which airways narrow and swell, producing extra mucus.",
                "recommendations": [
                    "Use prescribed inhaler",
                    "Avoid triggers",
                    "Monitor symptoms closely",
                    "Seek emergency care if breathing becomes difficult",
                    "Follow asthma action plan"
                ]
            },
            "Conjunctivitis (Pink Eye)": {
                "symptoms": ["Eye Irritation", "Red Eyes", "Watery Eyes", "Eye Discharge", "Itching", "Swelling", "Sensitivity to Light"],
                "description": "Inflammation of the conjunctiva, the thin clear tissue over the white part of the eye.",
                "recommendations": [
                    "Avoid touching eyes",
                    "Wash hands frequently",
                    "Use prescribed eye drops",
                    "Apply cool compresses",
                    "See a doctor for proper treatment"
                ]
            },
            "Otitis Media (Ear Infection)": {
                "symptoms": ["Ear Pain", "Ear Discharge", "Hearing Loss", "Ringing in Ears", "Ear Fullness", "Fever", "Dizziness", "Headache"],
                "description": "Infection of the middle ear, often following a cold.",
                "recommendations": [
                    "See a doctor for antibiotics if bacterial",
                    "Use pain relievers",
                    "Apply warm compresses",
                    "Rest and stay hydrated",
                    "Avoid getting water in ear"
                ]
            },
            "Arthritis": {
                "symptoms": ["Joint Pain", "Joint Stiffness", "Joint Swelling", "Limited Range of Motion", "Muscle Weakness", "Fatigue"],
                "description": "Inflammation of one or more joints causing pain and stiffness.",
                "recommendations": [
                    "Apply heat or cold therapy",
                    "Engage in gentle exercise",
                    "Take anti-inflammatory medications",
                    "Maintain healthy weight",
                    "See a rheumatologist for proper diagnosis"
                ]
            },
            "Fibromyalgia": {
                "symptoms": ["Muscle Aches", "Muscle Weakness", "Fatigue", "Joint Pain", "Headache", "Insomnia", "Difficulty Sleeping", "Brain Fog", "Difficulty Concentrating", "Anxiety", "Depression"],
                "description": "A disorder characterized by widespread musculoskeletal pain.",
                "recommendations": [
                    "Practice gentle exercise",
                    "Establish sleep routine",
                    "Manage stress",
                    "Consider physical therapy",
                    "Work with healthcare provider for treatment plan"
                ]
            },
            "Gastroesophageal Reflux Disease (GERD)": {
                "symptoms": ["Heartburn", "Acid Reflux", "Chest Pain", "Difficulty Swallowing", "Nausea", "Indigestion", "Bloating", "Cough", "Hoarse Voice"],
                "description": "A digestive disorder where stomach acid flows back into the esophagus.",
                "recommendations": [
                    "Avoid trigger foods",
                    "Eat smaller meals",
                    "Don't lie down after eating",
                    "Elevate head while sleeping",
                    "Consider antacids or medications"
                ]
            },
            "Irritable Bowel Syndrome (IBS)": {
                "symptoms": ["Abdominal Pain", "Stomach Cramps", "Bloating", "Gas", "Diarrhea", "Constipation", "Nausea", "Fatigue"],
                "description": "A common disorder affecting the large intestine.",
                "recommendations": [
                    "Identify and avoid trigger foods",
                    "Eat smaller, frequent meals",
                    "Stay hydrated",
                    "Manage stress",
                    "Consider probiotics"
                ]
            },
            "Eczema": {
                "symptoms": ["Rash", "Itching", "Redness", "Dry Skin", "Flaking", "Peeling", "Bumps", "Swelling"],
                "description": "A condition that makes skin red and itchy.",
                "recommendations": [
                    "Moisturize regularly",
                    "Avoid irritants",
                    "Use gentle soaps",
                    "Apply prescribed creams",
                    "Identify and avoid triggers"
                ]
            },
            "Urticaria (Hives)": {
                "symptoms": ["Hives", "Itching", "Rash", "Swelling", "Redness", "Bumps"],
                "description": "Raised, itchy welts on the skin, often from an allergic reaction.",
                "recommendations": [
                    "Take antihistamines",
                    "Apply cool compresses",
                    "Avoid triggers",
                    "Wear loose clothing",
                    "See a doctor if severe or persistent"
                ]
            },
            "Tension Headache": {
                "symptoms": ["Headache", "Neck Pain", "Shoulder Pain", "Muscle Aches", "Sensitivity to Light", "Sensitivity to Sound", "Fatigue"],
                "description": "A common headache characterized by a dull, aching pain.",
                "recommendations": [
                    "Apply heat or cold packs",
                    "Practice relaxation techniques",
                    "Improve posture",
                    "Take over-the-counter pain relievers",
                    "Manage stress"
                ]
            },
            "Vertigo": {
                "symptoms": ["Dizziness", "Vertigo", "Nausea", "Vomiting", "Loss of Balance", "Ear Fullness", "Ringing in Ears", "Hearing Loss"],
                "description": "A sensation of feeling off balance, often described as spinning.",
                "recommendations": [
                    "Move slowly",
                    "Avoid sudden head movements",
                    "Stay hydrated",
                    "See a doctor for diagnosis",
                    "Consider vestibular rehabilitation"
                ]
            }
        }
        
        # Get all unique symptoms from conditions
        self.all_symptoms = set()
        for condition_data in self.condition_symptoms.values():
            self.all_symptoms.update(condition_data["symptoms"])
        
        # Add all symptoms from frontend categories to ensure complete coverage
        frontend_symptoms = [
            # Head & Neurological
            "Headache", "Migraine", "Dizziness", "Vertigo", "Confusion", "Memory Problems",
            "Seizures", "Tremors", "Fainting", "Loss of Consciousness", "Sensitivity to Light",
            "Sensitivity to Sound", "Brain Fog", "Difficulty Concentrating",
            # Respiratory & Chest
            "Cough", "Dry Cough", "Wet Cough", "Shortness of Breath", "Chest Pain",
            "Chest Tightness", "Wheezing", "Rapid Breathing", "Shallow Breathing",
            "Runny Nose", "Stuffy Nose", "Sneezing", "Sore Throat", "Hoarse Voice",
            "Difficulty Swallowing", "Chest Congestion", "Blood in Sputum",
            # Digestive & Abdominal
            "Nausea", "Vomiting", "Abdominal Pain", "Stomach Cramps", "Diarrhea",
            "Constipation", "Bloating", "Gas", "Indigestion", "Heartburn",
            "Acid Reflux", "Loss of Appetite", "Increased Appetite", "Blood in Stool",
            "Black Stool", "Excessive Thirst", "Food Intolerance",
            # Musculoskeletal
            "Muscle Aches", "Muscle Weakness", "Muscle Spasms", "Joint Pain",
            "Joint Stiffness", "Joint Swelling", "Back Pain", "Lower Back Pain",
            "Upper Back Pain", "Neck Pain", "Shoulder Pain", "Knee Pain",
            "Hip Pain", "Elbow Pain", "Wrist Pain", "Ankle Pain", "Foot Pain",
            "Limited Range of Motion",
            # Skin & Dermatological
            "Rash", "Itching", "Hives", "Redness", "Swelling", "Bumps", "Blisters",
            "Dry Skin", "Oily Skin", "Flaking", "Peeling", "Discoloration",
            "Bruising", "Bleeding", "Warmth to Touch", "Tenderness", "Hair Loss",
            "Nail Changes",
            # Eyes & Ears
            "Eye Irritation", "Red Eyes", "Watery Eyes", "Dry Eyes", "Blurred Vision",
            "Double Vision", "Eye Pain", "Eye Discharge", "Ear Pain", "Ear Discharge",
            "Hearing Loss", "Ringing in Ears", "Ear Fullness", "Ear Itching",
            # Urinary & Genital
            "Frequent Urination", "Painful Urination", "Blood in Urine", "Cloudy Urine",
            "Urgency to Urinate", "Difficulty Urinating", "Incontinence",
            "Genital Itching", "Genital Pain", "Genital Discharge", "Genital Sores",
            "Pain During Intercourse",
            # Mental & Emotional
            "Anxiety", "Depression", "Mood Swings", "Irritability", "Agitation",
            "Panic Attacks", "Stress", "Insomnia", "Excessive Sleepiness", "Nightmares",
            "Difficulty Sleeping", "Loss of Interest", "Feeling Overwhelmed",
            # General & Systemic
            "Fever", "Chills", "Sweating", "Night Sweats", "Fatigue", "Weakness",
            "Exhaustion", "Weight Loss", "Weight Gain", "Swollen Lymph Nodes",
            "Dehydration", "Pale Skin", "Yellow Skin", "Cold Hands/Feet", "Hot Flashes"
        ]
        
        self.all_symptoms.update(frontend_symptoms)
        self.all_symptoms = sorted(list(self.all_symptoms))

    def get_available_symptoms(self) -> List[str]:
        """Return list of all available symptoms"""
        return self.all_symptoms

    def calculate_match_score(self, user_symptoms: List[str], condition_symptoms: List[str]) -> float:
        """Calculate how well user symptoms match a condition"""
        if not user_symptoms:
            return 0.0
        
        user_symptoms_lower = [s.lower() for s in user_symptoms]
        condition_symptoms_lower = [s.lower() for s in condition_symptoms]
        
        # Count matching symptoms
        matches = sum(1 for symptom in user_symptoms_lower if symptom in condition_symptoms_lower)
        
        # Calculate score: matches / total user symptoms
        # Also consider how many of the condition's symptoms are present
        base_score = matches / len(user_symptoms)
        
        # Bonus if user has many of the condition's typical symptoms
        coverage_score = matches / len(condition_symptoms) if condition_symptoms else 0
        
        # Weighted combination
        final_score = (base_score * 0.6) + (coverage_score * 0.4)
        
        return min(final_score, 1.0)  # Cap at 1.0

    def determine_severity(self, symptoms: List[str], top_condition: str) -> str:
        """Determine severity based on symptoms and condition"""
        severe_symptoms = [
            "Chest Pain", "Chest Tightness", "Shortness of Breath", "Difficulty Breathing",
            "Difficulty Swallowing", "Loss of Consciousness", "Seizures", "Blood in Urine",
            "Blood in Stool", "Blood in Sputum", "Severe Headache", "Fainting"
        ]
        moderate_symptoms = [
            "Fever", "Vomiting", "Dizziness", "Vertigo", "Confusion", "Rapid Breathing",
            "Shallow Breathing", "Wheezing", "Severe Pain", "High Fever"
        ]
        
        symptoms_lower = [s.lower() for s in symptoms]
        severe_lower = [s.lower() for s in severe_symptoms]
        moderate_lower = [s.lower() for s in moderate_symptoms]
        
        has_severe = any(s in symptoms_lower for s in severe_lower)
        has_moderate = any(s in symptoms_lower for s in moderate_lower)
        
        high_severity_conditions = ["COVID-19", "Bronchitis", "Pneumonia", "Asthma"]
        
        if has_severe or top_condition in high_severity_conditions:
            return "High"
        elif has_moderate or len(symptoms) >= 5:
            return "Medium"
        else:
            return "Low"

    def get_general_advice(self, severity: str, top_condition: str) -> str:
        """Generate general advice based on severity and condition"""
        if severity == "High":
            return f"Your symptoms suggest {top_condition}. Please consult a healthcare professional immediately, especially if you experience severe symptoms like chest pain or difficulty breathing."
        elif severity == "Medium":
            return f"Your symptoms may indicate {top_condition}. Monitor your symptoms closely and consider consulting a healthcare provider if they worsen or persist for more than a few days."
        else:
            return f"Your symptoms are consistent with {top_condition}. Rest, stay hydrated, and monitor your symptoms. If they persist or worsen, consult a healthcare provider."

    def predict(self, user_symptoms: List[str]) -> Dict:
        """Predict possible conditions based on user symptoms"""
        # Normalize symptom names (case-insensitive matching)
        normalized_symptoms = [s.strip() for s in user_symptoms]
        
        # Calculate scores for each condition
        condition_scores = []
        for condition, data in self.condition_symptoms.items():
            score = self.calculate_match_score(normalized_symptoms, data["symptoms"])
            if score > 0:  # Only include conditions with some match
                condition_scores.append({
                    "condition": condition,
                    "score": score,
                    "data": data
                })
        
        # Sort by score (highest first)
        condition_scores.sort(key=lambda x: x["score"], reverse=True)
        
        # Get top 3 conditions
        top_conditions = condition_scores[:3]
        
        # Normalize probabilities to sum to 1
        total_score = sum(c["score"] for c in top_conditions)
        if total_score > 0:
            for condition in top_conditions:
                condition["probability"] = condition["score"] / total_score
        else:
            # If no matches, assign equal probabilities
            for condition in top_conditions:
                condition["probability"] = 1.0 / len(top_conditions) if top_conditions else 0
        
        # Format results
        possible_conditions = []
        for condition in top_conditions:
            possible_conditions.append({
                "condition": condition["condition"],
                "probability": condition["probability"],
                "description": condition["data"]["description"],
                "recommendations": condition["data"]["recommendations"]
            })
        
        # If no matches found, provide a generic response
        if not possible_conditions:
            possible_conditions = [{
                "condition": "General Symptoms",
                "probability": 1.0,
                "description": "Your symptoms don't match any specific condition in our database. This could be a mild illness or a combination of factors.",
                "recommendations": [
                    "Monitor your symptoms",
                    "Rest and stay hydrated",
                    "Consult a healthcare provider if symptoms persist or worsen",
                    "Keep track of when symptoms started and any patterns"
                ]
            }]
        
        top_condition = possible_conditions[0]["condition"]
        severity = self.determine_severity(normalized_symptoms, top_condition)
        advice = self.get_general_advice(severity, top_condition)
        
        return {
            "possible_conditions": possible_conditions,
            "severity": severity,
            "advice": advice
        }

