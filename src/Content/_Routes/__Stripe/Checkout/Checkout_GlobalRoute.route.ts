import { Router, Response, Request } from 'express';
import { Checkout_BodyClass } from '@BodyClasses';

export const Checkout_GlobalRoute = Router().post(
  'checkout',
  // ValidateBody_GlobalMiddleware<Checkout_BodyClass>(Checkout_BodyClass),
  async (req: Request, res: Response) => {
    const body: Checkout_BodyClass = req.body;
    res.status(200).json({ message: 'Hello from Checkout_GlobalRoute' });
  },
);
