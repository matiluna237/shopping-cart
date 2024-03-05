import { create } from "zustand";
import { StateCustomer } from "../interfaces/interfaces";

export const useCustomerStore = create<StateCustomer>((set, get) => {
  return {
    customer: {
      name: "Matias Perez",
      email: "matias@gmail.com",
      zipcode: "4200",
      address: "Belgrano 560",
      phone: "3856369963",
    },

    //funcion para modificar el campo name
    changeCustomerName: (newName: string) => {
      const { customer } = get();
      set({
        customer: {
          name: newName,
          email: customer.email,
          zipcode: customer.zipcode,
          address: customer.address,
          phone: customer.phone,
        },
      });
    },

    //funcion para modificar el campo email
    changeCustomerEmail: (newEmail: string) => {
      const { customer } = get();
      set({
        customer: {
          name: customer.name,
          email: newEmail,
          zipcode: customer.zipcode,
          address: customer.address,
          phone: customer.phone,
        },
      });
    },

    //funcion para modificar el campo zipcode
    changeCustomerZipcode: (newZipcode: string) => {
      const { customer } = get();
      set({
        customer: {
          name: customer.name,
          email: customer.email,
          zipcode: newZipcode,
          address: customer.address,
          phone: customer.phone,
        },
      });
    },

    //funcion para modificar el campo address
    changeCustomerAddress: (newAddress: string) => {
      const { customer } = get();
      set({
        customer: {
          name: customer.name,
          email: customer.email,
          zipcode: customer.zipcode,
          address: newAddress,
          phone: customer.phone,
        },
      });
    },

    //funcion para modificar el campo phone
    changeCustomerPhone: (newPhone: string) => {
      const { customer } = get();
      set({
        customer: {
          name: customer.name,
          email: customer.email,
          zipcode: customer.zipcode,
          address: customer.address,
          phone: newPhone,
        },
      });
    },
  };
});
