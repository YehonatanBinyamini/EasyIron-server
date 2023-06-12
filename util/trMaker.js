const imagesData = require("../documents/convertingImages");

//example to data = [{ weight: 1, totalLength: 12, diameter: 3, units: 4, A: 5, B: 7  },
//              { weight: 1, totalLength: 12, diameter: 3, units: 4, A: 5, B: 7 }];
function createTRs(data) {
  let allTRs = "";
  for (const item of data) {
    if (item.shape === "L") {
      allTRs += createTRforL(item);
    } else if (item.shape === "line") {
      allTRs += createTRforLine(item);
    }
  }
  return allTRs;
}

function createTRforL(item) {
  // console.log(data)
  let result = "";
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
                    B <br>${item.B}
                </div>
            </div>               
        </td>
        <td>${item.weight}</td>
        <td>${item.totalLength}</td>
        <td>${item.diameter}</td>
        <td>${item.units}</td>
        <td>${item.A} A <br>${item.B} B</td>
    </tr>`;

  return result;
}

function createTRforLine(item) {
  let result = "";
  result += `
    <tr class="item">
        <td>
            <div class="A_B_L">
                <div class="A_L">
                    <img class="line-img" src=${imagesData.lineImageDataURI} alt="line" />
                    <div class="kubeA">
                        A ${item.A}
                    </div>
                </div>
            </div>               
        </td>
        <td>${item.weight}</td>
        <td>${item.totalLength}</td>
        <td>${item.diameter}</td>
        <td>${item.units}</td>
        <td>${item.A} A</td>
    </tr>`;
  return result;
}

exports.createTRs = createTRs;
