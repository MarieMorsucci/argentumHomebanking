import React from "react";

function TransactionRow({date, type,amount,description,id}) {
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
        {date}
      </th>
      <td class="px-6 py-4">{type}</td>
      <td class="px-6 py-4">{amount}</td>
      <td class="px-6 py-4">{description}</td>
      <td class="px-6 py-4">{id}</td>
     
    </tr>
  );
}

export default TransactionRow;
