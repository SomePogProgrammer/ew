import $ from "jquery";
import { Functions } from "./FunctionModule";

var skBtn = document.getElementsByClassName("blP1Oc4LUJ2bB_Xs7lbfH");

$("button").click(Functions.onClick);

if ($(".blP1Oc4LUJ2bB_Xs7lbfH").hasClass("blP1Oc4LUJ2bB_Xs7lbfH")) {
  console.log(
    skBtn[0].parentElement.parentElement.parentElement.parentElement.parentElement.remove()
  );
}
