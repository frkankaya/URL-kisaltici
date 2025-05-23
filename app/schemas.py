from pydantic import BaseModel, HttpUrl

class URLItem(BaseModel):
    url: HttpUrl