function customRender(reactElement, container){
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)*/

    //we are writing here same above code but with loop

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue ;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}



const reactElement = {
    type: 'a', //here 'a' is a tag like 'h1' and 'p'(it shows element type )
    props: {
        href :'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit google'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)