import React, { Component } from 'react';
import { Layout, List } from 'antd';
import { STORE_ROOT } from '../constants/stores';
import { inject, observer } from 'mobx-react';
import Search from 'antd/lib/input/Search';
import { RootStore } from '../stores';
import { SolutionModel } from '../models';

export interface RootStoreProps {
    rootStore?: RootStore;
}

class SolutionList extends Component<RootStoreProps> {
    private readonly solutionStore = this.props.rootStore!.solutionStore;

    render() {
        return (
            <Layout>
                <Search
                    size="large"
                    placeholder="Ask how-to question"
                    onSearch={this.solutionStore.search}
                    enterButton
                />
                <List
                    itemLayout="horizontal"
                    dataSource={this.solutionStore.foundSolutions}
                    renderItem={(item: SolutionModel) => (
                        <List.Item>
                            <List.Item.Meta title={item.question!.query} />
                        </List.Item>
                    )}
                />
                ,
            </Layout>
        );
    }
}

export default inject(STORE_ROOT)(observer(SolutionList));
