# next-keycloak-sso
Keycloak SSO in Next.js 14 with NextAuth.js

## Setup

### Keycloak
- `git clone https://github.com/keycloak/keycloak`
- `cd keycloak/bin`
- Generate SSL certificate `openssl req -newkey rsa:2048 -nodes -keyout keycloak-server.key.pem -x509 -days 3650 -out keycloak-server.crt.pem`
- Start Keycloak `./kc.sh start-dev --https-port=8081 --https-certificate-file=keycloak-server.crt.pem --https-certificate-key-file=keycloak-server.key.pem`
- Go to `http://localhost:8080` and log in with `admin` and `admin`
- [Create a new realm](http://localhost:8080/admin/master/console/#/master/add-realm) and call it nextauth
- [Create a client](http://localhost:8080/admin/master/console/#/nextauth/clients/add-client)
    - Enter `http://localhost:3000/api/auth/callback/keycloak` as `Valid redirect URIs`
    - Enter `http://localhost:3000` as `Valid post logout redirect URIs`
- Copy the client secret from the credentials tab of the client
- [Create a new user](http://localhost:8080/admin/master/console/#/nextauth/users/add-user)
- Go to the credentials tab of the created user and set the password

### Develop locally

```bash
git clone https://github.com/paulphys/next-keycloak-sso
cd next-keycloak-sso
pnpm
pnpm dev
```

### Environment variables

Copy/rename [`.env.example`](https://github.com/paulphys/nextauth-keycloak/blob/main/.env.example) to `.env` and fill in all the values.


