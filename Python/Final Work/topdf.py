import os
import sys

def convert_notebook_to_pdf(notebook_name):
    # Convert Jupyter Notebook to PDF
    os.system(f"jupyter nbconvert --to pdf {notebook_name}.ipynb")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python topdf.py <notebook_name>")
        sys.exit(1)
    
    notebook_name = sys.argv[1]
    convert_notebook_to_pdf(notebook_name)