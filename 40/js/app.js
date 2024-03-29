'use strict'

    import {Controller} from "./controller.js";
    import {Model} from "./model.js";
    import {View} from "./view.js";


    const app = new Controller(new View(), new Model())

    app.start()