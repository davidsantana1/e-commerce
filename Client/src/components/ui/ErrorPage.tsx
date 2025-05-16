import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import Paragraph from "./Paragraph";
import Btn from "./Btn";
import { IoArrowBack } from "react-icons/io5";
import Logo from "./Logo";

function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="bg-brand-50 mx-auto flex h-screen flex-col items-center justify-center gap-8 p-8 text-center">
        <Logo
          className="group mb-4 text-red-500 hover:text-red-600 [&>h2]:text-3xl [&>h2]:text-red-500 [&>h2]:group-hover:text-red-600"
          logoSize={35}
        />
        <div>
          <h1 className="text-3xl font-bold text-red-500">
            Error {error.status}
          </h1>
          <Paragraph margin="md" variant="dark">
            {error.statusText}
          </Paragraph>
        </div>
        <Btn variant="secondary">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <IoArrowBack />
            Back to the Homepage
          </Link>
        </Btn>
      </div>
    );
  }

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-red-600">Unexpected Error</h1>
      <p>{(error as Error).message}</p>
    </div>
  );
}

export default ErrorPage;
