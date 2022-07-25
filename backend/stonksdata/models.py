from sqlalchemy import Column, String, Float
from sqlalchemy.orm import relationship
import sys

sys.path.insert(0, "../")

from database import Base

class stonksdata(Base):
    __tablename__ = "stonks"

    date = Column(String(9), primary_key=True, nullable=False)
    accountvalue = Column(Float, nullable=False)
    investments = Column(Float, nullable=False)
    rothira = Column(Float, nullable=False)
    netprofit = Column(Float, nullable=False)