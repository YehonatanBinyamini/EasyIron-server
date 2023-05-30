const stringStyle = require("./stringStyle")
module.exports = ({
  name,
  totalPrice,
  logo,
  receiptId,
  length,
  weight,
  totalLength,
  diameter,
  Amount,
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
      בס"ד
      <div style="left: 200px;">
            ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}`}
      </div>

      <img src=${logo} style="width: 100%; max-width: 220px; justify-content: flex-end; margin-top: -50px; margin-bottom: -50px;" />
      <div style="text-align: right;">         
         מספר קבלה: ${receiptId}
         שם הלקוח: ${name}
      </div>
      <table cellpadding="0" cellspacing="0">
            <tr class="heading">
               <td>צורה</td>
               <td
               <td>משקל</td>
               <td>אורך כללי</td>
               <td>קוטר</td>
               <td>כמות</td>
               <td>אורך</td>
            </tr>
            <tr class="item">
                  <td>
                     <div class="A_B_L">
                     <div class="A_L">
                     <img class="img" src=${Limg} alt="L" />
                     <div class="kubeA">
                        A <br />
                        12
                     </div>
                     </div>
                     <div class="kubeB">
                     B <br /> 20
                     </div>
                  </div>               
               </td>
               <td>${weight}</td>
               <td>${totalLength}</td>
               <td>${diameter}</td>
               <td>${Amount}</td>
               <td>${length}</td>
            </tr>
         </table>
         <br />
         <h1 class="justify-center">Total price: ${totalPrice}$</h1>
      </div>
   </body>
</html>
    `;
};