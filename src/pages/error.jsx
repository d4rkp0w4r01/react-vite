import { Link, useRouteError } from "react-router-dom";
import { Button, Result, message } from "antd";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Result
      status="403"
      title="403"
      subTitle={error.statusText || error.message}
      extra={
        <Button type="primary">
          <Link to="/">Back Home</Link>
        </Button>
      }
    />
  );
}
