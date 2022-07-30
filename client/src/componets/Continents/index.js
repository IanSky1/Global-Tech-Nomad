import React from "react";
import { QUERY_COUNTRIES } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const Continents  = () => {
    console.log(QUERY_COUNTRIES);
    return (
        <div>
            <h2>Continents</h2>
        </div>
    )
}

export default Continents