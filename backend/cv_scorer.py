import language_tool_python
import textstat
from spellchecker import SpellChecker

class CV_Scorer():
    def __init__(self, text):
        self.text = text

    def calculate_keyword_match(self, keywords):
        text_lower = self.text.lower()
        matches = sum(1 for keyword in keywords if keyword.lower() in text_lower)
        keyword_match_score = 10 if matches >= len(keywords) else max(5, int((matches / len(keywords)) * 10))
        return keyword_match_score

    # Function to check skills highlighting
    def calculate_skills_highlighting(self, skills):
        highlighted_skills = [skill for skill in skills if skill.lower() in self.text.lower()]
        skills_highlighting_score = 10 if len(highlighted_skills) >= len(skills) else max(5, int((len(highlighted_skills) / len(skills)) * 10))
        return skills_highlighting_score

    # Function to evaluate structure and formatting
    def evaluate_structure_and_formatting(self):
        lines = self.text.split('\n')
        has_bullets = any(line.strip().startswith(('*', '-', '•')) for line in lines)
        has_sections = any(line.strip().isupper() for line in lines)  # Assuming uppercase for section headers
        structure_score = 10 if has_bullets and has_sections else 7 if has_bullets or has_sections else 5
        return structure_score

    # Function to check consistency
    def evaluate_consistency(self):
        consistency_score = 10 if ' ' * 2 not in self.text else 8  # Penalize for inconsistent spacing
        return consistency_score

    # Function to evaluate CV quality
    def evaluate_cv(self, keywords, skills):
        try:
            tool = language_tool_python.LanguageTool('en-US')
            matches = tool.check(self.text)
            grammar_score = 10 if len(matches) <= 5 else max(6, 10 - len(matches) // 2)

            spell = SpellChecker()
            words = self.text.split()
            misspelled = spell.unknown(words)
            spelling_score = 10 if len(misspelled) <= 3 else max(6, 10 - len(misspelled) // 2)

            readability_score = textstat.flesch_reading_ease(self.text)
            if readability_score > 80:
                readability_score = 10
            elif readability_score > 65:
                readability_score = 8
            elif readability_score > 50:
                readability_score = 7
            else:
                readability_score = 5

            structure_score = self.evaluate_structure_and_formatting()
            keyword_match_score = self.calculate_keyword_match(keywords)
            skills_highlighting_score = self.calculate_skills_highlighting(skills)
            consistency_score = self.evaluate_consistency()

            total_score = (grammar_score + spelling_score + readability_score + structure_score +
                        keyword_match_score + skills_highlighting_score + consistency_score) / 7
            return round(total_score, 1), grammar_score, spelling_score, readability_score, structure_score, keyword_match_score, skills_highlighting_score, consistency_score
        except Exception as e:
            print(f"Error evaluating CV: {e}")
            return None, None, None, None, None, None, None, None
