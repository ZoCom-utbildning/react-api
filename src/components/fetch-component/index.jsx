import { useEffect, useState } from "react";

export function FetchComponent () {

    const token = '<GITHUB_TOKEN_HERE>';
    const URL = 'https://api.github.com/users/zocom-johan-kivi/repos';

    const [data, setData ] = useState([]);


    useEffect(() => {
        // Fetch data
        fetch(URL, {
           headers: {
            'User-Agent' : "Appelipapp",
            Authorization: `token ${token}`,
           } 
        })
        .then(resp => resp.json())
        .then(data => setData(data))        
    },[])


    return (
        <section className="data-section">
            <h2>Data</h2>
            {data.map(repo => 
            <article key={repo.id}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
            </article>
        )}
        </section>
    )
}