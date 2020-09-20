import React, { Component } from 'react';
import Header from '../header';
import { ServiceProvider } from '../service-context';
import { ConstantsProvider } from '../constants-context';
import DummyDataService from '../../services/dummy-data-service';
import Constants from '../constants/constants';
import SideMenu from '../side-menu';
import AbsentsInfo from '../absents-info';
import QueriesBoard from '../queries-board';
import EventsBoard from '../events-board';
import KnowledgeBaseBoard from '../knowledge-base-board';

import './app.css';

export default class App extends Component {

    _itemsOnPagesSecondRow = 1;
    _itemsOnPagesThirdRow = 2;
    increment = 1;

    state = {
        dataService: new DummyDataService(),
        constants: new Constants(),
        userId: 1,
    }

    render() {
        const { userId, dataService, constants } = this.state;

        return (
            <ServiceProvider value={ dataService }>
                <ConstantsProvider value={ constants }>
                <div className="app">
                    <Header 
                        userId={ userId } />

                    <main className="main">
                        <aside className="aside">
                            <SideMenu />
                        </aside>
                        <div className="content">
                            <AbsentsInfo title="Отсутствующие сотрудники" count={ 0 }/>

                            <QueriesBoard 
                                title="Запросы" 
                                dataName="queries"
                                userId={ userId } 
                                numberOfItemsOnPage={ this._itemsOnPagesSecondRow } inc={ this.increment } />

                            <EventsBoard 
                                title="Календарь" 
                                dataName="events" 
                                userId={ userId }
                                numberOfItemsOnPage={ this._itemsOnPagesSecondRow }/>

                            <KnowledgeBaseBoard 
                                title="База знаний" 
                                dataName="base" 
                                userId={ userId }
                                numberOfItemsOnPage={ this._itemsOnPagesSecondRow }/>
                            
                            {/* <SliderList title="База знаний"  event="base" count={ 0 } /> */}
                        </div>    
                    </main>
                </div>
                </ConstantsProvider>
            </ServiceProvider>
        )
    }
}