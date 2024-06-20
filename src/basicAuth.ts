export class ErrorResponse extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const authentication = (req, res, next) => {
  const authheader = req.headers.authorization;

  if (!authheader) {
    const err = new ErrorResponse("Päivitä sivu ja kirjaudu sisään", 401);
    res.setHeader("WWW-Authenticate", "Basic");
    return res.status(401).json({ message: err.message });
  }

  const auth = Buffer.from(authheader.split(" ")[1], "base64")
    .toString()
    .split(":");
  const user = auth[0];
  const pass = auth[1];

  const userSecret = process.env.USER_SECRET;
  const passSecret = process.env.PASS_SECRET;

  if (user == userSecret && pass == passSecret) {
    next();
  } else {
    const err = new ErrorResponse("Päivitä sivu ja kirjaudu sisään", 401);
    res.setHeader("WWW-Authenticate", "Basic");
    return res.status(401).json({ message: err.message });
  }
};
