from app.database import Base, engine
from app.models import URL

Base.metadata.create_all(bind=engine)