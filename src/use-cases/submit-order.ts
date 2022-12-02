import { Order } from '../domain/purchases/order';
import { OrdersRepository } from '../repositories/orders-repository';

interface SubmitOrderRequest {
  customerDocument: string;
  total: number;
}

export class SubmitOrder {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute({ customerDocument, total }: SubmitOrderRequest) {
    // Regras de Negócio
    const order = new Order(customerDocument, total);

    // Persistir no BD
    await this.ordersRepository.create(order);
  }
}
