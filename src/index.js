const title = React.createElement('h1', {}, 'Learn React');

const paragraph = React.createElement('p', {}, 'Hands-on practice with Zing')

const container = React.createElement('div', {}, [paragraph, title]);

ReactDOM.render(
    container,
    document.getElementById('app')
);