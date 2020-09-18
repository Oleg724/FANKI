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
        list: {
            'Главная': <Fanki/>,
            'Запросы': <Flesh/>,
            'Календарь': <Calendar/>,
            'База знаний': <Book/>,
            'Новости': <BookOpen/>,
            'Задачи': <CheckmarkCircle/>,
            'Чаты': <MessageCircle/>,
        }
    };

    _administrator = {
        label: 'Администратор',
        list: {
            'Статистика компании': <TrendingUp/>,
            'Структура компании': <Copy/>,
            'Сотрудники': <People/>,
            'База знаний': <Book/>,
            'Новости': <BookOpen/>,
            'Настройки': <Settings/>,
            'Служба поддержки': <Layers/>,
        }
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