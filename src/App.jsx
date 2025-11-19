import {Route, Routes} from "react-router";
import DemoFormWithFormik from "./Form/demoFormWithFormik.jsx";
import DemoForm from "./Form/demoForm.jsx";
import FormValidation from "./Form/formValidation.jsx";
import HomePage from "./component/pages/HomePage.jsx";

const App = () => {
  return (
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="form">
            <Route index element={<DemoForm />} />
            <Route path="formFormik" element={<DemoFormWithFormik />} />
            <Route path="formBaiTap" element={<FormValidation />} />
        </Route>
    </Routes>
  );
};

export default App;
