import React from "react";

class NewsDescr extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }
    }

    render() {
        return (
            <div>
                <a href="#" onClick={ (e) => this.handleClick(e) }>
                    { this.state.visible ? 'Скрыть...' : 'Подробнее...' }
                </a>
                { this.state.visible ? <div className={ 'news__full_descr' }> { this.props.descr } </div> : null }
            </div>
        )

    }

    handleClick(e) {
        e.preventDefault();

        this.setState({
            visible: !this.state.visible
        });
    }
}

export default NewsDescr;