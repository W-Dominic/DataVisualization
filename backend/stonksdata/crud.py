from sqlalchemy.orm import Session

import models, schemas

def get_stonksdata_by_date(db: Session, input_date: str):
    return db.query(models.stonksdata).filter(models.date == input_date).first()

def get_stonksdata(db: Session, skip: int = 0, limit: int = 500):
    return db.query(models.stonksdata).offset(skip).limit(limit).all()

def create_stonksdata(
    db: Session, 
    entry: schemas.stonksdataCreate,
    date_string : str,
    accountvalue_value : float,
    investments_value : float,
    rothira_value : float,
    netprofit_value : float
    ):
    db_entry = models.stonksdata(
        date = "",
        accountvalue = accountvalue_value,
        investments = investments_value,
        rothira = rothira_value,
        netprofit = netprofit_value 
    )
    db.add(db_entry)
    db.commit()
    db.refresh(db_entry) #may not be neccessary but good practice
    return db_entry