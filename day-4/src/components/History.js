import React from "react";
import "./history.css";
import Footer from "./Footer";

const transactions = [
  {
    amount: "$100",
    senderName: "John Doe",
    senderAccount: "12345678",
    receiverName: "Jane Smith",
    receiverAccount: "87654321",
    date: "2023-07-22",
    time: "10:30 AM",
  },
  {
    amount: "$100",
    senderName: "John Doe",
    senderAccount: "12345678",
    receiverName: "Jane Smith",
    receiverAccount: "87654321",
    date: "2023-07-22",
    time: "10:30 AM",
  },
  {
    amount: "$100",
    senderName: "John Doe",
    senderAccount: "12345678",
    receiverName: "Jane Smith",
    receiverAccount: "87654321",
    date: "2023-07-22",
    time: "10:30 AM",
  },
];
function PaymentScheduleCard({
  amount,
  senderName,
  senderAccount,
  receiverName,
  receiverAccount,
  date,
  time,
}) {
  return (
    <div className="card-h">
      <div className="card-header">
        <span>Amount: {amount}</span>
      </div>
      <div className="card-body">
        <div className="from-to-row">
          <div className="from-account">
            <div className="detail-row">
              <div className="detail-label">Sender Name:</div>
              <div className="detail-value">{senderName}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">From Account:</div>
              <div className="detail-value">{senderAccount}</div>
            </div>
          </div>
          <div className="to-account">
            <div className="detail-row">
              <div className="detail-label">Receiver Name:</div>
              <div className="detail-value">{receiverName}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">To Account:</div>
              <div className="detail-value">{receiverAccount}</div>
            </div>
          </div>
        </div>
        <div className="detail-row">
          <div className="detail-label">Date:</div>
          <div className="detail-value">{date}</div>
        </div>
        <div className="detail-row">
          <div className="detail-label">Time:</div>
          <div className="detail-value">{time}</div>
        </div>
      </div>
    </div>
  );
}
function History() {
  return (
    <div>
      <div>
        <h1>Payment History</h1>
        <div className="my-bills-page">
          {transactions.map((transaction, index) => (
            <PaymentScheduleCard key={index} {...transaction} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default History;
