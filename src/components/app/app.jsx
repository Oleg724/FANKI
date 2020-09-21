import React, { Component } from 'react';
import { ServiceProvider } from '../service-context';
import { ConstantsProvider } from '../constants-context';
import Header from '../header';
import DummyDataService from '../../services/dummy-data-service';
import Constants from '../constants/constants';
import SideMenu from '../side-menu';
import AbsentsInfo from '../absents-info';
import QueriesBoard from '../queries-board';
import CalendarBoard from '../calendar-board';
import KnowledgeBaseBoard from '../knowledge-base-board';
import NotificationsBoard from '../notifications-board';
import EventsBoard from '../events-board';
import ErrorBoundry from '../error-boundry';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './app.css';

export default class App extends Component {

    _itemsOnPagesSecondRow = 1;
    _itemsOnPagesThirdRow = 4;
    increment = 1;

    state = {
        dataService: new DummyDataService(),
        constants: new Constants(),
        userId: 1,
    }

    render() {
        const { userId, dataService, constants } = this.state;

        return (
            <ErrorBoundry>
                <ServiceProvider value={ dataService }>
                    <BrowserRouter>
                        <ConstantsProvider value={ constants }>
                        <div className="app">
                            <Header 
                                userId={ userId } />
                            <main className="main">
                                <aside className="aside">
                                    <SideMenu />
                                </aside>
                                <Switch>
                                    <Route 
                                        path="/"  
                                        exact>
                                        <div className="content">
                                            <AbsentsInfo title="Отсутствующие сотрудники" count={ 0 }/>

                                            <QueriesBoard 
                                                title="Запросы" 
                                                dataName="queries"
                                                userId={ userId } 
                                                numberOfItemsOnPage={ this._itemsOnPagesSecondRow } inc={ this.increment } />

                                            <CalendarBoard 
                                                title="Календарь" 
                                                dataName="events" 
                                                userId={ userId }
                                                numberOfItemsOnPage={ this._itemsOnPagesSecondRow }/>

                                            <KnowledgeBaseBoard 
                                                title="База знаний" 
                                                dataName="base" 
                                                userId={ userId }
                                                numberOfItemsOnPage={ this._itemsOnPagesSecondRow }/>

                                            <EventsBoard 
                                                title="Водопад событий" 
                                                dataName="events" 
                                                userId={ userId } />

                                            <NotificationsBoard 
                                                title="Уведомления" 
                                                dataName="notifications" 
                                                userId={ userId } />                              
                                        </div> 
                                    </Route> 
                                    <Redirect to="/"/> 
                                </Switch> 
                            </main>
                        </div>
                        </ConstantsProvider>
                    </BrowserRouter>
                </ServiceProvider>
            </ErrorBoundry>
        )
    }
}