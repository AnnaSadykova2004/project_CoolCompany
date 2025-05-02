"use strict";


document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const activityDirection = document.querySelector('#orderForm select[name="activityDirection"]').value;
    const projectCost = document.querySelector('#orderForm input[name="projectCost"]').value;
    const serviceDateTime = new Date(document.querySelector('#orderForm input[name="serviceDateTime"]').value);
    const bigText = document.querySelector('#orderForm textarea[name="bigText"]').value;

    
    let isValid = true;
    let errorMessage = '';

    
    if (activityDirection === '') {
        isValid = false;
        errorMessage += 'Выберите направление деятельности.\n';
    }

   
    if (projectCost === '' || isNaN(projectCost) || parseFloat(projectCost) <= 0) {
        isValid = false;
        errorMessage += 'Стоимость услуги должна быть положительным числом.\n';
    }

    
    if (serviceDateTime.getFullYear() < 2025) {
        isValid = false;
        errorMessage += 'Год выполнения работ должен быть не менее 2025.\n';
    }

    
    if (bigText.trim() !== '') { 
        if (!bigText.match(/[a-zA-Zа-яА-ЯёЁ]/)) { 
            isValid = false;
            errorMessage += 'Введите текст, а не цифры.\n';
        }
    }

   
    if (isValid) {
        alert(`Направление деятельности: ${activityDirection}\nСтоимость услуги: ${parseFloat(projectCost)}\nДата выполнения работ: ${serviceDateTime.toLocaleString()}\nПожелания: ${bigText}`);
        
        
        document.querySelector('#orderForm select[name="activityDirection"]').classList.add('highlight');
        document.querySelector('#orderForm input[name="projectCost"]').classList.add('highlight');
        document.querySelector('#orderForm input[name="serviceDateTime"]').classList.add('highlight');
        document.querySelector('#orderForm textarea[name="bigText"]').classList.add('highlight');

        
        const requiredStars = document.querySelectorAll('#orderForm .required');
        requiredStars.forEach(star => {
            star.textContent = '✔️'; 
            star.classList.add('success-icon'); 
        });

        
        const submitButton = document.querySelector('#orderForm button[type="submit"]');
        submitButton.classList.add('button-disabled'); 

        
        document.getElementById('output').innerHTML = `
            <h3>Данные заказа:</h3>
            <p>Направление деятельности: ${activityDirection}</p>
            <p>Стоимость услуги: ${parseFloat(projectCost)}</p>
            <p>Дата выполнения работ: ${serviceDateTime.toLocaleString()}</p>
            <p>Пожелания: ${bigText}</p>
        `;
        
        
        document.getElementById('orderForm').reset();
        
    } else {
        alert(`Ошибка:\n${errorMessage}`);
        
        
        const fieldsToCheck = [
            { selector: '#orderForm select[name="activityDirection"]', valid: activityDirection !== '' },
            { selector: '#orderForm input[name="projectCost"]', valid: projectCost !== '' && !isNaN(projectCost) && parseFloat(projectCost) > 0 },
            { selector: '#orderForm input[name="serviceDateTime"]', valid: serviceDateTime.getFullYear() >= 2025 },
            { selector: '#orderForm textarea[name="bigText"]', valid: bigText.trim() === '' || bigText.match(/[a-zA-Zа-яА-ЯёЁ]/) }
        ];
        
        fieldsToCheck.forEach(field => {
            const element = document.querySelector(field.selector);
            
            if (field.valid) {
                element.classList.add('highlight'); 
            } else {
                element.classList.remove('highlight'); 
                
                if (field.selector === '#orderForm textarea[name="bigText"]') {
                    element.value = ''; 
                }
                
                const requiredStar = element.parentNode.querySelector('.required');
                if (requiredStar) {
                    requiredStar.textContent = '*'; 
                    requiredStar.classList.remove('success-icon'); 
                }
            }
            
            const submitButton = document.querySelector('#orderForm button[type="submit"]');
            submitButton.classList.remove('button-disabled'); 
        });
        
    }
});


document.getElementById('callbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.querySelector('#callbackForm input[name="username"]').value;
    
	

	alert(`Имя пользователя: ${username}`);  

	
	document.getElementById('callbackForm').reset();
});