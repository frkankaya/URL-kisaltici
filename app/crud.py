import string
import random

db = {}

def generate_short_code(length=6):
    chars = string.ascii_letters + string.digits

    while True:
        code = ''.join(random.choice(chars) for i in range(length))

        if code not in db:
            return code
        
def shorten_url(url: str):
    code = generate_short_code()

    db[code] = url
    return code

def get_url(code: str):
    return db.get(code)