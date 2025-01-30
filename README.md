# Blutspende-Registrierung
Simple register service for blood donations.

# How to start
## Frontend
```shell
cd frontend
```

### Testing
```shell
npm install
npm run dev
```

### Production
```shell
npm run buid
cd build
node index.js
```


## API
### Linux
```shell
pip install -r requirements.txt
gunicorn --keyfile ./frontend/cert/key.pem --certfile ./frontend/cert/cert.pem -b 127.0.0.1:5000 app:app
```

### Windows (Only for testing use. Do NOT use this in production!)
```shell
pip install -r requirements.txt
python3 app.py
```

## For local testing
### Install Cert for the Svelte App
1. #### Install [mkcert](https://github.com/FiloSottile/mkcert)
2. #### Install a local certificate authority
```shell
mkcert -install
```
3. #### Create your certificate with `mkcert`
```shell
cd frontend/cert
mkcert -key-file key.pem -cert-file cert.pem localhost
```


# Notes
## Datenbank
- The dates in the DB is only saved with the following format: `YYYY-MM-DD`

## .env File
```txt
ISERV_CLIENT_ID=
ISERV_CLIENT_SECRET=
ISERV_DISCORVERY_URL=https://domain.for.iserv/.well-known/openid-configuration
SECRET_KEY=

OAUTHLIB_INSECURE_TRANSPORT=1 # idk we have to play with this for a way it works

EMAIL_PASSWORD=
SMTP_SERVER=
STARTTLS_PORT=
SENDER_EMAIL=eu

API_DOMAIN=https://blutspenden.novacodes.eu/api
FRONTENT_DOMAIN=https://blutspenden.novacodes.eu
#API_DOMAIN=http://localhost:5000
#API_DOMAIN=https://127.0.0.1:5000
#FRONTENT_DOMAIN=http://localhost:5173
```
**Please edit the Domain names. This are only examples from our current config**

