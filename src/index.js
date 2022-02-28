import './styles/index.scss';
import $ from "jquery";

const userStack = {
    language: 'JavaScript',
    framework: 'Angular'
}

const user = {
    name: 'Nastya',
    age: '23',
    ...userStack
}

$('.block').html('jQuery is worng');

console.log(user)