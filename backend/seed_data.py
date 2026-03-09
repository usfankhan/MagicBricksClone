import random
from database import SessionLocal, engine
import models

# Ensure tables are created
models.Base.metadata.create_all(bind=engine)

db = SessionLocal()

# Check if data already exists
if db.query(models.Property).first() is None:
    print("Database is empty. Seeding data...")

    cities = ["Bangalore", "Mumbai"]
    types = ["Rent", "Buy"]
    
    images_bangalore = [f"/properties/prop_{i}.jpg" for i in range(1, 11)]
    images_mumbai = [f"/properties/prop_{i}.jpg" for i in range(11, 21)]

    properties = []
    
    # Generate 10 properties for Bangalore
    for i in range(10):
        prop_type = random.choice(types)
        price = random.randint(15000, 80000) if prop_type == "Rent" else random.randint(5000000, 30000000)
        properties.append(
            models.Property(
                title=f"Premium {random.randint(2,4)} BHK Apartment in Bangalore",
                description="Luxurious apartment located in the heart of the city with all modern amenities.",
                city="Bangalore",
                type=prop_type,
                price=price,
                bedrooms=random.randint(2, 5),
                bathrooms=random.randint(2, 4),
                image_url=images_bangalore[i]
            )
        )
        
    # Generate 10 properties for Mumbai
    for i in range(10):
        prop_type = random.choice(types)
        price = random.randint(25000, 150000) if prop_type == "Rent" else random.randint(10000000, 100000000)
        properties.append(
            models.Property(
                title=f"Sea-facing {random.randint(1,4)} BHK Flat in Mumbai",
                description="Beautiful sea-facing flat with premium interiors and a spacious balcony.",
                city="Mumbai",
                type=prop_type,
                price=price,
                bedrooms=random.randint(1, 4),
                bathrooms=random.randint(1, 3),
                image_url=images_mumbai[i]
            )
        )

    db.add_all(properties)
    db.commit()
    print("Successfully seeded 20 properties.")
else:
    print("Database already contains data. Skipping.")

db.close()
