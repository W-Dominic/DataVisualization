from sqlalchemy.orm import Session

import models, schemas

def get_stonksdata_by_date(db: Session, input_date: str):
    return db.query(models.stonksdata).filter(models.date == input_date).first()

def get_stonksdata(db: Session, skip: int = 0, limit: int = 500):
    return db.query(models.stonksdata).offset(skip).limit(limit).all()
