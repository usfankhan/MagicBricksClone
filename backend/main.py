from fastapi import FastAPI, Depends, Query
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List, Optional

import models
from database import engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/properties/search")
def search_properties(
    city: Optional[str] = None,
    property_type: Optional[str] = Query(None, alias="type"),
    min_budget: Optional[int] = None,
    max_budget: Optional[int] = None,
    db: Session = Depends(get_db)
):
    query = db.query(models.Property)

    if city:
        query = query.filter(models.Property.city == city)
    
    if property_type:
        query = query.filter(models.Property.type == property_type)
        
    if min_budget is not None:
        query = query.filter(models.Property.price >= min_budget)
        
    if max_budget is not None:
        query = query.filter(models.Property.price <= max_budget)

    return query.all()
