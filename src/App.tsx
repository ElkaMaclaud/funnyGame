import { Layout } from './shared/Layout';
import React from 'react';
import './main.global.css';
import { Content } from './shared/Content';
import { Header } from './shared/Layout/Header';
import { UserGameProvader } from './shared/context/userGame';

function AppComponent() {
    return (
        <UserGameProvader>
            <Layout>
                <Header />
                <Content />
            </Layout>
        </UserGameProvader>
    );
}
export const App = () => <AppComponent />;
