
import { describe, expect, test } from "vitest";
import {screen, render} from '@testing-library/react';
import { Navbar } from "./Navbar";
import React from "react";
describe('<Navbar />', () => {

    test('should render', () => {
        render(<Navbar />);
        const navbar = screen.getByTestId('navbar');
        expect(navbar).exist;
    });

    test('should have navbar class', () => {
        render(<Navbar />);
        const navbar = screen.getByTestId('navbar');
        expect(navbar.className.includes('navbar')).true;
    });

    test('should have light and dark icon', () => {
        render(<Navbar />);
        const darkModeButton = screen.getByTestId('darkModeButton');
        expect(darkModeButton).exist;
        
    });
});