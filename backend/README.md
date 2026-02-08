# Backend - Temple Management Application

Backend server for the Temple Management Application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
   - Copy `.env.example` to `.env` (or use existing `.env`)
   - Fill in your credentials

3. Run development server:
```bash
npm run dev
```

## Production Deployment

Deploy to Render using the included `render.yaml` configuration.

See the main [deployment guide](../../brain/8be799f3-c879-43a4-8e08-df5a3cc39a07/deployment_guide.md) for detailed instructions.

## API Endpoints

- `POST /api/create-payment-link` - Create Razorpay payment order
- `POST /api/verify-payment` - Verify payment signature
- `POST /api/send-reminder` - Send donation reminder
- `POST /api/test-email` - Test email configuration
- `POST /api/test-sms` - Test SMS configuration

## Environment Variables

See `.env` file for required configuration.
