export type WithdrawalLimit = {
  amount: string;
  label: string;
};

export const withdrawalLimits: WithdrawalLimit[] = [
  { amount: "₹5,000", label: "Per Transaction" },
  { amount: "₹10,000", label: "Per Day" },
  { amount: "₹50,000", label: "Per Month" },
];