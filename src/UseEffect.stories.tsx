import {useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect demo '
}
export const Example1 = () => {
    console.log('example1')
    const [state, setState] = useState(0)

    useEffect(()=> {
        console.log('useEffect')
        document.title = 'rerrerer'
    },[])

    return <>
        <button onClick={() => setState(state + 1)}>+</button>

      hi  {state}
    </>
}