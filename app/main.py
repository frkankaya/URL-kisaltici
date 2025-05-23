from fastapi import FastAPI, HTTPException
from fastapi.responses import RedirectResponse
from app.schemas import URLItem
from app.crud import shorten_url, get_url

app = FastAPI()

@app.post("/shorten")
def create_short_url(url_item: URLItem):
    code = shorten_url(url_item.url)
    return {"shortened_url": f"http://localhost:8000/{code}"}

@app.get("/{code}")
def redirect_url(code: str):
    url = get_url(code)

    if url:
        return RedirectResponse(url)
    raise HTTPException(status_code=404, detail="Short URL is not found.")