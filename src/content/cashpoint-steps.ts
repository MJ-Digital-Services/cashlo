export type CashpointStep = {
  number: number;
  title: string;
  description: string;
};

export const cashpointSteps: CashpointStep[] = [
  { number: 1, title: "Request", description: "Customer asks for a cash withdrawal at the store." },
  { number: 2, title: "Enter amount", description: "Retailer enters the withdrawal amount in the app." },
  { number: 3, title: "Generate QR", description: "A secure dynamic QR code is generated instantly." },
  { number: 4, title: "Scan", description: "Customer scans the QR using any UPI app." },
  { number: 5, title: "Authorize", description: "Customer approves the payment with their UPI PIN." },
  { number: 6, title: "Cash out", description: "Retailer hands over the cash. Done." },
];