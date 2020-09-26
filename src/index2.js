// assign a shorthand
const ce = React.createElement;

const list =
    ce('div', {},
        ce('h1', {}, 'My favorite ice cream flavors'),
        ce('ul', {},
            [
                ce('li', { draggable: true }, 'Chocolate'),
                ce('li', { style: { color: "blue" } }, 'Vanilla'),
                ce('li', { className: 'yellow' }, 'Banana')
            ]
        )
    );

ReactDOM.render(
    list,
    document.getElementById('app')
);