# URL Kısaltıcı

Basit ve kullanışlı bir URL kısaltma uygulaması.  
React ile frontend, FastAPI ile backend geliştirilmiştir.

---

## 🚀 Proje Hakkında

Bu proje, uzun URL’leri kısa, paylaşması kolay linklere dönüştürmek için tasarlanmıştır.  
Backend FastAPI ile REST API olarak hizmet verirken, frontend React ile kullanıcı dostu arayüz sunar.

---

## 🛠️ Kullanılan Teknolojiler

- **React** — Modern, bileşen tabanlı frontend geliştirme  
- **FastAPI** — Hızlı ve kolay REST API geliştirme  
- **SQLite** — Basit dosya tabanlı veritabanı  
- **Fetch API** — React’ten backend’e HTTP istekleri göndermek için  

---

## ⚙️ Kurulum ve Çalıştırma

### Backend

1. Backend klasörüne gidin:
   ```bash
   cd backend
   
2. Sanal ortam oluşturun ve aktif edin:
  bash
  Kopyala
  Düzenle
  python -m venv venv
  source venv/bin/activate  # Linux/macOS
  venv\Scripts\activate     # Windows

3. Gerekli paketleri yükleyin:
pip install -r requirements.txt

4. Backend server’ı başlatın:
uvicorn main:app --reload


Frontend için ise ui klasörüne gidip ui içerisinde:
  npm install ardından npm start
