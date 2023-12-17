import { Model } from "./model/model.js";
import { View } from "./view/view.js";
import { Controller } from "./controller/controller.js";

// let model = Model();
// console.log(model.getTodos());
// let view = View();

const app = Controller(Model(), View());