import {Route, Routes} from "react-router";
import DemoFormWithFormik from "./Form/demoFormWithFormik.jsx";
import DemoForm from "./Form/demoForm.jsx";
import FormValidation from "./Form/formValidation.jsx";
import HomeTemplate from "./template/HomeTemplate.jsx";
import FogotPass from "./component/DemoUseNavigate/FogotPass.jsx";
import DemoUseNavigate from "./component/DemoUseNavigate/DemoUseNavigate.jsx";
import Home from "./Pages/Home.jsx";
import DetailProduct from "./component/DemoUseParams/DetailProduct.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeTemplate/>}>
                <Route index element={<Home />}/>
                <Route path = "login" element={<DemoForm />}/>
                <Route path = "register" element={<DemoFormWithFormik />}/>
                <Route path="formBaiTap" element={<FormValidation/>}/>
                <Route path="detail/:id" element={<DetailProduct/>}/>
            </Route>
            <Route path="demo-use-navigate" element={<HomeTemplate/>}>
                <Route path = "use-navigate" element={<DemoUseNavigate />}/>
                <Route path = "fogot-pass" element={<FogotPass />}/>
            </Route>
        </Routes>
    );
};

export default App;
