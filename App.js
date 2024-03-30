/*
<div id = "parent">
    <div id="child">
        <h1>First nested react element</h1>
        <h1>Second nested react element</h1>
    </div>
    <div id="child2">
        <h1> I am h1 tag</h1>
        <h2> I am h2 tag</h2>
    </div>
</div>
*/

const parent = React.createElement('div',
    {id:"parent"},
    [
        React.createElement('div', {id:"child"},

        //passing sibling elements in array format
        [
            React.createElement('h1',{},"First nested react element"),
            React.createElement('h2',{},"I am second nested element")
        ]
    ),
        React.createElement('div', {id:'child2'},
        [
            React.createElement('h1',{}, 'I am h1 tag'),
            React.createElement('h2',{}, 'I am h2 tag')
        ])
    ]
)

//heading is an object of type h1 with id as props and "Hello world from React!" as children.
const heading = React.createElement('h1', { 
        id:"heading"
    }, 
    "Hello world from React!"
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)