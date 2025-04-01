import { CONFIG } from '../config.js';

export const handleLogin = async (email, password) => {
    try {
        const response = await fetch(`${CONFIG.API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        return await response.json();
    } catch (error) {
        console.error('خطأ في تسجيل الدخول:', error);
    }
};

// Event Listener للنموذج
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    const result = await handleLogin(email, password);
    
    if(result.success) {
        localStorage.setItem('clinicToken', result.token);
        window.location.href = '../dashboard/appointments.html';
    }
});