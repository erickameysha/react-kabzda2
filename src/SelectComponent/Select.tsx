import React, {useState} from 'react';
import s from 'src/Select/Select.module.css'
import {bool} from "prop-types";

const Select = () => {
    const [title, setTitle] = useState('')
    const [isClick, setClick] = useState<boolean>(true)

    const data = [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'js'},
        {id: 1, title: 'css'},
    ]

    const optionType = (data: any) => {

        return data.map((el: any) => {
            return <li  style = {{borderRadius: '8px', padding:'8px', color:'#232134'}} key={el.id}>{el.title}</li>
        })
    }


    return (
        <div>
            <div  className={s.selectInput}>
                select
            </div>
            <ul  style={{border: '1px solid #D5D6DC', padding: '4px 6px' ,borderRadius: '8px',
                background: '#FFF'}} >
                {isClick ?optionType(data): ''}
            </ul>


        </div>
    );
};

export default Select;