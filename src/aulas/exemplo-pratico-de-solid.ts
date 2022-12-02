// billet, credit, debit, etc

interface Card {
  number: number;
  cvv: number;
  expiration: string;
}

interface PaymentMethod {
  getDiscountAmount(amount: number): number;
}

class Billet implements PaymentMethod {
  getDiscountAmount(amount: number): number {
    return amount * 0.1;
  }
}

class Credit implements PaymentMethod, Card {
  private installments: number;

  constructor(installments: number) {
    this.installments = installments;
  }

  getDiscountAmount(amount: number): number {
    if (this.installments === 1) {
      return amount * 0.05;
    }

    if (this.installments <= 6) {
      return amount * 0.02;
    }

    return 0;
  }
}

class Debit implements PaymentMethod {
  getDiscountAmount(amount: number): number {
    return amount * 0.05;
  }
}

class Pix implements PaymentMethod {
  getDiscountAmount(amount: number): number {
    return amount * 0.15;
  }
}

class CalculateOrderDiscount {
  private paymentMethod: PaymentMethod;

  constructor(paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  public execute(amount: number): number {
    // calculo do desconto
    return this.paymentMethod.getDiscountAmount(amount);
  }
}

const calculateOrderDiscount = new CalculateOrderDiscount(new Credit(6));
calculateOrderDiscount.execute(2000);

const calculateOrderDiscount2 = new CalculateOrderDiscount(new Pix());
calculateOrderDiscount2.execute(4000);

class SubmitOrderInvoice {
  public execute() {
    // emissão da nota
  }
}

class CreateOrderUseCase {
  public execute() {
    // const calculateOrderDiscount = new CalculateOrderDiscount();
    // const submitOrderInvoice = new SubmitOrderInvoice();
    // calculateOrderDiscount.execute();
    // submitOrderInvoice.execute();
  }
}
