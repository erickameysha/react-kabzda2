import Select from '../SelectComponent/Select'


export default {
    title: 'Select',
    component: Select
}


export const UncontrolledSelect = ()=> {
    return <Select />
}
export const ControlledInput = ()=> {
    return <input value={'It-incubator'}/>
}