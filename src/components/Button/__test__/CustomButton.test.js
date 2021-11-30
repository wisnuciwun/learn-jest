import React from 'react'
import ReactDOM from 'react-dom'
import CustomButton from '../CustomButton'
import { render, cleanup, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' //new version because jest-dom is not used again
import renderer from 'react-test-renderer'

afterEach(cleanup)

it("renders element without error", () => {
    const div = document.createElement('div')
    ReactDOM.render(<CustomButton />, div)
})

it("render button without error", () => {
    const {getByTestId} = render(<CustomButton message="hay" />)
    getByTestId("button")
    expect(getByTestId('button').textContent).toBe('hay')
})

it("render button without error", () => {
    const {getByTestId} = render(<CustomButton message="savee" />)
    getByTestId("button")
    expect(getByTestId('button').textContent).toBe('savee')
})

test("render button without error", () => { // test or it block
    render(<CustomButton message="whoa" />)
    const linkElement = screen.getByText(/whoa/i)
    expect(linkElement).toBeInTheDocument()
})

it("matches snapshot", () => {
    const tree = renderer.create(<CustomButton message="okeh" />).toJSON()
    expect(tree).toMatchSnapshot()
})