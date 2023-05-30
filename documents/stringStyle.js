module.exports = 
`.A_B_L {
    display: flex;
    flex-direction: row-reverse;
    position: absolute;
    margin-top: -80px;
    margin-left: -50px;
    
}

.A_L {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    flex-direction: column;
    
}

.img {
    width: 60px;
    height: 90px;
    margin-right: 5px;
    text-align: center;

}

.kubeA {
    margin-top: -15px;
    width: 50px;
    height: 50px;
    text-align:center;
    font-weight: bold;
    
}

.kubeB {
    margin-top: 50px;
    margin-right: -45px;
    width: 50px;
    height: 50px;
    text-align: center;
    font-weight: bold;
    
}

.AB_inputs {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    text-align: right;
    margin-right: 190px;
    font-weight: bold;
}

.invoice-box {
    max-width: 800px;
    min-height: 1000px;
    margin: auto;
    padding: 30px;
    border: 1px solid #eee;
    box-shadow: 0 0 10px rgba(0, 0, 0, .15);
    font-size: 16px;
    line-height: 24px;
    font-family: 'Helvetica Neue', 'Helvetica';
    color: #555;
    display: flex;
    flex-direction: column;
    align-items: end;
 }
 
 .justify-center {
    text-align: center;
 }
 .invoice-box table {
    margin: 0px;
    width: 100%;
    line-height: inherit;
    text-align: center;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
 }
 .invoice-box table td {
    padding: 55px;
    vertical-align: top;
 }
 .invoice-box table tr td:nth-child(2) {
    text-align: right;
 }
 .invoice-box table tr.top table td {
    padding-bottom: 50px;
 }
 .invoice-box table tr.top table td.title {
    font-size: 45px;
    line-height: 45px;
    color: #333;
 }
 .invoice-box table tr.information table td {
    padding-bottom: 40px;
 }
 .invoice-box table tr.heading td {
    padding: 20px;
    background: #eee;
    border-bottom: 1px solid #ddd;
    font-weight: bold;
    direction: rtl;
 }
 .invoice-box table tr.details td {
    padding-bottom: 20px;
 }
 .invoice-box table tr.item td {
    border-bottom: 1px solid #eee;
 }
 .invoice-box table tr.item.last td {
    border-bottom: none;
 }
 .invoice-box table tr.total td:nth-child(2) {
    border-top: 2px solid #eee;
    font-weight: bold;
 }
 @media only screen and (max-width: 600px) {
 .invoice-box table tr.top table td {
    width: 100%;
    display: block;
    text-align: center;
 }
 .invoice-box table tr.information table td {
    width: 100%;
    display: block;
    text-align: center;
 }`;