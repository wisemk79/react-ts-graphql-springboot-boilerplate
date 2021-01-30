import React, { useState } from "react";

interface DataSendProps {
}

const DataSend: React.FunctionComponent<DataSendProps> = () => {

    /**
     * State
     */
    const [id, setId] = useState(0);
    const [data, setData] = useState("");

    /**
     * Methods
     */
    const handleInsert = (e: React.FormEvent) => {
        e.preventDefault();

    }
    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();

    }
    const handleDelete = (e: React.FormEvent) => {
        e.preventDefault();

    }
    return(
        <>
            <div>
                <span>Get Query: {`${"none"}`}</span>
            </div>
                <div style={{border: "1px solid black", margin: 10, padding: 10, maxWidth: 400}}>
                    <div>
                        Insert Mutation Id: <input type="number" value={id} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setId(parseInt(e.target.value))}/>
                    </div>
                    <div>
                        Insert Mutation Data: <input type="text" value={data} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData(e.target.value)}/>
                    </div>
                    <button type="button" onClick={handleInsert}>Insert</button>                
                </div>
                <div style={{border: "1px solid black", margin: 10, padding: 10, maxWidth: 400}}>
                    <div>
                        Update Mutation Id: <input type="number" value={id} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setId(parseInt(e.target.value))}/>
                    </div>
                    <div>
                        Update Mutation Data: <input type="text" value={data} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData(e.target.value)}/>
                    </div>
                    <button type="button" onClick={handleUpdate}>Update</button>                
                </div>
                <div style={{border: "1px solid black", margin: 10, padding: 10, maxWidth: 400}}>
                    <div>
                        Delete Mutation Id: <input type="number" value={id} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setId(parseInt(e.target.value))}/>
                    </div>
                    <button type="button" onClick={handleDelete}>Delete</button>                
                </div>
        </>
    )
}

export default DataSend;