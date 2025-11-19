import React from 'react';

function DemoForm() {
    const [userLogin, setUserLogin] = React.useState({email: '', password: ''});
    const [errorLogin, setErrorLogin] = React.useState({email: '', password: ''});
    const [isValid, setIsValid] = React.useState(true);
    const handleLogin = (e) => {
        let {id, value} = e.target;
        let newUserLogin = {
            ...userLogin,
            [id]: value,
        }
        let newErrorLogin = {
            ...errorLogin,
        }
        if (value.trim() === '') {
            newErrorLogin[id] = `${id} is invalid`;
        } else {
            newErrorLogin[id] = "";
            switch (id) {
                case 'email': {
                    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if (!regexEmail.test(value)) {
                        newErrorLogin[id] = `${id} is not match regex`;
                    }
                }
                    break;
                case 'password': {
                    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                    if (!regexPassword.test(value)) {
                        newErrorLogin[id] = `${id} is not match regex`;
                    }
                }
                    break;
            }
        }
        setUserLogin(newUserLogin);
        setErrorLogin(newErrorLogin);
        checkValidForm(newUserLogin, newErrorLogin);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const checkValidForm = (newUserLogin, newErrorLogin) => {
        for (let user in newUserLogin) {
            if(newUserLogin[user].trim() === ""){
                setIsValid(false);
                return;
            }
        }
        for (let user in newErrorLogin) {
            if(newErrorLogin[user].trim() !== "") {
                setIsValid(false);
                return;
            }
        }
        setIsValid(true);
    }

    return (
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
                <input type="email" id="email" name="email" onChange={handleLogin}
                       className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                       placeholder="name@flowbite.com" required/>
                <p className="text-red-500">{errorLogin.email}</p>
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Your
                    password</label>
                <input type="password" id="password" name="password" onChange={handleLogin}
                       className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                       placeholder="••••••••" required/>
                <p className="text-red-500">{errorLogin.password}</p>

            </div>
            <button type="submit" disabled={!isValid}
                    className="text-black bg-amber-100 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit
            </button>
        </form>
    );
}

export default DemoForm;