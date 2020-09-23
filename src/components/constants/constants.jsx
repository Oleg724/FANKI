import React from 'react';
import Fanki from './fanki-icon';
import Flesh from './flesh-icon';
import Calendar from './calendar-icon';
import Book from './book-icon';
import BookOpen from './book-open-icon';
import CheckmarkCircle from './checkmark-circle-icon';
import MessageCircle from './message-circle-icon';
import TrendingUp from './trending-up-icon';
import Copy from './copy-icon';
import People from './people-icon';
import Settings from './settings-icon';
import Layers from './layers-icon';

export default class Constants {
    
    _main = {
        label: 'Компания',
        list: [
            {
                id: 1,
                title: 'Главная',
                icon: <Fanki/>,
                path: '/',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 2,
                title: 'Запросы',
                icon: <Flesh/>,
                path: '/queries',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 3,
                title: 'Календарь',
                icon: <Calendar/>,
                path: '/calendar',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 4,
                title: 'База знаний',
                icon: <Book/>,
                path: '/knowledge-base',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 5,
                title: 'Новости',
                icon: <BookOpen/>,
                path: '/news',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 6,
                title: 'Задачи',
                icon: <CheckmarkCircle/>,
                path: '/tasks',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 7,
                title: 'Чаты',
                icon: <MessageCircle/>,
                path: '/chats',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            }      
        ]
    };

    _administrator = {
        label: 'Администратор',
        list: [
            {
                id: 1,
                title: 'Статистика компании',
                icon: <TrendingUp/>,
                path: '/stats',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 2,
                title: 'Структура компании',
                icon: <Copy/>,
                path: '/structure',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 3,
                title: 'Сотрудники',
                icon: <People/>,
                path: '/staff',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 4,
                title: 'База знаний',
                icon: <Book/>,
                path: '/knowledge-base',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 5,
                title: 'Новости',
                icon: <BookOpen/>,
                path: '/news',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 6,
                title: 'Настройки',
                icon: <Settings/>,
                path: '/settings',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            },
            {
                id: 7,
                title: 'Служба поддержки',
                icon: <Layers/>,
                path: '/support',
                description: {
                    title: 'Название блока',
                    text: 'Текст описания блока',
                }
            }   
        ]
    };

    getMainList = () => {
        return this._main.list;
    };

    getMainLabel = () => {
        return this._main.label;
    };

    getAdministratorList = () => {
        return this._administrator.list;
    };

    getAdministratorLabel = () => {
        return this._administrator.label;
    }
}