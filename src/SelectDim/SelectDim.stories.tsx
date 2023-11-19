import Select from "../SelectComponent/Select";
import {action} from '@storybook/addon-actions'
import SelectDim from "./SelectDim";
import s from './SelectDim.module.css'
export default {
    title: 'SelectDim',
    // component: SelectComponent
}


export  const WithValue = () => (<SelectDim
    onChange={action('Value Changed')}
value={"1"}
    item={[
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Krakow'},
        {value: '3', title: 'Kiev'}
    ]}
/>)
export  const WithoutValue = () => (<SelectDim
    onChange={action('Value Changed')}

    item={[
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Krakow'},
        {value: '3', title: 'Kiev'}
    ]}
/>)