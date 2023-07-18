import React, {useState} from 'react';



function LoginPage() {

    const [ data, setData ] = useState();
    const login = async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setData(JSON.stringify(data))
        })
        .catch((err) => {
            console.log(err.message);
        });
    };
  return (
    <div>
      <button onClick={login}>Login</button>
      <p>{data}</p>
    </div>
  );
}

export default LoginPage;
