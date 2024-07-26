import { Button } from "antd";
import TableComponent from "../../core/shared/table/table.component";
import { useWorkersQuery } from "./actions/workers.query";
import { Link } from "react-router-dom";

const addNewWorkerStyles = {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '80%',
    margin: '30px auto'
}

const WorkersComponent = () => {
    const { data, isLoading } = useWorkersQuery();

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Workers page</h1>

            <div style={addNewWorkerStyles}>
                <Button type="primary">
                    <Link to="/add">Add new worker</Link>
                </Button>
            </div>

            {isLoading && <p>Loading...</p>}
            <div style={{ width: '80%', margin: '0 auto' }}>
                <TableComponent tableData={data || []} />
            </div>
        </div>
    )
}


export default WorkersComponent;