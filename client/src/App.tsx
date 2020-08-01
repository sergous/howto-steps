import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import { STORE_ROOT } from './constants/stores';
import { inject, observer } from 'mobx-react';
import { RootStore } from './stores';
import SolutionList from './components/SolutionList';

export interface RootStoreProps {
    rootStore?: RootStore;
}

class App extends Component<RootStoreProps> {
    render() {
        return (
            <Layout>
                <Layout.Content>
                    <SolutionList />
                </Layout.Content>
            </Layout>
        );
    }
}

export default inject(STORE_ROOT)(observer(App));
