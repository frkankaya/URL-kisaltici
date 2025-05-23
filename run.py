import uvicorn
import webbrowser
import threading
import time

def open_browser():
    time.sleep(1)
    webbrowser.open("http://127.0.0.1:8000/docs")


if __name__ == "__main__":
    threading.Thread(target=open_browser).start()
    uvicorn.run("app.main:app", host="127.0.0.1", port=8000, reload=True)