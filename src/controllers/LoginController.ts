import { Request, Response } from "express";
import { bodyValidator, controller, get, post, use } from "./decorators";

function logger(req: Request, res: Response, next: Function): void {
    console.log('Request received');
    next();
}

@controller('/auth')
class LoginController {

    @get('/login')
    @use(logger)
    getLogin(req: Request, res: Response): void {
        res.send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input name="email" />
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password" />
            </div>
            <button>Submit</button>
            </form>
        `);

    }

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response): void {
        const { email, password } = req.body;

        if (email === '1' && password === '2') {
            req.session = { loggedIn: true };
            res.redirect('/');
        } else {
            res.send('Invalid email or password1');
        }
    };

    @get('/logout')
    getLogout(req: Request, res: Response): void {
        req.session = undefined;
        res.redirect('/');
    };
}