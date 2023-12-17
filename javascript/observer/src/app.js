import { Model } from '../todo/model.js';
import { Controller } from '../todo/controller.js';
import { View } from '../todo/view.js';

const model = Model();
const view = View();

const app = Controller(model, view);

console.log(app.model.getTodos());