import React from "react";
import Profile from "./Profile/Profile";
import userList from "./Profile/user.json";
import Statistics from "./Statistics/Statistics";
import statisticalData from "./Statistics/statistical-data.json";
import friendsList from "./Friends/friends.json";
import FriendList from "./Friends/FriendList";
import TransactionHistory from "./Transactions/TransactionHistory";
import transactionData from "./Transactions/transactions.json";

export default function App() {
  return (
    <>
      <Profile user={userList} />
      <Statistics title="" stats={statisticalData} />
      <FriendList friends={friendsList} />
      <TransactionHistory items={transactionData} />
    </>
  );
}
