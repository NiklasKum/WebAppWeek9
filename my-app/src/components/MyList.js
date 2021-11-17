


const MyList = ({header, items, updateItem}) => {



    return (
        <div>
            <h1>{header}</h1>
            <ol>
                {items.map((item) => (
                    <li name="listitem" key={item.id} onClick={() => updateItem(item.id)} style={item.clicked ? {textDecoration: 'line-through'}:{textDecoration: ''}}>
                        {item.text}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default MyList