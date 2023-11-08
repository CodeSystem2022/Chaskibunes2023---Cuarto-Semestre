  import { Outlet } from "react-router-dom";//importar bibliotecas

  const LayoutContainerForm = () => {
    return (
      <div className="w-96 mx-auto mt-10">
        <Outlet />
      </div>
    );
  };

  export default LayoutContainerForm;
