import Greeting from "./Greeting"

const { render } = require("@testing-library/react")

test('check the greeting component Render',()=>{
    const {getByText}=render(<Greeting name={'John!'}/>);
    const greetingEle=getByText(/Hello, John!/i)
    expect(greetingEle).toBeInTheDocument()
})