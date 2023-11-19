import React, {useState} from 'react';
import s from './SelectDim.module.css'

type ItemType ={
    title: string
    value: string

}


type SelectPropsType = {
    value?: any
    onChange: (value: any)=> void
    item: ItemType[]
}

const SelectDim = (props: SelectPropsType) => {
    const [active, setActive]= useState(false
    )

    const showItems = ()=> {
        setActive(!active)
    }
    const itemClicked = (value: any) => {
      props.onChange(value)
    }
const selectedItem = props.item.find(i=> i.value === props.value)
    return (
        <div  className={s.select  }>
            <span className={s.main}  onClick={showItems}>{selectedItem && selectedItem.title}</span>
            {active &&
                <div className={s.items}>

                    {props.item.map(el =>
                        <div key={el.value}
                             onClick={()=> props.onChange(el.value)}>{el.title}</div>)}
                </div>
            }
        </div>
    );
};

export default SelectDim;