from sqlalchemy import Column, Integer, String
from database import Base

class Property(Base):
    __tablename__ = "properties"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    city = Column(String, index=True)
    type = Column(String, index=True) # Rent, Buy
    price = Column(Integer, index=True)
    bedrooms = Column(Integer)
    bathrooms = Column(Integer)
    image_url = Column(String)
