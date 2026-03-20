# LissanAI – API Documentation

## Authentication

### POST /api/auth/register
Register a new user.
```json
{ "name": "Abebe Kebede", "email": "abebe@example.com", "password": "Secure123!" }
```

### POST /api/auth/forgot-password
Send password reset email.
```json
{ "email": "abebe@example.com" }
```

## Grammar

### POST /api/grammar/check
Analyze text for grammar errors.
```json
{ "text": "I is going to the office yesterday." }
```
Response includes: `correctedText`, `errors[]`, `clarityScore`, `styleImprovements[]`.

## Interview

### POST /api/interview
Continue a mock interview session.
```json
{ "category": "Software Developer", "message": "My answer here..." }
```

## Email

### POST /api/email/draft
Generate a professional email from notes.

### POST /api/email/write
Improve an existing email draft.

## Pronunciation

### POST /api/pronunciation/assess
Submit audio blob for assessment. Returns `PronunciationAssessment`.

### GET /api/pronunciation/sentence
Get a random practice sentence.

## Learning

### GET /api/learning/paths
List all learning paths (paginated).

### POST /api/learning/paths/:id/enroll
Enroll the authenticated user in a path.

### POST /api/learning/lessons/:id/complete
Mark a lesson as completed and log activity.

## Error Responses
```json
{ "error": "Human-readable message", "code": "MACHINE_CODE", "statusCode": 400 }
```

## Rate Limits
- Public endpoints: 60 req/min per IP
- Authenticated: 200 req/min
- Headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`
