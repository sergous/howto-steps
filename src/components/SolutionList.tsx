import React, { Component } from 'react';
import { Layout, List, Button } from 'antd';
import { STORE_ROOT } from '../constants/stores';
import { inject, observer } from 'mobx-react';
import { RootStore } from '../stores';
import { SolutionModel } from '../models';
import Search from 'antd/lib/input/Search';

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
                {this.solutionStore.foundSolutions.length > 0
                    ? <List
                        itemLayout="horizontal"
                        dataSource={this.solutionStore.foundSolutions}
                        renderItem={(item: SolutionModel) => (
                            <List.Item>
                                <List.Item.Meta title={item.question!.query} />
                            </List.Item>
                        )}
                    />
                    : <Button onClick={() => this.solutionStore.createFromQuery()}>Publish Question</Button>}
            </Layout>
        );
    }
}

export default inject(STORE_ROOT)(observer(SolutionList));
