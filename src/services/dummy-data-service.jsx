import icon1 from '../assets/avatars/21.png';
import icon2 from '../assets/avatars/12.png';
import icon3 from '../assets/avatars/26.png';
import icon4 from '../assets/avatars/14.png';
import icon5 from '../assets/avatars/3.png';
import icon6 from '../assets/avatars/31.png';
import icon7 from '../assets/avatars/15.png';
import icon8 from '../assets/avatars/21.png';
import icon9 from '../assets/avatars/17.png';
import icon10 from '../assets/avatars/7.png';
import icon11 from '../assets/avatars/10.png';
import icon12 from '../assets/avatars/2.png';
import icon13 from '../assets/avatars/25.png';
import icon14 from '../assets/avatars/1.png';
import updatesImage from '../assets/updates.png';

export default class DummyDataService {
    _users = [
        {
            id: 1,
            name: 'Александров Александр',
            position: 'Генеральный директор',
            role: 'general',
            birthday: '20.08.1980',
            icon: icon1,
            absence: {
                type: '',
                period: {
                    start: '',
                    end: {
                        after: '',
                        before: ''
                    }
                }
            },
            queries: {
                'Запрос №1': 'Петров Алексей',
                'Запрос №2': 'Шишкин Егор',
                'Запрос №3': 'Фёдоров Георгий',
                'Запрос №4': 'Фёдоров Георгий',
            },
            calendar: [
                {
                    type: 'Групповое событие',
                    date: '20 авг',
                    time: '10:00 - 11:00',
                    title: 'Презентация мобильной системы'
                },
                {
                    type: 'Cобытие',
                    date: '14 авг',
                    time: '10:00 - 11:00',
                    title: 'Презентация стационарной системы'
                },
                {
                    type: 'Групповое событие',
                    date: '20 авг',
                    time: '10:00 - 11:00',
                    title: 'Презентация мобильной системы'
                },
                {
                    type: 'Cобытие',
                    date: '14 авг',
                    time: '10:00 - 11:00',
                    title: 'Презентация мобильной системы'
                },
                {
                    type: 'Групповое событие',
                    date: '18 авг',
                    time: '10:00 - 11:00',
                    title: 'Презентация мобильной системы'
                },
            ],
            'knowledge-base': {
                // 'Публикация №1': 'Основы экономической теории',
                // 'Публикация №2': 'Экономика предприятия',
                // 'Публикация №3': 'Микро и макроэкономика'
            },
            notifications: [
                {
                    id: 1,
                    from: 'Владимиров Владимир',
                    icon: icon14,
                    creationTime: '9:22',
                    type: '',
                    kind: 'назначает вам задачу',
                    text: 'Подготовить обновленную презентацию разработанного продукта',
                },
                {
                    id: 2,
                    from: 'Владимиров Владимир',
                    icon: icon14,
                    creationTime: '9:20',
                    type: 'Групповое событие',
                    kind: 'Создаёт событие',
                    text: 'Презентация IT-отдела. Улучшение мобильной платежной системы.',
                }
            ],
            events: [
                {
                    id: 1,
                    from: 'Fanki Soft',
                    type: 'company',
                    icon: icon3,
                    creationTime: '2020-09-22T10:50:00',
                    comments: '',
                    likes: '',
                    likes2: '',
                    title: 'Текст обьявления, который написан от лица компании',
                    text: '',
                },
                {
                    id: 2,
                    from: 'Калинина Оксана',
                    type: 'employee',
                    icon: icon14,
                    creationTime: '2020-09-22T09:20:00',
                    comments: '',
                    likes: '',
                    likes2: '',
                    title: 'Текст обьявления, который написан от лица сотрудника',
                    text: '',
                },
                {
                    id: 3,
                    from: 'Fanki Soft',
                    type: 'news',
                    icon: updatesImage,
                    creationTime: '2020-09-21T12:00:00',
                    comments: '18',
                    likes: '3',
                    likes2: '5',
                    title: 'Здесь будет находится очень длинный заголовок опубликованной новости в водопаде событий',
                    text: `Разнооборазный и богатый опыт, постоянный количественный рост и сфера нашей активности
                        позволяет оценить значение позиций, занимаемых нашей компанией`,
                }
            ]
        },
        {
            id: 2,
            name: 'Фёдоров Георгий',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '20.08.1985',
            icon: icon2,
            absence: {
                type: '',
                period: {
                    start: '',
                    end: {
                        after: '',
                        before: ''
                    }
                }
            },
        },
        {
            id: 3,
            name: 'Никифорова Валентина',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '10.03.1975',
            icon: icon3,
            absence: {
                type: 'vacation',
                period: {
                    start: '2020-08-10',
                    end: {
                        after: '2020-09-21T10:00:00',
                        before: '2020-09-21T12:00:00'
                    }
                }
            },
        },
        {
            id: 4,
            name: 'Сапогова Лилия',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '05.12.1976',
            icon: icon4,
            absence: {
                type: 'vacation',
                period: {
                    start: '2020-08-20',
                    end: {
                        after: '2020-09-31T10:00:00',
                        before: '2020-09-31T12:00:00'
                    }
                }
            },
        },
        {
            id: 5,
            name: 'Шепелева Галина',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '29.01.1982',
            icon: icon5,
            absence: {
                type: 'vacation',
                period: {
                    start: '2020-08-20',
                    end: {
                        after: '2020-10-10T10:00:00',
                        before: '2020-10-10T12:00:00'
                    }
                }
            },
        },
        {
            id: 6,
            name: 'Федотов Алексей',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '03.05.1980',
            icon: icon6,
            absence: {
                type: 'vacation',
                period: {
                    start: '2020-08-20',
                    end: {
                        after: '2020-09-25T10:00:00',
                        before: '2020-09-25T12:00:00'
                    }
                }
            },
        },
        {
            id: 7,
            name: 'Кузнецова Екатерина',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '22.11.1979',
            icon: icon7,
            absence: {
                type: 'vacation',
                period: {
                    start: '2020-09-15',
                    end: {
                        after: '2020-10-01T10:00:00',
                        before: '2020-10-01T12:00:00'
                    }
                }
            },
        },
        {
            id: 8,
            name: 'Яковлев Николай',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '13.05.1969',
            icon: icon8,
            absence: {
                type: 'vacation',
                period: {
                    start: '2020-08-10',
                    end: {
                        after: '2020-09-18T10:00:00',
                        before: '2020-09-18T12:00:00'
                    }
                }
            },
        },
        {
            id: 9,
            name: 'Гончаров Леонид',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '01.01.1973',
            icon: icon9,
            absence: {
                type: 'vacation',
                period: {
                    start: '2020-08-20',
                    end: {
                        after: '2020-09-30T10:00:00',
                        before: '2020-09-30T12:00:00'
                    }
                }
            },
        },
        {
            id: 10,
            name: 'Зырянов Кирилл',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '25.06.1980',
            icon: icon10,
            absence: {
                type: 'vacation',
                period: {
                    start: '2020-08-16',
                    end: {
                        after: '2020-10-01T10:00:00',
                        before: '2020-10-01T12:00:00'
                    }
                }
            },
        },
        {
            id: 11,
            name: 'Терентьев Валерий',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '12.12.1975',
            icon: icon11,
            absence: {
                type: 'dayOff',
                period: {
                    start: '2020-08-16',
                    end: {
                        after: '2020-09-18T09:00:00',
                        before: '2020-09-18T13:00:00'
                    }
                }
            },
        },
        {
            id: 12,
            name: 'Владимиров Владимир',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '11.11.1971',
            icon: icon12,
            absence: {
                type: '',
                period: {
                    start: '',
                    end: {
                        after: '',
                        before: ''
                    }
                }
            },
        },
        {
            id: 13,
            name: 'Петров Алексей',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '02.08.1977',
            icon: icon13,
            absence: {
                type: '',
                period: {
                    start: '',
                    end: {
                        after: '',
                        before: ''
                    }
                }
            },
        },
        {
            id: 14,
            name: 'Шишкин Егор',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '10.01.1978',
            icon: icon13,
            absence: {
                type: '',
                period: {
                    start: '',
                    end: {
                        after: '',
                        before: ''
                    }
                }
            },
        },
        {
            id: 15,
            name: 'Шевченко Андрей',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '20.08.1976',
            icon: icon1,
            absence: {
                type: '',
                period: {
                    start: '',
                    end: {
                        after: '',
                        before: ''
                    }
                }
            },
        },
        {
            id: 16,
            name: 'Фёдоров Георгий',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '20.08.1985',
            icon: icon2,
            absence: {
                type: '',
                period: {
                    start: '',
                    end: {
                        after: '',
                        before: ''
                    }
                }
            },
        },
        {
            id: 17,
            name: 'Никифорова Валентина',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '10.03.1975',
            icon: icon3,
            absence: {
                type: 'dayOff',
                period: {
                    start: '2020-08-10',
                    end: {
                        after: '2020-09-21T10:00:00',
                        before: '2020-09-21T12:00:00'
                    }
                }
            },
        },
        {
            id: 18,
            name: 'Сапогова Лилия',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '05.12.1976',
            icon: icon4,
            absence: {
                type: 'dayOff',
                period: {
                    start: '2020-08-20',
                    end: {
                        after: '2020-09-31T10:00:00',
                        before: '2020-09-31T12:00:00'
                    }
                }
            },
        },
        {
            id: 19,
            name: 'Шепелева Галина',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '29.01.1982',
            icon: icon5,
            absence: {
                type: 'dayOff',
                period: {
                    start: '2020-08-20',
                    end: {
                        after: '2020-10-10T10:00:00',
                        before: '2020-10-10T12:00:00'
                    }
                }
            },
        },
        {
            id: 20,
            name: 'Федотов Алексей',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '03.05.1980',
            icon: icon6,
            absence: {
                type: 'dayOff',
                period: {
                    start: '2020-08-20',
                    end: {
                        after: '2020-09-25T10:00:00',
                        before: '2020-09-25T12:00:00'
                    }
                }
            },
        },
        {
            id: 21,
            name: 'Кузнецова Екатерина',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '22.11.1979',
            icon: icon7,
            absence: {
                type: 'dayOff',
                period: {
                    start: '2020-09-15',
                    end: {
                        after: '2020-10-01T10:00:00',
                        before: '2020-10-01T12:00:00'
                    }
                }
            },
        },
        {
            id: 22,
            name: 'Яковлев Николай',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '13.05.1969',
            icon: icon8,
            absence: {
                type: 'dayOff',
                period: {
                    start: '2020-08-10',
                    end: {
                        after: '2020-09-18T10:00:00',
                        before: '2020-09-18T12:00:00'
                    }
                }
            },
        },
        {
            id: 23,
            name: 'Гончаров Леонид',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '01.01.1973',
            icon: icon9,
            absence: {
                type: 'dayOff',
                period: {
                    start: '2020-08-20',
                    end: {
                        after: '2020-09-30T10:00:00',
                        before: '2020-09-30T12:00:00'
                    }
                }
            },
        },
        {
            id: 24,
            name: 'Зырянов Кирилл',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '25.06.1980',
            icon: icon10,
            absence: {
                type: 'dayOff',
                period: {
                    start: '2020-08-16',
                    end: {
                        after: '2020-10-01T10:00:00',
                        before: '2020-10-01T12:00:00'
                    }
                }
            },
        },
        {
            id: 25,
            name: 'Терентьев Валерий',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '12.12.1975',
            icon: icon11,
            absence: {
                type: 'dayOff',
                period: {
                    start: '2020-08-16',
                    end: {
                        after: '2020-09-18T09:00:00',
                        before: '2020-09-18T13:00:00'
                    }
                }
            },
        },
        {
            id: 26,
            name: 'Владимиров Владимир',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '11.11.1971',
            icon: icon12,
            absence: {
                type: '',
                period: {
                    start: '',
                    end: {
                        after: '',
                        before: ''
                    }
                }
            },
        },
        {
            id: 27,
            name: 'Петров Алексей',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '02.08.1977',
            icon: icon13,
            absence: {
                type: '',
                period: {
                    start: '',
                    end: {
                        after: '',
                        before: ''
                    }
                }
            },
        },
        {
            id: 28,
            name: 'Шишкин Егор',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '10.01.1978',
            icon: icon13,
            absence: {
                type: 'sickLeave',
                period: {
                    start: '2020-09-16',
                    end: {
                        after: '2020-09-21T09:00:00',
                        before: '2020-09-21T13:00:00'
                    }
                }
            },
        },        {
            id: 29,
            name: 'Алексеев Алексей',
            position: 'Менеджер по продажам',
            role: 'user',
            birthday: '12.12.1975',
            icon: icon11,
            absence: {
                type: 'dayOff',
                period: {
                    start: '2020-08-16',
                    end: {
                        after: '2020-09-18T09:00:00',
                        before: '2020-09-18T13:00:00'
                    }
                }
            },
            events: [
                {
                    type: 'Групповое событие',
                    date: '20 авг',
                    time: '10:00 - 11:00',
                    title: 'Презентация мобильной системы'
                }
            ]
        },
    ];

