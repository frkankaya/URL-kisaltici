from pydantic import BaseModel, HttpUrl


class URLItem(BaseModel):
    url: HttpUrl


class URLCreate(URLItem):
    pass


class URLInfo(URLItem):
    short_url: str