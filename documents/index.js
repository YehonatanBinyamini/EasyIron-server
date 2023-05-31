const stringStyle = require("./stringStyle");
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
      <div class="row-order">
      <h4 class="align-left">
      ${`${today.getDate()}. ${
         today.getMonth() + 1
      }. ${today.getFullYear()}`}
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
         <h1 class="justify-center">סה"כ: ${totalPrice} ש"ח</h1>
      </div>
   </body>
</html>
    `;
};
