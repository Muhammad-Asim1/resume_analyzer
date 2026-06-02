import pdfplumber
import re
from PyPDF2 import PdfReader


class PdfProcessor:

    def __init__(self):
        pass

    # def extract_text_from_pdf(self, pdf_file):
    #     text = ""
    #     with pdfplumber.open(pdf_file) as pdf:

    #         for page in pdf.pages:
    #             text += page.extract_text()
    #     return text

    def extract_text_from_pdf(self, pdf_file):
        text = ""
        reader = PdfReader(pdf_file)
        for page in reader.pages:
            text += page.extract_text()
        return text

    def preprocess_text(self, text):
        replacements = {
            'â€“': '–',    # en dash
            'â€”': '—',    # em dash
            'â€˜': '‘',    # left single quotation mark
            'â€™': '’',    # right single quotation mark
            'â€œ': '“',    # left double quotation mark
            'â€�': '”',    # right double quotation mark
            'â€¢': '•',    # bullet point
            'â€¦': '…',    # ellipsis
            'Ã©': 'é',     # é
            'Ã¨': 'è',     # è
            'Ã¢': 'â',     # â
            'Ã´': 'ô',     # ô
            'Ã¼': 'ü',     # ü
            'Ã±': 'ñ',     # ñ
            'Ã‹': 'Ë',     # Ë
            'Ã¡': 'á',     # á
            'Ãº': 'ú',     # ú
            'Ã®': 'î',     # î
            'Ã€': 'À',     # À
            'Ã¬': 'ì',     # ì
            'Ã™': 'Ù',     # Ù
            'Ã': 'Í',     # Í
            'Ã–': 'Ö',     # Ö
            'Ã': 'Á',     # Á
            'ÃŒ': 'Ì',     # Ì
            'Ã‰': 'É',     # É
            'Ã': 'Ï',     # Ï
            'Ã«': 'ë',     # ë
            'Ã³': 'ó',     # ó
            'Ãž': 'Þ',     # Þ
            'Ãš': 'Ú',     # Ú
            'Ã¦': 'æ',     # æ
            'Ã˜': 'Ø',     # Ø
            'ÃŸ': 'ß',     # ß
            'Ã°': 'ð',     # ð
            'Ã­': 'í',     # í
            'Ãµ': 'õ',     # õ
            'Ã¥': 'å',     # å
            'Ã¯': 'ï',     # ï
            'Ã£': 'ã',     # ã
            'Ã¤': 'ä',     # ä
            'Ã¶': 'ö',     # ö
            'Ã¼': 'ü',     # ü
            'â‚¬': '€',    # Euro sign
            'â„¢': '™',    # Trademark sign
            'âˆ‚': '∂',    # Partial differential
            'âˆ€': '∀',    # For all
            'âˆˆ': '∈',    # Element of
            'âˆƒ': '∃',    # There exists
            'âˆ…': '∅',    # Empty set
            'âˆ†': '∆',    # Increment
            'âˆ‡': '∇',    # Nabla
            'âˆ‘': '∑',    # N-ary summation
            'âˆ—': '∗',    # Asterisk operator
            'âˆ˜': '∘',    # Ring operator
            'âˆ™': '∙',    # Bullet operator
            'âˆš': '√',    # Square root
            'âˆ›': '∧',    # Logical and
            'âˆ¥': '∥',    # Parallel to
            'âˆ¼': '∼',    # Tilde operator
            'âˆ¾': '≀',    # Wreath product
            'âˆ¿': '≁',    # Not tilde
            'âˆ‹': '⊂',    # Subset of
            'âˆ›': '⊃',    # Superset of
            'â‰': '≠',     # Not equal to
            'â‰¤': '≤',    # Less-than or equal to
            'â‰¥': '≥',    # Greater-than or equal to
            'â‰¤': '≤',    # Less-than or equal to
            'â‰≥': '≥',    # Greater-than or equal to
            'â‰²': '²',    # Superscript two
            'â‰³': '³',    # Superscript three
            'â‰®': '≡',    # Identical to
            'â‰³': '≥',    # Greater-than or equal to
            'â‰¯': '≣',    # Equivalent to
            'â‰¤': '≤',    # Less-than or equal to
            'â‰³': '≥',    # Greater-than or equal to
            'â‰®': '≡',    # Identical to
        }
        
        # Replace the characters in the text
        for wrong_char, correct_char in replacements.items():
            text = text.replace(wrong_char, correct_char)
        
        # Remove newline characters and any extraneous whitespace
        text = re.sub(r'\n+', ' ', text)  # Replace multiple newlines with a single space
        # text = re.sub(r'\s+', ' ', text)  # Replace multiple spaces with a single space
        processed_text = text.strip()  # Remove leading and trailing whitespace
        
        return processed_text


    def pdf_pipeline(self, pdf_file):
        text = self.extract_text_from_pdf(pdf_file)
        processed_text = self.preprocess_text(text)
        return processed_text