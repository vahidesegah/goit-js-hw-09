


const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';







const loadFormData = () => {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            const { email, message } = JSON.parse(savedData);
            form.elements.email.value = email || '';
            form.elements.message.value = message || '';
        }
    } catch (error) {
        console.error('Error loading form data:', error);
    }
};






const saveFormData = () => {
    const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};






form.addEventListener('input', event => {
  
    if (event.target.matches('input[name="email"], textarea[name="message"]')) {
        saveFormData();
    }
});







form.addEventListener('submit', event => {
    event.preventDefault();
    
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    
  
    if (!email || !message) {
        alert('Lütfen tüm alanları doldurun!');
        return;
    }
    
  
    const formData = { email, message };
    console.log(formData);
    
  
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});




document.addEventListener('DOMContentLoaded', loadFormData);