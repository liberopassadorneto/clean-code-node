import { Order } from '../domain/purchases/order';

interface OrdersRepository {
  create(order: Order): Promise<void>;
}

export { OrdersRepository };
