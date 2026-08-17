interface QueryComponentProps {
    onQueryChange: (query: string) => void;
}

function QueryComponent({ onQueryChange }: QueryComponentProps) {
    return (
        <input
            onChange={(e) => onQueryChange(e.target.value)}
        />
    );
}

export default QueryComponent;