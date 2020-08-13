$(document).ready(function() {
  $("button#submit").click(function() {

    const age = $("select#age").val();
    const musical = $("select#musical").val();
    const leadership = $("select#leadership").val();
    const holodeck = $("select#holodeck").val();

    if (age === "young" && musical === "sax" || leadership === "no" && holodeck === "moderate") {
      $("#result-riker").hide();
      $("#result-picard").hide();
      $("#result-barclay").hide();
      $("#result-harryKim").show();
      $("#result-janeway").hide();
    } else if (age === "youngish" && musical === "none" && leadership === "yes" || leadership === "yes" && holodeck === "low") {
      $("#result-riker").hide();
      $("#result-picard").hide();
      $("#result-barclay").hide();
      $("#result-harryKim").hide();
      $("#result-janeway").show();
    } else if (age === "wise" && musical === "flute" || leadership === "yes" && musical === "flute") {
      $("#result-riker").hide();
      $("#result-picard").show();
      $("#result-barclay").hide();
      $("#result-harryKim").hide();
      $("#result-janeway").hide();
    } else if (age === "youngish" && musical === "none" && leadership === "no" || leadership === "no" && holodeck === "high") {
      $("#result-riker").hide();
      $("#result-picard").hide();
      $("#result-barclay").show();
      $("#result-harryKim").hide();
      $("#result-janeway").hide();
    } else {
      $("#result-riker").show();
      $("#result-picard").hide();
      $("#result-barclay").hide();
      $("#result-harryKim").hide();
      $("#result-janeway").hide();
    }
  });
});