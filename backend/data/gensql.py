import pandas
import os
    TABLE_NAME = "stonks"
    COLS = ["DATE", "ACCOUNTVALUE", "INVESTMENTS", "ROTHIRA"]

def authenticate():
    Username = os.environ["DATAAPP_DATABASE_USER"]
    Password = os.environ["DATAAPP_DATABASE_PASSWORD"]

if __name__ == "__main__":

