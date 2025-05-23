import string
import random
from sqlalchemy.orm import Session
from models import URL

def generate_short_url(length: int = 6):
    chars = string.ascii_letters + string.digits  # a-zA-Z0-9
    return ''.join(random.choices(chars, k=length))

def create_url(db: Session, original_url: str):
    short_url = generate_short_url()
    db_url = URL(original_url=original_url, short_url=short_url)
    db.add(db_url)
    db.commit()
    db.refresh(db_url)
    return db_url

def get_url_by_short(db: Session, short_url: str):
    return db.query(URL).filter(URL.short_url == short_url).first()

def get_url_by_original(db: Session, original_url: str):
    return db.query(URL).filter(URL.original_url == original_url).first()