from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
import sys 
sys.path.insert(0, "./stonksdata")

import crud, models, schemas
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

#Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db #no idea what this does
    finally:
        db.close()

@app.get("/api/stonksdata/test")
async def root():
    data = [
        {"date": "1/1/2020" , "accountvalue": 0.0,"investments": 0.0, "rothira": 0.0, "NetProfit": 0}, 
        {"date": "1/2/2020" , "accountvalue": 10.5,"investments": 0.0, "rothira": 0.0, "NetProfit": 0},
        {"date": "1/3/2020" , "accountvalue": 20.5,"investments": 0.0, "rothira": 0.0, "NetProfit": 0},
        {"date": "1/4/2020" , "accountvalue": 15.0,"investments": 0.0, "rothira": 0.0, "NetProfit": 0},
        {"date": "1/5/2020" , "accountvalue": 34.0,"investments": 0.0, "rothira": 0.0, "NetProfit": 0},
        {"date": "1/6/2020" , "accountvalue": 32.0,"investments": 0.0, "rothira": 0.0, "NetProfit": 0},
        {"date": "1/7/2020" , "accountvalue": 27.0,"investments": 0.0, "rothira": 0.0, "NetProfit": 0},
        ]
    return data

@app.get("/api/stonksdata/lookup/")
def read_stonksdata(skip: int = 0, limit: int = 500, db: Session = Depends(get_db)):
    stonksdata = crud.get_stonksdata(db, skip=skip, limit=limit)
    return stonksdata

@app.post("/api/stonksdata/create/{date_value}/{accountvalue_value}/{investments_value}/{rothira_value}/{netprofit_value}", response_model = schemas.stonksdata)
def create_stonksdata(
    date_value : str,
    accountvalue_value : float,
    investments_value : float,
    rothira_value : float,
    netprofit_value : float,
    stonksdata : schemas.stonksdataCreate,
    db: Session = Depends(get_db)
):
    return crud.create_stonksdata(
        db = db,
        entry = stonksdata,
        date_string = date_value,
        accountvalue_value = accountvalue_value,
        investments_value = investments_value,
        rothira_value = rothira_value,
        netprofit_value = netprofit_value     
    )


#To run backend: uvicorn fastapi_server:app [--reload]

