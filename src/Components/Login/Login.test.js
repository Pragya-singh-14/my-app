import React from 'react';
import {  screen } from '@testing-library/react';
import {render} from '@testing-library/react'
import Login from './Login'

describe("Login Component", () => {
    it("renders username", () => {
        render(<Login />);

        const firstName = screen.getByAltText('FirstName');
        expect(firstName).toBeInTheDocument();
    });

    //test 2
});