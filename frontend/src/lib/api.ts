// API Configuration
// Uses environment variable in production, falls back to localhost in development
export const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:3055';

// API endpoints
export const api = {
    createPaymentLink: async (data: { amount: number; customer: { name: string; email: string } }) => {
        const response = await fetch(`${API_URL}/api/create-payment-link`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return response.json();
    },

    verifyPayment: async (data: {
        razorpay_order_id: string;
        razorpay_payment_id: string;
        razorpay_signature: string;
    }) => {
        const response = await fetch(`${API_URL}/api/verify-payment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return response.json();
    },

    sendReminder: async (data: {
        name: string;
        email: string;
        phone: string;
        daysSinceLastDonation: number;
    }) => {
        const response = await fetch(`${API_URL}/api/send-reminder`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return response.json();
    },

    testEmail: async (data: { email: string; name: string }) => {
        const response = await fetch(`${API_URL}/api/test-email`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return response.json();
    },

    testSMS: async (data: { phone: string; name: string }) => {
        const response = await fetch(`${API_URL}/api/test-sms`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return response.json();
    },
};
