/*
<div id = "parent">
    <div id="child">
        <h1>First nested react element</h1>
        <h1>Second nested react element</h1>
    </div>
</div>
*/

const parent = React.createElement('div',
    {id:"parent"},
    React.createElement('div',
        {id:"child"},

        //passing sibling elements in array format
        [
            React.createElement('h1',{},"First nested react element"),
            React.createElement('h1',{id:"second-child"},"I am second nested element")
        ]
    )
)

//heading is an object of type h1 with id as props and "Hello world from React!" as children.
const heading = React.createElement('h1', {
    id:"heading"
}, "Hello world from React!")

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)