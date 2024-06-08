import React from "react";
import { Outlet, useLocation } from "react-router-dom";
const Layout = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      {/* cai nay de lam sidebar, header, footer cho web cua be, tat ca th con deu co */}
      {/* bay gio muon login kh co thi co 1 cai la useLocation */}
      {/* thi trong cai nao ma khac cai sidebar hay header hay footer thi lamf kieu nay */}
      {/* co the dung toan tu? 3 ngoi^ */}
      {/*  */}
      {/* {location.pathname != "/" && <div>asfansfijanfijsnidasndiadasdjnaij</div>} */}
      <Outlet />
    </>
  );
};

export default Layout;
