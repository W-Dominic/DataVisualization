from fastapi import FastAPI, Depends

from sqlalchemy.orm import Session
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


@app.get("/api/stonksdata")
async def root():
    data = [
        {"Day": 1, "AccountValue": 0.0, "NetProfit": 0},
        {"Day": 2, "AccountValue": 100.0, "NetProfit": 0},
        {"Day": 3, "AccountValue": 150.0, "NetProfit": 50},
        {"Day": 4, "AccountValue": 140.0, "NetProfit": 40},
        {"Day": 5, "AccountValue": 80.0, "NetProfit": -20},
        {"Day": 6, "AccountValue": 110.0, "NetProfit": 10}
        ]
    return data

@app.get("/api/stonksdata/lookup/")
def read_stonksdata(skip: int = 0, limit: int = 500, db: Session = Depends(get_db)):
    stonksdata = crud.get_stonksdata(db, skip=skip, limit=limit)
    return stonksdata

#To run backend: uvicorn fastapi_server:app [--reload]

