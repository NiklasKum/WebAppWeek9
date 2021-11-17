import MyList from "./MyList"
import {useState} from "react"

function MyContainer() {
    const onSubmit = (e) => {
      e.preventDefault();
      if(text !== ""){
        addItem({id: items.length+1, text: text, clicked: false});
        setText("");
      }
    }

    const addItem = (item) => {
      const id = items.length+1;
      const newItem = {id, ...item}
      setItems([...items, newItem])
    }

    const updateItem = (id) => {
      //Update item when clicked
      var index = items.findIndex(x=> x.id === id);

      let listitem = items[index];
      listitem.clicked = !listitem.clicked;
      setItems([...items.slice(0,index),listitem,...items.slice(index+1)])
    }

    const headerText = "babababababa";
    const [text, setText] = useState('');
    const [items, setItems] = useState([{
        "id": 1,
        "text": "This is really poggers",
        "clicked": false
      },
      {
        "id": 2,
        "text": "Im pogchamping BatChest",
        "clicked": false
      },
      {
        "id": 3,
        "text": "The missile knows where it is at all times. It knows this because it knows where it isn't. By subtracting where it is from where it isn't, or where it isn't from where it is (whichever is greater), it obtains a difference, or deviation. The guidance subsystem uses deviations to generate corrective commands to drive the missile from a position where it is to a position where it isn't, and arriving at a position where it wasn't, it now is. Consequently, the position where it is, is now the position that it wasn't, and it follows that the position that it was, is now the position that it isn't.",
        "clicked": false
      }
      ])
    return (
        <div>
            <MyList header={headerText} items={items} updateItem={updateItem}/>
            <form onSubmit={onSubmit}>
              <textarea placeholder="Type text here..." onChange={(e) => setText(e.target.value)} value={text} />
              <input type="submit" value="Add text"></input>
            </form>
            
        </div>
    )
}

export default MyContainer