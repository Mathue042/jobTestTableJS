import react, {useState, useEffect} from 'react'
import TableJS from './table'
import {Button, Input} from 'antd'

const PickQuan = () => {
   
  
const [state, setState] = useState({
    isTableReady: false
})

const updateData = (value) => {
    setState({...state, isTableReady: value })
 }

function html(){
    if(state.isTableReady === true){
    return (
        <div>
        <Input enterButton='Искать' size = 'large' style = {{width: 300}} placeholder="Поиск по таблице"/>
        <Button size = 'large' onClick={()=>{setState({...state, isLarge: true})}}>большая таблица</Button>
        <Button size = 'large' onClick={()=>{setState({...state, isLarge: false})}}>маленькая таблица</Button>
        <Button size = 'large'>добавить строку</Button>
      
        {state.isLarge === undefined ? <></> : <TableJS isLarge ={state.isLarge} isLoading ={true} callback = {updateData}/>}
        </div>
    )
    }else{
        return (
            <div>
            <Button size = 'large' onClick={()=>{setState({...state, isLarge: true})}}>большая таблица</Button>
            <Button size = 'large' onClick={()=>{setState({...state, isLarge: false})}}>маленькая таблица</Button>
            {state.isLarge === undefined ? <></> : <TableJS isLarge ={state.isLarge} isLoading ={true} callback = {updateData}/>}
            </div>
        )
    }
}



    return(
    <header style = {{textAlign: 'center'}}>
        {html()}
    </header>
    )
}

export default PickQuan