    _messages = [
        // {
        //     type: 'query',
        //     date: '20.08.2020',
        //     title: 'Ваш запрос на больничный',
        //     period: {
        //         start: '20.08.2020',
        //         end: '21.08.2020',
        //     }
        // }
    ]

    getUsers = async () => {
        return this._users;
    }

    getUserCalendar = async (id) => {
        const user = this._users.filter((user) => user.id === id);
        return this._transformUsersDataCalendar(user);
    }

    getUserQueries = async (id) => {
        const user = this._users.filter((user) => user.id === id);
        return this._transformUsersDataWithQueries(user);
    }

    getUserKnowledgeBase = async (id) => {
        const user = this._users.filter((user) => user.id === id);
        return this._transformUsersDataKnowledgeBase(user);
    }

    getUserNotifications = async (id) => {
        const user = this._users.filter((user) => user.id === id);
        return this._transformUsersDataNotifications(user);
    }

    getUserEvents = async (id) => {
        const user = this._users.filter((user) => user.id === id);
        return this._transformUsersDataEvents(user);
    }

    getNumerOfMessages = async () => {
        return this._messages.length;
    }

    _transformUsersDataWithQueries = (user) => {
        return {
            queries: user[0].queries
        }
    }

    _transformUsersDataCalendar = (user) => {
        return {
            id: user[0].id,
            name: user[0].name,
            events: user[0].calendar
        }
    }

    _transformUsersDataKnowledgeBase = (user) => {
        return {
            id: user[0].id,
            name: user[0].name,
            base: user[0]['knowledge-base']
        }
    }

    _transformUsersDataNotifications = (user) => {
        return {
            id: user[0].id,
            name: user[0].name,
            notifications: user[0].notifications
        }
    }

    _transformUsersDataEvents = (user) => {
        return {
            id: user[0].id,
            name: user[0].name,
            events: user[0].events
        }
    }
}