import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Logo from '../../assets/images/logo.png';
import { useAuth } from '../../hooks/useAuth';
import { loginSchema } from '../../schemas/auth';

type LoginFormInputs = z.infer<typeof loginSchema>;

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
    });

    const { handleLogin } = useAuth();

    const onSubmit = (data: LoginFormInputs) => {
        console.log('Form Data:', data);
        // handleLogin();
    };

    const handleSsoLogin = () => {
        handleLogin();
    }

    return (
        <section className="login d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-5 col-md-7 col-sm-9 col-12">
                        <div className="LoginCard text-center py-lg-4 py-md-4 py-sm-4 py-3 px-lg-5 px-md-4 px-sm-4 px-3">
                            <img src={Logo} className="mt-lg-2 mt-md-2 mt-sm-2 mt-0" alt="" />
                            <h1 className="mb-2 mt-4">Welcome!</h1>
                            <p className="m-0">Enter your credentials to sign in.</p>

                            <form onSubmit={handleSubmit(onSubmit)} className="mt-lg-4 mt-md-3 mt-3 mb-lg-2 mb-md-2 mb-sm-2 mb-0">
                                <div className="mb-3">
                                    <div className="iconInput position-relative d-flex align-items-center">
                                        <div className="inputIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M2.4 20.5124C2.4 16.7369 5.55429 13.6762 12 13.6762C18.4457 13.6762 21.6 16.7369 21.6 20.5124C21.6 21.1131 21.1618 21.6 20.6212 21.6H3.37882C2.83824 21.6 2.4 21.1131 2.4 20.5124Z"
                                                    stroke="#242A30" stroke-width="2" />
                                                <path
                                                    d="M15.6 5.99999C15.6 7.98822 13.9882 9.59999 12 9.59999C10.0118 9.59999 8.4 7.98822 8.4 5.99999C8.4 4.01177 10.0118 2.39999 12 2.39999C13.9882 2.39999 15.6 4.01177 15.6 5.99999Z"
                                                    stroke="#242A30" stroke-width="2" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                            {...register('username')}
                                        />
                                        {errors.username && (
                                            <div className="invalid-feedback text-start mt-1">
                                                {errors.username.message}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-0">
                                    <div className="iconInput position-relative d-flex align-items-center">
                                        <div className="inputIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M6.52889 9.30247H6.66892M12 9.30247H12.14M17.3295 9.30247H17.4695M11.4 14.7025H4.53333C3.35513 14.7025 2.4 13.7473 2.4 12.5691V6.0358C2.4 4.85759 3.35513 3.90247 4.53333 3.90247H19.4667C20.6449 3.90247 21.6 4.85759 21.6 6.0358V9.30247M15.4112 13.5975L16.8012 12.9025C17.8147 12.3958 19.0077 12.3958 20.0212 12.9025L21.4112 13.5975C21.4112 13.5975 21.4112 15.7875 21.4112 16.9425C21.4112 18.0975 20.3435 18.8772 18.4112 20.0975C16.4789 18.8772 15.4112 17.8475 15.4112 16.9425V13.5975Z"
                                                    stroke="#242A30" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                            {...register('password')}
                                        />
                                        {errors.password && (
                                            <div className="invalid-feedback text-start mt-1">
                                                {errors.password.message}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="forgotPwd my-4 text-end w-100">
                                    <a href="#">Forgot password?</a>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Log in</button>
                            </form>
                            <button className="btn btn-primary" onClick={() => handleSsoLogin()}>Sign in using SSO</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
