//import { iteratorSymbol } from 'immer/dist/internal';
import React, {useState} from 'react';
import '../Components/Styles/drop_down_box.css'
var drop_down_selection = ''

function Drop_Down_Box({title, parentBlogTopicCallBack, items=[], multiselect = false}) {
    const [selected_item, set_selected_item] = useState(items[0].value)
    drop_down_selection = items[0].value
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([])
    const toggle = () => setOpen(!open)

    function handleOnClick(item){
        // test at least one element passes a condtion
        if(!selection.some(current => current.id == item.id)){
            if(!multiselect){
                setSelection([item])
            }
            else if(multiselect){
                setSelection([... selection, item])
            }
            else{
                let selectionAfterRemoval = selection
                selectionAfterRemoval = selectionAfterRemoval.filter(
                    current => current.id != item.id
                )
                setSelection([...selectionAfterRemoval])
            }
            set_selected_item(item.value)
            drop_down_selection = item.value
            parentBlogTopicCallBack({
                value: item.value,
            })

        }
    }

    function isItemInSelected(item){
        if(selection.find(current => current.id == item.id)){
            return true
        }
        return false;

    }
    

  return (
    <div  classname='dd-wrapper'>
        <div
        tabIndex={0}
        className='dd-header'
        role='button'
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}>
            <div className='dd-header-title'>
                <p className='dd-header-title--bold'>{selected_item}</p>
            </div>
            <div className='dd-header-action'>
                <p>{open ? 'Close' : 'Open'}</p>
            </div>
        </div>
        {open && (
            <ul className='dd-list'>
                {items.map(item => (
                    <li className='dd-list-item' key={item.id}>
                    <button type='button' onClick={() => handleOnClick(item)}>
                        <span>{item.value}</span>
                        <span>{isItemInSelected(item) && 'Selected'}</span>
                    </button>
                    </li>

                ))}
            </ul>
        )}
    </div>
  );
}

export default Drop_Down_Box;