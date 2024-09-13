import './index.html';
import './index.scss';
import { navMenu } from './modules/navMenu';
import { toggleBurgerMenu } from './modules/burgerMenu';
import { reviews } from './modules/reviews';
import { interview } from'./modules/interview';
import { validateForm } from './modules/validateForm';
import { sendMail } from './modules/sendMail';

document.addEventListener('DOMContentLoaded', function () { 
	navMenu();
	toggleBurgerMenu();
	reviews();
	interview();
	validateForm();
	sendMail();
});