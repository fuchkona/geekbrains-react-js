import React from "react";

import News from '../news/news';

import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.inputNewsTitle;
        this.inputNewsDescription;

        this.state = {
            news: [
                {
                    title: 'Facebook предлагает пользователям установить на телефон бесплатный VPN. Лучше этого не делать',
                    descr: 'В мобильном клиенте Facebook появилась кнопка «Protect» («Защитить»), которая ведет пользователей напрямую на страницу приложения Onavo Protect в App Store.'
                },
                {
                    title: 'Сноубордисты — самые необычные звезды Олимпиады',
                    descr: 'Они просыпают старт, теряют куртки, твитят между заездами — и выполняют супертрюки'
                },
                {
                    title: 'Белый дом определился, что делать с МКС. Станцию отдадут бизнесменам',
                    descr: 'Международная космическая станция на низкой земной орбите используется с 1998 года. Станцию строили всем миром: кроме США участие в проекте принимали Россия, Канада, Япония, а также Европейское космическое агентство.'
                }
            ]
        }

    }

    render() {
        return (
            <div className={'container'}>
                <h2>Привет я могу отобразить новости!</h2>
                <hr/>
                <div className={'add-news'}>
                    <h3>Добавить новость</h3>
                    <p className={'text-title'}>Заголовок</p>
                    <input type="text" ref={ (input) => {
                        this.inputNewsTitle = input;
                    } }/>
                    <p className={'text-title'}>Описание</p>
                    <textarea ref={ (input) => {
                        this.inputNewsDescription = input;
                    } }/><br/>
                    <button className={'btn'} onClick={ () => this.handleClick() }>
                        Добавить новость
                    </button>
                </div>
                <News items={ this.state.news } onHandleClick={ this.handleNewsClick }/>
            </div>
        );
    }

    handleClick() {
        let {news} = this.state;

        news.push({
            title: this.inputNewsTitle.value,
            descr: this.inputNewsDescription.value
        });

        this.inputNewsTitle.value = '';
        this.inputNewsDescription.value = '';
        this.inputNewsTitle.focus();


        this.setState(news);
    }

    handleNewsClick(params) {
        console.log('####: params: ', params);
    }
}

export default App;