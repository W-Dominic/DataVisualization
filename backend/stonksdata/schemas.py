from pydantic import BaseModel

#fields which are required for reading
class stonksdataBase(BaseModel):
    date: str

#fields which are required for creating
class stonksdataCreate(stonksdataBase):
    pass

#all other fields
class stonksdata(stonksdataBase):
    accountvalue: float    
    investments: float
    rothira: float
    netprofit: float

    class Config: 
        orm_mode = True