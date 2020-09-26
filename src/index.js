const ce = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return `${this.props.name} liked this.`;
        }

        return ce(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Zing' }
    }

    render() {
        const title = ce('h1', {}, 'Learn React');
        const paragraph = ce('p', {}, 'Hands-on practice with Zing')

        const likeButton = ce(LikeButton, {name: this.state.name}, null)

        return ce(
            'div', {},
            [title, paragraph, likeButton]
        )
    }
}

ReactDOM.render(
    ce(App, {}, null),
    document.getElementById('app')
);