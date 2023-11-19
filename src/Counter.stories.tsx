import {useMemo, useState} from "react";

export default {
    title: 'useState demo '
}
 function generateData() {
     console.log('generateData')
     return 302324352354
 }
export const Example1 = () => {
    console.log('example1')
    const initValue = useMemo(generateData, [])
    const [state, setState] = useState(generateData)

    return <>
        <button onClick={() => setState(state + 1)}>+</button>

        {state}
    </>
}