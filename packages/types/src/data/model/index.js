"use strict";
exports.__esModule = true;
exports.Model = exports.ModelType = void 0;
var ModelType;
(function (ModelType) {
    ModelType["DomainModel"] = "domain_entity";
    ModelType["GenericModel"] = "generic_entity";
})(ModelType = exports.ModelType || (exports.ModelType = {}));
var Model = /** @class */ (function () {
    function Model(props) {
        var created = props.created, description = props.description, fields = props.fields, name = props.name, id = props.id, relationships = props.relationships, updated = props.updated;
        this.created = created;
        this.description = description;
        this.fields = fields;
        this.id = id;
        this.name = name;
        this.relationships = relationships;
        this.updated = updated;
    }
    return Model;
}());
exports.Model = Model;
