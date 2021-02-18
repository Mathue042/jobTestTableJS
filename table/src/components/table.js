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
          defaultSortOrder: 'ascend',
    sorter: (a, b) => a.id - b.id,
    sortDirections: ['descend', 'ascend']
        },
        {
          title: 'firstName',
          dataIndex: 'firstName',
          onFilter: (value, record) => record.firstName.indexOf(value) === 0,
          sorter: (a, b) => a.firstName.length - b.firstName.length,
          sortDirections: ['descend', 'ascend']
        },
        {
          title: 'lastName',
          dataIndex: 'lastName',
          onFilter: (value, record) => record.lastName.indexOf(value) === 0,
          sorter: (a, b) => a.lastName.length - b.lastName.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'email',
            dataIndex: 'email',
            onFilter: (value, record) => record.email.indexOf(value) === 0,
          sorter: (a, b) => a.email.length - b.email.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'phone',
            dataIndex: 'phone',
            sorter: (a, b) => a.id - b.id,
            sortDirections: ['descend', 'ascend']
        },
        {
            title: 'streetAddress',
            dataIndex: 'streetAddress',
            onFilter: (value, record) => record.streetAddress.indexOf(value) === 0,
          sorter: (a, b) => a.streetAddress.length - b.streetAddress.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'city',
            dataIndex: 'city',
            onFilter: (value, record) => record.city.indexOf(value) === 0,
          sorter: (a, b) => a.city.length - b.city.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'state',
            dataIndex: 'State',
            onFilter: (value, record) => record.State.indexOf(value) === 0,
          sorter: (a, b) => a.State.length - b.State.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'zip',
            dataIndex: 'zip',
            sorter: (a, b) => a.id - b.id,
    sortDirections: ['descend', 'ascend']
        },
        {
            title: 'description',
            dataIndex: 'description',
            onFilter: (value, record) => record.description.indexOf(value) === 0,
          sorter: (a, b) => a.description.length - b.description.length,
          sortDirections: ['descend', 'ascend'],
        },
      ]
    var dataSource = []
    useEffect(async () => {
        setState({...state, isLoading: true})
           const data = await getTableData(props.isLarge)
           console.log(data);
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
           })
           setState((prevState)=>{
               return {...prevState, isLoading: false, dataSource: dataSource}
           })   
           props.callback(true)
    }, [props.isLarge])

    return(
        <div>
           {state.isLoading ==  true ? <Spin/> : <Table columns = {columns} dataSource = {state.dataSource}/>}
        </div>
    )
}

export default TableJS