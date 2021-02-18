import react, {useState, useEffect} from 'react'
import TableJS from './table'
import {Button} from 'antd'

const PickQuan = () => {
   
const [state, setState] = useState({})
    return(
    <div style = {{textAlign: 'center'}}>
    <Button size = 'large' onClick={()=>{setState({...state, isLarge: true})}}>большая таблица</Button>
    <Button size = 'large' onClick={()=>{setState({...state, isLarge: false})}}>маленькая таблица</Button>
    {state.isLarge === undefined ? <></> : <TableJS isLarge ={state.isLarge} isLoading ={true}/>}
    </div>
    )
}

export default PickQuan