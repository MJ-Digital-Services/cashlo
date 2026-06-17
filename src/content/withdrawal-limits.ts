export type WithdrawalLimit = {
  value: number;
  prefix: string;
  label: string;
};

export const withdrawalLimits: WithdrawalLimit[] = [
  { value: 5000, prefix: "₹", label: "Per Transaction" },
  { value: 10000, prefix: "₹", label: "Per Day" },
  { value: 50000, prefix: "₹", label: "Per Month" },
];