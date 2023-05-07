import $ from "jquery";
import { debounce } from "lodash";

$.when($.ready).then(function () {
  let counter = 0;
  function updateCounter() {
    counter++;
    $("#count").text(`${counter} clicks on the button`);
  }
  $("body").append(
    $("<p></p>").text("Holberton Dashboard"),
    $("<p></p>").text("Dashboard data for the students"),
    $("<button></button>").text("Click here to get started"),
    $("<p></p>").attr("id", "count"),
    $("<p></p>").text("Copyright - Holberton School")
  );
  $("button").on("click", debounce(updateCounter, 500));
});
