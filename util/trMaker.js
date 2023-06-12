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
    } else if (item.shape === "shape3") {
      allTRs += createTRforShape3(item);
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

function createTRforShape3(item) {
  let result = "";
  result += `
      <tr class="item">
          <td>
          <div class="letters_and_img">
            <div class="A_L">
                <div class="kubeA_shape3">
                ${item.A} A
                </div>
                <img class="shape3_img" src=${imagesData.shape3ImageDataURI} alt="shape3" />
                <div class="kubeB_shape3">
                B <br /> ${item.B}
                </div>
                <div class="kubeC_shape3">
                C <br /> ${item.C}
                </div>
                <div class="kubeD_shape3">
                D <br /> ${item.D}
                </div>
            </div>
        </div>
                       
          </td>
          <td>${item.weight}</td>
          <td>${item.totalLength}</td>
          <td>${item.diameter}</td>
          <td>${item.units}</td>
          <td class="no-space">${item.A} A<br/>${item.B} B<br/>${item.C} C<br/>${item.D} D</td>
      </tr>`;
  return result;
}

exports.createTRs = createTRs;
