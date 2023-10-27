import {Button} from "./Button";
import Select from "../SelectComponent/Select";


export default {
    title: 'Input',
    // component: SelectComponent
}


export const UncontrolledInput = ()=> {
    return <input/>
}
export const ControlledInput = ()=> {
    return <input value={'It-incubator'}/>
}