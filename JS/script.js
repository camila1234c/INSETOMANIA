
    function openMenu() {
        document.getElementById("menu").style.width = "250px";
    }
    
    function closeMenu() {
        document.getElementById("menu").style.width = "0";
    }
    
    
    document.addEventListener('click', function (event) {
        const menu = document.getElementById('menu');
        const menuBtn = document.querySelector('.menu-btn');
    
        if (!menu.contains(event.target) && event.target !== menuBtn && !menuBtn.contains(event.target)) {
            closeMenu();
        }
    });
    
    function validateForm(formId) {
        const form = document.getElementById(formId);
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;
    
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                isValid = false;
            } else {
                input.style.borderColor = '#ddd';
            }
        });
    
    
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput && !isValidEmail(emailInput.value)) {
            emailInput.style.borderColor = 'red';
            isValid = false;
            alert('Por favor, insira um e-mail válido.');
        }
    
        return isValid;
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    
    function showSuccessMessage() {
        alert('Seu cadastro foi feito com sucesso!');
        window.location.href = 'index.html';
    }
    
    
    function phoneMask(input) {
        const text = input.value;
        const textOnlyNumbers = text.replace(/\D/g, '').substring(0, 11);
    
        let telefone = textOnlyNumbers.replace(/^(\d{2})(\d)/g, '($1) $2');
        if (textOnlyNumbers.length > 6) {
            telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2');
        }
    
        input.value = telefone;
    }
    
    
    document.addEventListener('DOMContentLoaded', function () {
        const phoneInputs = document.querySelectorAll('input[type="tel"]');
        phoneInputs.forEach(input => {
            input.addEventListener('input', function () {
                phoneMask(this);
            });
        });
    
    
        const currentPage = location.pathname.split('/').pop();
        const menuLinks = document.querySelectorAll('.menu a');
    
        menuLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
    
