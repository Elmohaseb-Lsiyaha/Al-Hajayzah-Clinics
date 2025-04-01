import { CONFIG } from '../config.js';

export const processPayment = async (amount, appointmentId) => {
    const paymentData = {
        auth_token: CONFIG.PAYMOB.API_KEY,
        amount_cents: amount * 100,
        currency: "EGP",
        order_id: appointmentId,
        integration_id: CONFIG.PAYMOB.INTEGRATION_ID
    };

    try {
        const response = await fetch('https://accept.paymob.com/api/acceptance/payment_keys', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(paymentData)
        });
        const data = await response.json();
        return `https://accept.paymob.com/api/acceptance/iframes/${CONFIG.PAYMOB.IFRAME_ID}?payment_token=${data.token}`;
    } catch (error) {
        console.error('فشل عملية الدفع:', error);
    }
};