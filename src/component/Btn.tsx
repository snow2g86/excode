const Btn = (
    {
        name,
        action
    } : {
        name: string,
        action: () => void
    }) => {

        const css= {
            border: '1px solid #000000',
            padding: '5px 10px ',
            background:'#eeeeee',
            color: '#000000',
            marginTop: '10px',
            borderRadius: '5px'
        }
        
    return (
        <button
            style={css}
            onClick={action}
        >
            {name}
        </button>
    )
}

export default Btn