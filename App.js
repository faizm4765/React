//heading is an object of type h1 with id as props and "Hello world from React!" as children.
const heading = React.createElement('h1', {
    id:"heading"
}, "Hello world from React!")

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)