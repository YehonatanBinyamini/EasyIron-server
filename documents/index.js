const stringStyle = require("./stringStyle");
const { createTRforL } = require("../util/trMaker");
module.exports = ({
  name,
  data,
  logo,
  receiptId,
  totalPrice,
  //   length,
  //   totalLength,
  //   diameter,
  //   Amount,
  Limg,
}) => {
  const today = new Date();
  return `
    <!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>PDF Result Template</title>
      <style>
         ${stringStyle}
      </style>
      </head>
      <body>
      <div class="invoice-box">
      <div class="row-order">
      <h4 class="align-left">
      ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}`}
      </h4>
      <h4 class="align-right">בס"ד</h4>
      </div>
      <img src=${logo} class="logo-image"/>
      <div class="align-right">
         <label class="bold-text">שם הלקוח:</label> ${name} <br>
         <label class="bold-text">מספר קבלה:</label> ${receiptId}
      </div>
      <table cellpadding="0" cellspacing="0">
            <tr class="heading">
               <td>צורה</td>
               <td>משקל</td>
               <td>אורך כללי</td>
               <td>קוטר(מ"מ)</td>
               <td>כמות(יחי')</td>
               <td>אורך(ס"מ)</td>
            </tr>
            ${createTRforL(data)}
         </table>
         <br />
         <h1 class="justify-center">סה"כ: ${totalPrice} ש"ח</h1>
      </div>
   </body>
</html>
    `;
};
