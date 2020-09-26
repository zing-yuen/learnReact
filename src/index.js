const ce = React.createElement;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Zing' }
    }

    render() {
        const title = ce('h1', {}, 'Learn React');
        const paragraph = ce('p', {}, 'Hands-on practice with Zing')

        return ce(
            'div', {},
            [title, paragraph]
        )
    }
}

ReactDOM.render(
    ce(App, {}, null),
    document.getElementById('app')
);