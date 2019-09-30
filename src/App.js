import React, { Fragment, useState } from "react";

const App = () => {
    const [status,setStatus] = useState(false)
  return (
    <Fragment>
      <div>
        <h1 className="my-class">{status ? 'Logout': 'Login'}</h1>
        <div className="my-second-class" />
        <button type="button" onClick={() => setStatus(!status)}>Click</button>
      </div>
    </Fragment>
  );
};

export default App;
