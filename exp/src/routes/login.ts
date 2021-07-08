import { Router, Request, Response } from "express";

function loginGet(req: Request, res: Response) {
  console.log("get login");
  res.send(`
      <form method="POST">
      <div>
        <label style="display:inline-block;width:100px;">Email</label>
        <input name="email" />
      <div>
      <div style="padding:4px;"></div>
      <label style="display:inline-block;width:100px;">Password</label>
      <input type="password" name="password"/>
      </div>
      <div>
      <button>Submit</button>
      </form>
      `);
}

// extending an interface to get proper type resolution
interface Request1 extends Request {
  ReqBody: string;
}

function loginPost(req: Request, res: Response) {
  console.log("post login");
  const { email, password } = req.body;
  console.log(email, password);

  // check for missing email or password
  res.send(email + ":" + password);
}

export { loginGet, loginPost };
