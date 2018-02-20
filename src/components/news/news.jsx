import React from "react";

import './news.css';
import NewsDescr from "../newsDescr/newsDescr";

class News extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }
    }


    render() {
        const { items } = this.props;

        return items.length === 0
            ? <div>У вас нет новостей!</div>
            : this.renderContent()
    }

    renderContent() {
        return (
            <div>
                { this.renderNews() }
                <p>
                    У вас есть { this.props.items.length } новости!
                </p>
            </div>
        );
    }

    renderNews() {
        return this.props.items.map((item, index) => {
            return (
                <div className={ 'news' } key={ index }>
                    <h2 className={ 'news__title' }>
                        { item.title }
                    </h2>
                    <hr/>
                    <div className={ 'news__descr' }>
                        { item.descr.substring(0, 60) + '...' }
                    </div>
                    <NewsDescr descr={ item.descr } />
                </div>
            );
        });
    }

}

export default News;