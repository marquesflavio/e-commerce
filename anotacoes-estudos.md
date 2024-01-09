# React.FC<>
    React.FC é um tipo que significa "Function Component" no React. É um tipo genérico que permite que você especifique a props que o componente irá aceitar na função

    Exemplo: 

    interface Props {
    name: string;
    age: number;
    onClick: () => void;
    }

    const MyComponent: React.FC<Props> = ({ 
        name, 
        age, 
        onClick
    }) => {
        return (
            <div>
                <h1>{name}</h1>
                <p>Age: {age}</p>
                <button onClick={onClick}>Click me</button>
            </div>
        );
    };