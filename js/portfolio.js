var grid = $(".list_container").isotope({
  layoutMode: "fitRows",
  itemSelector: ".jobs_container",
  percentPosition: true,
  stagger: 50,
  transitionDuration: 500,
});

$(".type_selection_filter_group").on("click", "button", function () {
  var filterValue = "." + $(this).attr("data-filter");
  grid.isotope({ filter: filterValue, sortBy: "random" });
  grid.isotope("shuffle");
});

$(".type_selection_filter_group").each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on("click", "button", function () {
    $buttonGroup.find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
  });
});

$(document).ready(function () {
  const item =
    "." + $(".type_selection_filter_group button.is-checked").attr("data-filter");
  grid.isotope({ filter: item, sortBy: "random" });
  grid.isotope("shuffle");
});