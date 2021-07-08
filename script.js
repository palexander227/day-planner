$(document).ready(function () {
  const hour = [
    "1AM",
    "2AM",
    "3AM",
    "4AM",
    "5AM",
    "6AM",
    "7AM",
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
    "10PM",
    "11PM",
    "12AM",
  ];

  let storeBlock = "";

  $.map(hour, function (item, ind) {
    storeBlock += `<div class="block">
                     <div class="block-time">
                        <p>${item}</p>
                          </div>
                            <input id=${ind}  type="text" />
                          <div class="saveBtn">
                        <i id=${item} class="fas fa-save"></i>
                      </div>
                   </div>`;
  });
  $("#block").html(storeBlock);

  $.map(hour, function (item, ind) {
    $(`#${item}`).click(function () {
      console.log(item);
      localStorage.setItem(ind, $(`#${ind}`).val());
    });
  });

  setInterval(function () {
    const d = new Date();

    $("#currentDay").text(moment(d).format("dddd, MMMM Do"));

    for (i = 0; i < hour.length; i++) {
      if (d.getHours() == 0) {
        $("#23").css("background-color", "#ff6961");
        $("#22").css("background-color", "#d3d3d3");
      } else {
        if (d.getHours() == i + 1) {
          $(`#${i}`).css("background-color", "#ff6961");
        }
        if (i + 1 < d.getHours()) {
          $(`#${i}`).css("background-color", "#d3d3d3");
        }
        if (i + 1 > d.getHours()) {
          $(`#${i}`).css("background-color", "#77dd77");
        }
      }
    }
  }, 1000);

  const newarr = JSON.parse(JSON.stringify(localStorage));
  for (const key in newarr) {
    $.map([newarr], function (item) {
      $(`#${key}`).val(item[key]);
    });
  }
});
