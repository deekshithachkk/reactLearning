import { render,screen } from "@testing-library/react"
import Counter from "./Counter"
import userEvent from "@testing-library/user-event";
describe("Counter App test",()=>
{
test('Increment and Decremnt Button test',()=>{
    render(<Counter />)
    const IncEle=screen.getByText(/Increment/i);
    const DecEle=screen.getByText(/decrement/i);
    const TextEle=screen.getByTestId('counter');
    expect(TextEle).toHaveTextContent('0');
    userEvent.click(IncEle)
    expect(TextEle).toHaveTextContent("1");
    userEvent.click(DecEle)
    userEvent.click(DecEle)
    expect(DecEle).toBeDisabled();
    userEvent.click(IncEle)
    expect(DecEle).toBeEnabled()


})
test('Add item to the list',()=>{
    render(<Counter />)
    const itemTitle=screen.getByTestId('item-title');
    expect(itemTitle).toHaveTextContent('Add Item to the List');
    const placeHolder=screen.getByLabelText('Enter the Item');
    expect(placeHolder).toHaveValue("")
})
})