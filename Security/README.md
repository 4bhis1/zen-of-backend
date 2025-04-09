# 🛡️ Web & System Security for Backend Developers

Security isn’t optional. One mistake, and your system becomes someone else's playground.

This module will walk you through everything a backend warrior should know — from passwords to JWTs, from hashing to headers, from SQLi to XSS.

---

## ✅ Learning Goals

| Topic | Description | Status |
|-------|-------------|--------|
| [ ] HTTPS & TLS | Why HTTP isn’t safe and how TLS encrypts data |
| [ ] Authentication vs Authorization | The gatekeeper vs the rule-setter |
| [ ] OAuth 2.0 & OpenID Connect | Delegated login (e.g., Google/Facebook login) |
| [ ] JWT (JSON Web Tokens) | Stateless sessions, claims, signature verification |
| [ ] API Key & HMAC Auth | Secure token exchange, integrity checks |
| [ ] Secure Password Storage | Hashing with bcrypt, scrypt, Argon2 |
| [ ] CSRF (Cross-Site Request Forgery) | Token-based protection |
| [ ] XSS (Cross-Site Scripting) | Output escaping, content policies |
| [ ] SQL Injection | Parameterized queries, ORM safety |
| [ ] Rate Limiting | Protect from brute-force attacks |
| [ ] CORS | Cross-origin requests handling |
| [ ] Security Headers | `Content-Security-Policy`, `X-Frame-Options` |
| [ ] HTTPS Redirects & HSTS | Prevent downgrade attacks |
| [ ] Session Hijacking | Cookie flags: `HttpOnly`, `Secure`, `SameSite` |
| [ ] Logging Sensitive Info | Avoid passwords/tokens in logs |
| [ ] Secrets Management | Don’t hardcode secrets; use Vault, AWS SSM, etc. |
| [ ] Static & Dynamic Code Analysis | Linting, code scanning, penetration tests |

---

## 📎 Resources to Learn

- [OWASP Top 10 Security Risks](https://owasp.org/www-project-top-ten/)
- [JWT Debugger + Explanation](https://jwt.io/)
- [Auth0's Introduction to OAuth](https://auth0.com/docs/get-started/authentication-and-authorization-flow)
- [Google Dev Guide: Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [CSRF Explained Simply](https://owasp.org/www-community/attacks/csrf)
- [bcrypt vs Argon2 Deep Dive](https://stackoverflow.com/questions/31852878/)

---

## ⚔️ Practice Challenges

Implement each of these securely using Node.js:

| Task | Key Concepts |
|------|--------------|
| Build a login/signup system | bcrypt, JWT, session cookies |
| Add OAuth login (Google/GitHub) | OAuth2, token exchange |
| Rate limit login endpoint | Express middleware, Redis counter |
| Secure an API with JWT | Token verification, role-based access |
| Store secrets securely | `.env`, AWS Secrets Manager |
| Prevent CSRF in forms | CSRF token + middleware |
| Write a CORS policy | Origins, methods, headers whitelist |
| Add security headers | Helmet.js or custom header config |

---

## 🔧 Mini Project: Auth System From Scratch

**Goal:** Implement full authentication module:

- Signup with email & password
- Login → Returns JWT access token + refresh token
- Passwords hashed with `bcrypt`
- Refresh token rotation
- Token expiry + refresh endpoint
- Add middleware for `auth` and `isAdmin` routes

---

## 🧪 Mega Project: Secure REST API (ZingTickets API with Auth)

### Features:
- Public + Private endpoints (e.g., `/api/events`, `/api/book`)
- JWT-based auth
- Admin role with elevated permissions
- Rate limit login to prevent brute-force
- Store tokens in HTTP-only cookies
- Use `helmet`, `cors`, and logging

Bonus:
- Enable 2FA via email or OTP (Twilio / EmailJS)

---

## 🗂️ Folder Layout

