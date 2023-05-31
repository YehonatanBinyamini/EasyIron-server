const imagesData = require("../documents/convertingImages")

const Larr = [{ weight: 1, totalLength: 12, diameter: 3, Amount: 4, A: 5, B: 7  },
              { weight: 1, totalLength: 12, diameter: 3, Amount: 4, A: 5, B: 7 }];
function createTRforL() {
   let result ="";
   for (const item of Larr){
    result += `
    <tr class="item">
        <td>
            <div class="A_B_L">
                <div class="A_L">
                    <img class="img" src=${imagesData.LimageDataURI} alt="L" />
                    <div class="kubeA">
                        A ${item.A}
                    </div>
                </div>
                <div class="kubeB">
                    B <br /> A ${item.B}
                </div>
            </div>               
        </td>
        <td>${item.weight}</td>
        <td>${item.totalLength}</td>
        <td>${item.diameter}</td>
        <td>${item.Amount}</td>
        <td>${item.A} A <br>${item.B} B</td>
    </tr>`;
}
  return result;
}

exports.createTRforL = createTRforL;
