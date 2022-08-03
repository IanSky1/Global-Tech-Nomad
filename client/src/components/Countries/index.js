import React, { useEffect } from "react";
import { QUERY_COUNTRIES } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const Continents = () => {
    const { data } = useQuery(QUERY_COUNTRIES)
    useEffect(() => {
        if (data){
            console.log(data)
        }
    },[data])
    console.log(QUERY_COUNTRIES.loc.source);
    return (
        <div>
            <h2>Continents</h2>
        </div>
    )
}

export default Continents;