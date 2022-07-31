import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_CONTINENTS, QUERY_COUNTRIES } from "../utils/queries";
import Continents from "../components/Continents";
import Auth from "../utils/auth";

const Home = () => {
    const { loading, data } = useQuery(QUERY_CONTINENTS, QUERY_COUNTRIES);

    const countries = data?.countries || [];
    const loggedIn = Auth.loggedIn();

    return (
        <main>
          <div className='flex-row justify-space-between'>
            <div className='col-12 mb-3'>{Continents}</div>
          </div>
        </main>
      );
    };

export default Home;