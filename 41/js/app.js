'use strict'

import Controller from "./Controller.js";
import Model from "./Model.js";
import View from "./View.js"


const app = new Controller(Model, View)
app.init()


