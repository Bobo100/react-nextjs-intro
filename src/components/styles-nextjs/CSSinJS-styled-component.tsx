import { useState } from 'react';
import styled from 'styled-components';

interface ButtonProps {
    $bgColor: string;
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ $bgColor }) => $bgColor};
`;

function CssinJs3() {
    const [bgColor, setBgColor] = useState('red');

    function handleClick() {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setBgColor(randomColor);
    }

    return (
        <Button onClick={handleClick} $bgColor={bgColor}>
            Click me
        </Button>
    );
}

export default CssinJs3;