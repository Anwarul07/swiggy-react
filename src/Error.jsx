import { useRouteError } from "react-router-dom";


export const ErrorPage = () => {
    const err= useRouteError();
    console.log(err)

  return (
    <>
      <h1>Oops !</h1>
      <h2>Somewthing went wrong</h2>
      <h2>{err.status + ":" + err.statusText}</h2>
    </>
  );
};
