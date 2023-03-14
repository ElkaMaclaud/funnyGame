import { Layout } from './shared/Layout';
import React from 'react';
import './main.global.css';
import { Content } from './shared/Content';
import { Header } from './shared/Layout/Header';
import { Provider } from 'react-redux';
import store from './store';
;

function AppComponent() {
    return (
        <Provider store={store}>
            <Layout>
                <Header />
                <Content />
            </Layout>
        </Provider>
    );
}
export const App = () => <AppComponent />;
