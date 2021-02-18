import react, {useState, useEffect} from 'react'
import { Table, Spin} from 'antd'
import getTableData from './../helpers/getDataTalbe'

const TableJS = (props) => {

    const [state, setState] = useState({  
        isLoading: true,
        dataSource: []
       })
    const columns = [
        {
          title: 'id',
          dataIndex: 'id',
        },
        {
          title: 'firstName',
          dataIndex: 'firstName',
        },
        {
          title: 'lastName',
          dataIndex: 'lastName',
        },
        {
            title: 'email',
            dataIndex: 'email',
        },
        {
            title: 'phone',
            dataIndex: 'phone',
        },
        {
            title: 'streetAddress',
            dataIndex: 'streetAddress',
        },
        {
            title: 'city',
            dataIndex: 'city',
        },
        {
            title: 'state',
            dataIndex: 'State',
        },
        {
            title: 'zip',
            dataIndex: 'zip',
        },
        {
            title: 'description',
            dataIndex: 'description',
        },
      ]
    var dataSource = [{
        id:'kek',
        firstName : 'kek',
        lastName : 'kek',
        State : 'kek',
        email : 'kek',
        phone : 'kek',
        city : 'kek',
        streetAddress : 'kek',
        zip : 'kek',
        description : 'kek',
    }]
    
    useEffect(async () => {
        setState({...state, isLoading: true})
           const data = await getTableData(props.isLarge)
            data.data.forEach(element => {
               dataSource.push({
                   id: element.id,
                   firstName: element.firstName,
                   lastName: element.lastName,
                   State: element.address.state,
                   email: element.email,
                   phone: element.phone,
                   city: element.address.city,
                   streetAddress: element.address.streetAddress,
                   zip: element.address.zip,
                   description: element.description
               })
           });      
           console.log(dataSource)
           console.log(state)
           setState((prevState)=>{
               return {...prevState, isLoading: false, dataSource: dataSource}
           })   
           console.log(state);
    }, [props.isLarge])

    
    
    return(
        <div>
           {state.isLoading === true ? <Spin/> : state.dataSource.length > 10? <Table columns = {columns} dataSource = {dataSource}/> : <></>}
        </div>
    )
}

export default TableJS