import React, {useState} from 'react';
import s from './Select.module.css'
import {bool} from "prop-types";
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;

interface Props {
    comp: React.ElementType; // 👈️ type it as React.ElementType
}

const Select= () => {
    const [title, setTitle] = useState('d')
    const [isClick, setClick] = useState<boolean>(false)

    const data = [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'js'},
        {id: 1, title: 'css'},
    ]
    const onClickHandler = () => {
        if (isClick) {
            setClick(false)
        }else {
            setClick(true)
        }
    }
    const setTitleHander = (title: string) => {
     setTitle(title)
    }


    return (
        <div>
            <div onClick={onClickHandler} className={s.selectInput}>
                {
                    !title.length?
                        <>Выберете отрасль</>:
                        <span className={s.selectInputTitle}>{title}</span>
                }
            </div>
            {isClick?  <ul style={{
                height:'4px',
                border: '1px solid #D5D6DC', padding: '4px 6px', borderRadius: '8px',
                background: '#FFF'
            }}>
                { data.map((el: any) => {
                    const setItemHandler = (title:string) => {
                        setTitleHander(title)
                    }
                    return <li onClick={()=>setTitleHander(el.title)} style={{borderRadius: '8px', padding: '8px', color: '#232134'}}
                               key={el.id}>{el.title}</li>
                })}
            </ul>
           :'' }


        </div>
    );
};

export default Select;