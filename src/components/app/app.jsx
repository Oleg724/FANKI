import React, { Component } from 'react';
import Header from '../header';
import { ServiceProvider } from '../service-context';
import { ConstantsProvider } from '../constants-context';
import DummyDataService from '../../services/dummy-data-service';
import Constants from '../constants/constants';
import SideMenu from '../side-menu';
import AbsentsInfo from '../absents-info';
import SliderList from '../slider-list';

import './app.css';

export default class App extends Component {

    state = {
        dataService: new DummyDataService(),
        constants: new Constants(),
        userId: 1,
    }

    selectedId = (id) => {
        this.setState({ userId: id });
    }

    render() {
        const { userId, dataService, constants } = this.state;

        return (
            <ServiceProvider value={ dataService }>
                <ConstantsProvider value={ constants }>
                <div className="app">
                    <Header 
                        userId={ userId } 
                        selectedId={ this.selectedId }/>

                    <main className="main">
                        <aside className="aside">
                            <SideMenu />
                        </aside>
                        <div className="content">
                            <AbsentsInfo title="Отсутствующие сотрудники" count={ 0 }/>
                            <SliderList title="Запросы" event="queries" />
                            <SliderList title="Ближайшие события" event="events" count={ 2 } userId={ userId } />
                            <SliderList title="База знаний"  event="base" count={ 0 } />
                        </div>    
                    </main>
                </div>
                </ConstantsProvider>
            </ServiceProvider>
        )
    }
}