import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
// import { GET_USERS, INSERT_USER, DELETE_USER, UPDATE_USER } from '../query/crudQuery';
import { gql } from 'apollo-boost';

interface DataSendProps {
}

const DataSend: React.FunctionComponent<DataSendProps> = () => {

    /**
     * State
     */
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const GET_HELLO = gql`
    query hello($name: String!) {
      hello(name: $name)
    }
  `;
    /**
     * useEffect
     */
    useEffect(() => {
        console.log(data)
    }, [])

    /**
     * Query
     */
    const { data, error, loading } = useQuery(GET_HELLO, {
        variables: {
            name: "Jack"
        }
    });
    

    /**
     * Mutation
     */
    // const insertUser = useMutation(INSERT_USER, {
    //     variables: {
    //         id,
    //         name
    //     }
    // });
    // const updateUser = useMutation(UPDATE_USER, {
    //     variables: {
    //         id,
    //         name
    //     }
    // });
    // const deleteUser = useMutation(DELETE_USER, {
    //     variables: {
    //         id
    //     }
    // });



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
                        Insert Mutation Name: <input type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
                    </div>
                    <button type="button" onClick={handleInsert}>Insert</button>                
                </div>
                <div style={{border: "1px solid black", margin: 10, padding: 10, maxWidth: 400}}>
                    <div>
                        Update Mutation Id: <input type="number" value={id} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setId(parseInt(e.target.value))}/>
                    </div>
                    <div>
                        Update Mutation Name: <input type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
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