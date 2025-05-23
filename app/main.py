from fastapi import FastAPI, HTTPException, Depends
from fastapi.responses import RedirectResponse
from app.schemas import URLItem
from app.crud import create_url, get_url_by_short
from app.database import SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/shorten")
def create_short_url(url_item: URLItem, db: Session = Depends(get_db)):
    db_url = create_url(db, str(url_item.url))
    return {"shortened_url": f"http://localhost:8000/{db_url.short_url}"}

@app.get("/{code}")
def redirect_url(code: str, db: Session = Depends(get_db)):
    url = get_url_by_short(db, code)
    if url:
        return RedirectResponse(url.original_url)
    raise HTTPException(status_code=404, detail="Short URL is not found.")