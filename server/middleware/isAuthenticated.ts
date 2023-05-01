import { Request, Response, NextFunction } from 'express';

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const isAuthenticated = req.headers.authorization === 'Bearer my-temporary-token';

  if (isAuthenticated) {
		// 인증됨
    next();
  } else {
    // 인증안될때 401 에러
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export default isAuthenticated;
