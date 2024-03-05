export interface Product {
    id:                 number;
    title:              string;
    description:        string;
    price:              number;
    discountPercentage: number;
    rating:             number;
    stock:              number;
    brand:              string;
    category:           string;
    thumbnail:          string;
    images:             string[];
}

export interface StateProducts {
    products: Product[];
    fetchProducts: () => Promise<void>;
}





export interface ProductInCart {
    id:                 number;
    title:              string;
    description:        string;
    price:              number;
    discountPercentage: number;
    rating:             number;
    stock:              number;
    brand:              string;
    category:           string;
    thumbnail:          string;
    images:             string[];
    quantity:           number;
    subtotal:           number;
}

export interface StateCart {
    cart: ProductInCart[];
    total: number;
    addProductToCart: (product: Product) => Promise<void>;
    clearCart: () => Promise<void>;
    checkProductInCart: (product: Product) => boolean;
    removeProductFromCart: (product: Product) => void;
    addQuantity: (product: Product) => void;
    removeQuantity: (product: Product) => void;
}







export interface Filter {
    category: string;
    minPrice: number;
    searchInput: string;
}

export interface StateFilters {
    filters: Filter;
    filterProducts: (products:Product[]) => Product[];
    setFilters: (newFilters: Filter) => void;
}


export interface Customer {
    name: string;
    email: string;
    zipcode: string;
    address: string;
    phone: string;
}

export interface StateCustomer {
    customer: Customer;
    changeCustomerName: (newName: string) => void;
    changeCustomerEmail:(newEmail: string) => void;
    changeCustomerZipcode:(newZipcode: string) => void;
    changeCustomerAddress:(newAddress: string) => void;
    changeCustomerPhone:(newPhone: string) => void;
    addCustomer: (customer: Customer) => void;
}


export interface Payment {
    nameOnCard: string;
    cardNumber: string;
    expiryData: string;
    securityCode: string;
}

export interface StatePayment {
    payment: Payment;
    changePaymentNameOnCard: (newNameOnCard: string) => void;
    changePaymentCardNumber: (newCardNumber: string) => void;
    changePaymentExpiryDate: (newExpiryDate: string) => void;
    changePaymentSecurityCode: (newSecurityCode: string) => void;
}


export interface ItemMercadoPago {
    title: string;
    description: string;
    picture_url: string;
    quantity: number;
    unit_price: number;
}